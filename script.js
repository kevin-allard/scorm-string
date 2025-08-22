document.addEventListener('DOMContentLoaded', () => {

    // --- 1. STATE & DATA ---
    let lessonManifest = null;
    let teacherLessonData = null;
    let currentLessonPages = [];
    let currentPageIndex = 0;

    // --- 2. DOM ELEMENT REFERENCES ---
    const iframe = document.getElementById('content-frame');
    const learnosityContainer = document.getElementById('learnosity-container');
    const playerTitle = document.getElementById('player-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const activateSelect = document.getElementById('activate-select');
    const teacherBtn = document.getElementById('teacher-btn');
    const teacherPane = document.getElementById('teacher-pane');
    const closePaneBtn = document.getElementById('close-pane-btn');
    const paneContent = document.getElementById('pane-content');
    const paneBackdrop = document.getElementById('pane-backdrop');

    // --- 3. DATA LOADING ---
    async function loadAllData() {
        // ... (This function is unchanged from the last version)
        try {
            const [manifestResponse, teacherResponse] = await Promise.all([
                fetch('data/lesson-manifest.json'),
                fetch(CONFIG.teacherDataPath)
            ]);
            if (!manifestResponse.ok || !teacherResponse.ok) {
                throw new Error('Failed to fetch one or more data files.');
            }
            lessonManifest = await manifestResponse.json();
            teacherLessonData = await teacherResponse.json();
        } catch (error){
            console.error("DETAILED ERROR IN LOADALLDATA:", error);
            document.body.innerHTML = `<p style="color:red; font-family: sans-serif; padding: 20px;">ERROR: Could not load lesson-manifest.json or teacher data. Please check the file paths in your 'data' folder and the JSON format.</p>`;
        }
    }

    // --- 4. CORE PLAYER LOGIC ---
    function buildLessonSequence() { /* ... Unchanged ... */ }
    function loadPage(index) { /* ... Unchanged ... */ }
    async function renderLearnosityItem(itemRef) { /* ... Unchanged ... */ }
    function updateUI() { /* ... Unchanged ... */ }
    function populateDropdown() { /* ... Unchanged ... */ }
    
    // (Pasting them here for completeness)
    function buildLessonSequence() {
        if (!lessonManifest) return;
        currentLessonPages = [];
        const selectedActivateOption = activateSelect.value;
        lessonManifest.blocks.forEach(block => {
            if (block.title === 'Activate') {
                const selectedActivity = block.options.find(opt => opt.title === selectedActivateOption);
                if (selectedActivity) {
                    selectedActivity.pages.forEach(page => {
                        currentLessonPages.push({ ...page, folder: selectedActivity.folder, block: `Activate: ${selectedActivity.title}`, genericBlock: 'Activate' });
                    });
                }
            } else {
                block.pages.forEach(page => {
                    currentLessonPages.push({ ...page, folder: page.folder || block.folder, block: block.title, genericBlock: block.title });
                });
            }
        });
    }
    function loadPage(index) {
        if (index < 0 || index >= currentLessonPages.length) {
            if (currentLessonPages.length === 0) updateUI();
            return;
        }
        currentPageIndex = index;
        const pageInfo = currentLessonPages[currentPageIndex];
        if (pageInfo.type === 'xhtml') {
            iframe.style.display = 'block';
            learnosityContainer.style.display = 'none';
            learnosityContainer.innerHTML = '';
            const filePath = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
            iframe.src = filePath;
        } else if (pageInfo.type === 'learnosity') {
            iframe.style.display = 'none';
            iframe.src = 'about:blank';
            learnosityContainer.style.display = 'block';
            renderLearnosityItem(pageInfo.item_reference);
        }
        updateUI();
        updateTeacherPane();
    }
    async function renderLearnosityItem(itemRef) {
        learnosityContainer.innerHTML = `<span class="learnosity-item" data-reference='${JSON.stringify(itemRef)}'></span>`;
        try {
            const response = await fetch('/.netlify/functions/learnosity-init', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ item_reference: itemRef })
            });
            if (!response.ok) throw new Error('Server returned an error.');
            const signedRequest = await response.json();
            LearnosityItems.init(signedRequest, {
                readyListener() { console.log(`Learnosity item is ready!`); }
            });
        } catch (error) {
            console.error('Error rendering Learnosity item:', error);
            learnosityContainer.innerHTML = `<p style="color: red;">Error: Could not load interactive assessment.</p>`;
        }
    }
    function updateUI() {
        const totalPages = currentLessonPages.length;
        if (totalPages === 0) {
            pageIndicator.textContent = `Page 0 of 0`;
            playerTitle.textContent = "No Pages Loaded";
            prevBtn.disabled = true;
            nextBtn.disabled = true;
        } else {
            pageIndicator.textContent = `Page ${currentPageIndex + 1} of ${totalPages}`;
            prevBtn.disabled = (currentPageIndex === 0);
            nextBtn.disabled = (currentPageIndex === totalPages - 1);
            playerTitle.textContent = currentLessonPages[currentPageIndex].block;
        }
    }
    function populateDropdown() {
        if (!lessonManifest) return;
        const activateBlock = lessonManifest.blocks.find(block => block.title === 'Activate');
        if (activateBlock && activateBlock.options) {
            activateSelect.innerHTML = '';
            activateBlock.options.forEach(option => {
                const optEl = document.createElement('option');
                optEl.value = option.title;
                optEl.textContent = option.title;
                activateSelect.appendChild(optEl);
            });
        }
    }

    // --- 5. TEACHER PANE LOGIC (WITH THE FIX) ---
    function updateTeacherPane() {
        if (!teacherLessonData || !currentLessonPages.length) return;
        paneContent.innerHTML = '';
        const currentGenericBlock = currentLessonPages[currentPageIndex].genericBlock;

        // ** THE FIX IS HERE **
        // First, check if the 'lesson_support_sessions' property exists and is an array.
        if (!teacherLessonData.lesson_support_sessions || !Array.isArray(teacherLessonData.lesson_support_sessions) || teacherLessonData.lesson_support_sessions.length === 0) {
            paneContent.innerHTML = `<p>No support sessions found in the teacher data file.</p>`;
            return;
        }
        // ** END OF FIX **

        const allSupportItems = teacherLessonData.lesson_support_sessions[0].support_items;
        
        if(!allSupportItems) {
             paneContent.innerHTML = `<p>No support items found for this session.</p>`;
             return;
        }

        const relevantSupportItems = allSupportItems.filter(item => item.block === currentGenericBlock);
        if (relevantSupportItems.length === 0) {
            paneContent.innerHTML = `<p>No specific support notes for this lesson block.</p>`;
        } else {
            relevantSupportItems.forEach(item => {
                const supportEl = renderSupportItem(item);
                paneContent.appendChild(supportEl);
            });
        }
    }
    
    function renderSupportItem(item) { /* ... Unchanged ... */ }
    function toggleTeacherPane(show) { /* ... Unchanged ... */ }

    // (Pasting them here for completeness)
    function renderSupportItem(item) {
        const el = document.createElement('div');
        el.className = 'support-item';
        let content = `<h4>${item.feature_title}</h4>`;
        const data = item.feature_data;
        if (data.purpose) content += `<p><strong>Purpose:</strong> ${data.purpose}</p>`;
        if (data.steps) {
            content += '<ul>' + data.steps.map(step => `<li>${step}</li>`).join('') + '</ul>';
        } else if (data.text) {
             content += data.text;
        } else if (data.questions) {
             content += '<ul>' + data.questions.map(q => `<li>${q}</li>`).join('') + '</ul>';
        } else if (data.items && Array.isArray(data.items)) {
            content += '<ul>';
            data.items.forEach(q_set => {
                content += q_set.questions.map(q => `<li><strong>${q_set.question_type || ''}:</strong> ${q}</li>`).join('');
            });
            content += '</ul>';
        }
        el.innerHTML = content;
        return el;
    }
    function toggleTeacherPane(show) {
        if (show) {
            teacherPane.classList.add('is-open');
            paneBackdrop.classList.add('is-visible');
        } else {
            teacherPane.classList.remove('is-open');
            paneBackdrop.classList.remove('is-visible');
        }
    }
    
    // --- 6. EVENT LISTENERS ---
    // ... (Unchanged)
    nextBtn.addEventListener('click', () => loadPage(currentPageIndex + 1));
    prevBtn.addEventListener('click', () => loadPage(currentPageIndex - 1));
    activateSelect.addEventListener('change', () => {
        buildLessonSequence();
        const firstActivateIndex = currentLessonPages.findIndex(p => p.genericBlock === 'Activate');
        loadPage(firstActivateIndex >= 0 ? firstActivateIndex : 0);
    });
    teacherBtn.addEventListener('click', () => toggleTeacherPane(true));
    closePaneBtn.addEventListener('click', () => toggleTeacherPane(false));
    paneBackdrop.addEventListener('click', () => toggleTeacherPane(false));

    // --- 7. INITIALIZATION ---
    async function initializePlayer() {
        await loadAllData();
        if (lessonManifest && teacherLessonData) {
            populateDropdown();
            buildLessonSequence();
            loadPage(0);
        }
    }

    initializePlayer();
});