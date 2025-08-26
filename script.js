document.addEventListener('DOMContentLoaded', () => {
    let lessonManifest = null, teacherLessonData = null, currentLessonPages = [], currentPageIndex = 0;

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

    async function loadAllData() {
        try {
            const manifestResponse = await fetch('data/lesson-manifest.json');
            if (!manifestResponse.ok) { throw new Error('Could not fetch lesson-manifest.json'); }
            lessonManifest = await manifestResponse.json();

            if (lessonManifest && lessonManifest.teacherGuideFile) {
                const teacherFilePath = `data/${lessonManifest.teacherGuideFile}`;
                const teacherResponse = await fetch(teacherFilePath);
                if (!teacherResponse.ok) { throw new Error(`Could not fetch teacher guide: ${lessonManifest.teacherGuideFile}`); }
                teacherLessonData = await teacherResponse.json();
            }
        } catch (error){
            console.error("ERROR IN LOADALLDATA:", error);
            document.body.innerHTML = `<p style="color:red; font-family: sans-serif;">ERROR: Could not load data files. Check console for details.</p>`;
        }
    }

    function buildLessonSequence() {
        if (!lessonManifest) return;
        currentLessonPages = [];
        const selectedActivateOption = activateSelect.value;
        lessonManifest.blocks.forEach(block => {
            if (block.title === 'Activate') {
                const selectedActivity = block.options.find(opt => opt.title === selectedActivateOption);
                if (selectedActivity) {
                    selectedActivity.pages.forEach(page => currentLessonPages.push({ ...page, folder: selectedActivity.folder, block: `Activate: ${selectedActivity.title}`, genericBlock: 'Activate' }));
                }
            } else {
                block.pages.forEach(page => currentLessonPages.push({ ...page, folder: page.folder || block.folder, block: block.title, genericBlock: block.title }));
            }
        });
    }

    function loadPage(index) {
        if (index < 0 || index >= currentLessonPages.length) { if (currentLessonPages.length === 0) updateUI(); return; }
        currentPageIndex = index;
        const pageInfo = currentLessonPages[currentPageIndex];

        iframe.style.display = 'none';
        learnosityContainer.style.display = 'none';

        if (pageInfo.type === 'xhtml') {
            iframe.style.display = 'block';
            iframe.src = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
        } else if (pageInfo.type === 'learnosity') {
            learnosityContainer.style.display = 'block';
            renderLearnosityContent(pageInfo);
        }
        
        updateUI();
        updateTeacherPane();
    }
    
    // --- THIS FUNCTION HAS BEEN UPDATED WITH BETTER DEBUGGING ---
    async function renderLearnosityContent(pageInfo) {
        if (pageInfo.activity_reference) {
            learnosityContainer.innerHTML = '';
            try {
                const response = await fetch('/.netlify/functions/learnosity-init', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ activity_reference: pageInfo.activity_reference })
                });
                if (!response.ok) throw new Error(`Server returned an error: ${response.status} ${response.statusText}`);
                
                const signedRequest = await response.json();
                
                // DEBUGGING: Log the exact object being sent to Learnosity.
                console.log("LEARNOSITY-DIAGNOSTIC: Passing this signed request to LearnosityItems.init():", signedRequest);

                const itemsApp = LearnosityItems.init(signedRequest, {
                    readyListener() {
                        console.log("Learnosity Items API is ready and has rendered the activity!");
                    },
                    // DEBUGGING: Provide a more detailed error on screen.
                    errorListener(err) {
                        console.error("LEARNOSITY-DIAGNOSTIC: Learnosity API reported an error:", err);
                        learnosityContainer.innerHTML = `
                            <div style="padding: 20px; border: 2px solid red; background: #fff0f0;">
                                <h4>Learnosity API Error</h4>
                                <p><strong>Code:</strong> ${err.code}</p>
                                <p><strong>Message:</strong> ${err.msg}</p>
                            </div>
                        `;
                    }
                });

            } catch (error) {
                console.error('Error rendering Learnosity activity:', error);
                learnosityContainer.innerHTML = `<p style="color: red;">Error: Could not load interactive assessment. Check the console for details.</p>`;
            }
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

    function updateTeacherPane() {
        if (!teacherLessonData || !currentLessonPages.length) return;
        paneContent.innerHTML = '';
        const currentGenericBlock = currentLessonPages[currentPageIndex].genericBlock;
        const supportSessions = teacherLessonData.lesson_support_sessions;
        if (!supportSessions || !Array.isArray(supportSessions) || supportSessions.length === 0) {
            paneContent.innerHTML = `<p>No support sessions found.</p>`; return;
        }
        const allSupportItems = supportSessions[0].support_items;
        if(!allSupportItems) { paneContent.innerHTML = `<p>No support items found.</p>`; return; }
        const relevantSupportItems = allSupportItems.filter(item => item.block === currentGenericBlock);
        if (relevantSupportItems.length === 0) {
            paneContent.innerHTML = `<p>No specific support notes for this block.</p>`;
        } else {
            relevantSupportItems.forEach(item => {
                const supportEl = renderSupportItem(item);
                paneContent.appendChild(supportEl);
            });
        }
    }

    function renderSupportItem(item) {
        const el = document.createElement('div');
        el.className = 'support-item';
        let content = `<h4>${item.feature_title}</h4>`;
        const data = item.feature_data;
        if (data.purpose) content += `<p><strong>Purpose:</strong> ${data.purpose}</p>`;
        if (data.steps) {
            content += '<ul>' + data.steps.map(step => `<li>${step}</li>`).join('') + '</ul>';
        } else if (data.content) {
             content += data.content;
        } else if (data.text) {
             content += data.text;
        } else if (data.questions) {
             content += '<ul>' + data.questions.map(q => `<li>${q}</li>`).join('') + '</ul>';
        } else if (data.items && Array.isArray(data.items)) {
            content += '<ul>';
            data.items.forEach(q_set => content += q_set.questions.map(q => `<li><strong>${q_set.question_type || ''}:</strong> ${q}</li>`).join(''));
            content += '</ul>';
        }
        el.innerHTML = content;
        return el;
    }

    function toggleTeacherPane(show) {
        if (show) { teacherPane.classList.add('is-open'); paneBackdrop.classList.add('is-visible'); }
        else { teacherPane.classList.remove('is-open'); paneBackdrop.classList.remove('is-visible'); }
    }
    
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

    async function initializePlayer() {
        await loadAllData();
        if (lessonManifest) {
            populateDropdown();
            buildLessonSequence();
            loadPage(0);
        }
    }

    initializePlayer();
});