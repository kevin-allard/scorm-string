document.addEventListener('DOMContentLoaded', () => {
    let lessonManifest = null, teacherLessonData = null, currentLessonPages = [], currentPageIndex = 0;

    const iframe = document.getElementById('content-frame');
    const imageContainer = document.getElementById('image-container');
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
        imageContainer.style.display = 'none';

        if (pageInfo.type === 'xhtml') {
            iframe.style.display = 'block';
            iframe.src = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
        } else if (pageInfo.type === 'image') {
            imageContainer.style.display = 'flex';
            imageContainer.innerHTML = '';
            const img = document.createElement('img');
            img.src = `data/${pageInfo.file}`;
            img.alt = pageInfo.block;
            imageContainer.appendChild(img);
        }
        
        updateUI();
        updateTeacherPane();
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

    // --- THIS ENTIRE FUNCTION HAS BEEN REWRITTEN ---
    function updateTeacherPane() {
        if (!teacherLessonData || !currentLessonPages.length) {
            paneContent.innerHTML = '<p>Teacher support content is not available for this lesson.</p>';
            return;
        }
        paneContent.innerHTML = '';
        const currentGenericBlock = currentLessonPages[currentPageIndex].genericBlock;

        const pacingGuideItem = teacherLessonData.overview_items.find(item => item.overview_item_type === 'pacing_guide');

        if (!pacingGuideItem) {
            paneContent.innerHTML = `<p>No pacing guide found in teacher data.</p>`;
            return;
        }

        const supportBlocks = pacingGuideItem.overview_item_data?.overview_item_data_items?.[0]?.overview_item_data_groups;
        if (!supportBlocks) {
            paneContent.innerHTML = `<p>Pacing guide has an unexpected structure.</p>`;
            return;
        }

        const relevantBlock = supportBlocks.find(block => block.overview_item_data_group_title === currentGenericBlock);
        
        if (!relevantBlock || !relevantBlock.overview_item_data_group_items) {
            paneContent.innerHTML = `<p>No specific support notes for this block.</p>`;
        } else {
            relevantBlock.overview_item_data_group_items.forEach(item => {
                const supportEl = renderSupportItem(item);
                paneContent.appendChild(supportEl);
            });
        }
    }

    function renderSupportItem(item) {
        const el = document.createElement('div');
        el.className = 'support-item';
        
        // Use the new property names from the JSON file
        const title = item.overview_item_data_group_item_title || '';
        const prefix = item.overview_item_data_group_item_prefix || '';
        const description = item.overview_item_data_group_item_description || 'No description available.';

        let fullTitle = prefix ? `${prefix}: ${title}` : title;
        
        let content = `<h4>${fullTitle}</h4>`;
        content += `<p>${description}</p>`;
        
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