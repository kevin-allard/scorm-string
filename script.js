document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA STRUCTURE (from CSV) ---
    // This defines the student-facing lesson sequence
    const lessonData = { /* ... (same as before) ... */ };
    const activateActivities = { /* ... (same as before) ... */ };

    // --- 2. STATE & DATA ---
    let currentPageIndex = 0;
    let currentLessonPages = []; 
    let teacherLessonData = null; // To store the loaded TIG JSON

    // --- 3. DOM ELEMENT REFERENCES ---
    const iframe = document.getElementById('content-frame');
    const playerTitle = document.getElementById('player-title');
    // ... (prevBtn, nextBtn, pageIndicator, activateSelect are the same)
    
    // New references for the teacher pane
    const teacherBtn = document.getElementById('teacher-btn');
    const teacherPane = document.getElementById('teacher-pane');
    const closePaneBtn = document.getElementById('close-pane-btn');
    const paneContent = document.getElementById('pane-content');
    const paneBackdrop = document.getElementById('pane-backdrop');

    // --- 4. DATA LOADING ---
    async function loadTeacherData() {
        try {
            const response = await fetch(CONFIG.teacherDataPath);
            teacherLessonData = await response.json();
            console.log("Teacher data loaded successfully.");
        } catch (error) {
            console.error("Failed to load teacher data:", error);
        }
    }

    // --- 5. CORE PLAYER LOGIC (with modifications) ---
    
    /**
     * MODIFIED: Adds a 'genericBlock' property for linking to TIG data.
     */
    function buildLessonSequence() {
        const selectedActivateKey = activateSelect.value;

        const mapPages = (blockTitle, pages, genericBlockTitle) => {
            return pages.map(page => ({
                ...page, 
                block: blockTitle,         // For the main display title
                genericBlock: genericBlockTitle // For linking to TIG JSON
            }));
        };
        
        const activateBlockTitle = `Activate: ${selectedActivateKey}`;
        const selectedActivatePages = mapPages(activateBlockTitle, activateActivities[selectedActivateKey], 'Activate');

        currentLessonPages = [
            ...mapPages('Lesson Overview', lessonData['Lesson Overview'], 'Lesson Overview'),
            ...selectedActivatePages,
            ...mapPages('Explore and Develop', lessonData['Explore and Develop'], 'Explore and Develop'),
            ...mapPages('Reflect', lessonData['Reflect'], 'Reflect'),
            ...mapPages('Interactive Journal', lessonData['Interactive Journal'], 'Interactive Journal')
        ];
    }
    
    /**
     * MODIFIED: Now triggers an update of the teacher pane on page load.
     */
    function loadPage(index) {
        if (index < 0 || index >= currentLessonPages.length) return;
        
        currentPageIndex = index;
        const pageInfo = currentLessonPages[currentPageIndex];
        const filePath = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
        
        iframe.src = filePath;
        updateUI();
        updateTeacherPane(); // ** NEW **
    }

    function updateUI() {
        // ... (this function is the same as before)
        // It updates the page indicator, nav buttons, and main title
    }
    
    // --- 6. TEACHER PANE LOGIC (NEW) ---
    
    /**
     * Finds and renders teacher support for the current lesson block.
     */
    function updateTeacherPane() {
        if (!teacherLessonData) return;
        paneContent.innerHTML = ''; // Clear old notes

        const currentGenericBlock = currentLessonPages[currentPageIndex].genericBlock;
        const allSupportItems = teacherLessonData.lesson_support_sessions[0].support_items;

        const relevantSupportItems = allSupportItems.filter(item => 
            item.block === currentGenericBlock
        );

        if (relevantSupportItems.length === 0) {
            paneContent.innerHTML = `<p>No specific support notes for this section.</p>`;
        } else {
            relevantSupportItems.forEach(item => {
                const supportHtml = renderSupportItem(item);
                paneContent.appendChild(supportHtml);
            });
        }
    }

    /**
     * Renders a single teacher support item into an HTML element.
     */
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
        }
        el.innerHTML = content;
        return el;
    }

    /**
     * Toggles the visibility of the teacher pane.
     */
    function toggleTeacherPane(show) {
        if (show) {
            teacherPane.classList.add('is-open');
            paneBackdrop.classList.add('is-visible');
        } else {
            teacherPane.classList.remove('is-open');
            paneBackdrop.classList.remove('is-visible');
        }
    }

    // --- 7. EVENT LISTENERS ---
    // ... (nextBtn, prevBtn, activateSelect listeners are the same)

    // New listeners for the pane
    teacherBtn.addEventListener('click', () => toggleTeacherPane(true));
    closePaneBtn.addEventListener('click', () => toggleTeacherPane(false));
    paneBackdrop.addEventListener('click', () => toggleTeacherPane(false));
    
    // --- 8. INITIALIZATION ---
    async function initializePlayer() {
        await loadTeacherData(); // Load TIG data first
        populateDropdown();
        buildLessonSequence();
        loadPage(0);
    }
    
    // Make sure to copy over all the unchanged functions like populateDropdown, 
    // the event listeners, and the data objects from the previous correct script.
    // I am omitting them here for brevity but they are required.

    initializePlayer();
});