document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA STRUCTURE (from CSV) ---
    // This defines the student-facing lesson sequence
    const lessonData = {
        'Lesson Overview': [
            { file: '378289.xhtml', folder: 'Lesson Overview' }
        ],
        'Explore and Develop': [
            { file: '305773.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '309877.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '309883.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '309888.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '309893.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '309991.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '309992.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' }
        ],
        'Reflect': [
            { file: '310074.xhtml', folder: 'The Floor Is Yours' },
            { file: '310076.xhtml', folder: 'The Floor Is Yours' }
        ],
        'Interactive Journal': [
            { file: '308552.xhtml', folder: 'Interactive Journal' }
        ]
    };

    const activateActivities = {
        'Piles of Tiles (Money/Bills)': [
            { file: '294860.xhtml', folder: 'Piles of Tiles (Money:Bills)' },
            { file: '294861.xhtml', folder: 'Piles of Tiles (Money:Bills)' }
        ],
        'Piles of Tiles (Basketball)': [
            { file: '294864.xhtml', folder: 'Piles of Tiles (Basketball)' },
            { file: '294865.xhtml', folder: 'Piles of Tiles (Basketball)' }
        ],
        'Piles of Tiles (Garden Bed)': [
            { file: '294868.xhtml', folder: 'Piles of Tiles (Garden Bed)' },
            { file: '294869.xhtml', folder: 'Piles of Tiles (Garden Bed)' }
        ],
        'Piles of Tiles (Tile Floor)': [
            { file: '294872.xhtml', folder: 'Piles of Tiles (Tile Floor)' },
            { file: '294873.xhtml', folder: 'Piles of Tiles (Tile Floor)' }
        ]
    };

    // --- 2. STATE & DATA ---
    let currentPageIndex = 0;
    let currentLessonPages = []; 
    let teacherLessonData = null; // To store the loaded TIG JSON

    // --- 3. DOM ELEMENT REFERENCES ---
    const iframe = document.getElementById('content-frame');
    const playerTitle = document.getElementById('player-title');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const activateSelect = document.getElementById('activate-select');
    
    // NEW references for the teacher pane
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
        } catch (error) {
            console.error("Failed to load teacher data:", error);
            // Optionally display an error to the user in the pane
            paneContent.innerHTML = `<p style="color: red;">Error loading teacher support file.</p>`;
        }
    }

    // --- 5. CORE PLAYER LOGIC ---
    
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
            ...mapPages('Lesson Overview', lessonData['Lesson Overview'], 'Lesson Overview'), // Note: No TIG equivalent, pane will be empty
            ...selectedActivatePages,
            ...mapPages('Explore and Develop', lessonData['Explore and Develop'], 'Explore and Develop'),
            ...mapPages('Reflect', lessonData['Reflect'], 'Reflect'),
            ...mapPages('Interactive Journal', lessonData['Interactive Journal'], 'Interactive Journal') // Note: No TIG equivalent, pane will be empty
        ];
    }
    
    function loadPage(index) {
        if (index < 0 || index >= currentLessonPages.length) return;
        
        currentPageIndex = index;
        const pageInfo = currentLessonPages[currentPageIndex];
        const filePath = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
        
        iframe.src = filePath;
        updateUI();
        updateTeacherPane();
    }

    function updateUI() {
        pageIndicator.textContent = `Page ${currentPageIndex + 1} of ${currentLessonPages.length}`;
        prevBtn.disabled = (currentPageIndex === 0);
        nextBtn.disabled = (currentPageIndex === currentLessonPages.length - 1);
        if (currentLessonPages.length > 0) {
            playerTitle.textContent = currentLessonPages[currentPageIndex].block;
        }
    }

    function populateDropdown() {
        Object.keys(activateActivities).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            activateSelect.appendChild(option);
        });
    }
    
    // --- 6. TEACHER PANE LOGIC (NEW SECTION) ---
    
    function updateTeacherPane() {
        if (!teacherLessonData) {
            paneContent.innerHTML = `<p>Teacher support data is not available.</p>`;
            return;
        };

        paneContent.innerHTML = ''; // Clear old notes

        const currentGenericBlock = currentLessonPages[currentPageIndex].genericBlock;
        // Assuming all support items are in the first session
        const allSupportItems = teacherLessonData.lesson_support_sessions[0].support_items;

        const relevantSupportItems = allSupportItems.filter(item => 
            item.block === currentGenericBlock
        );

        if (relevantSupportItems.length === 0) {
            paneContent.innerHTML = `<p>No specific support notes for this lesson block.</p>`;
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
        } else if (data.text) {
             content += data.text;
        } else if (data.questions) {
             content += '<ul>' + data.questions.map(q => `<li>${q}</li>`).join('') + '</ul>';
        } else if (data.items && Array.isArray(data.items)) {
            // Handle purposeful questions structure
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

    // --- 7. EVENT LISTENERS ---
    nextBtn.addEventListener('click', () => {
        if (currentPageIndex < currentLessonPages.length - 1) {
            loadPage(currentPageIndex + 1);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            loadPage(currentPageIndex - 1);
        }
    });

    activateSelect.addEventListener('change', () => {
        buildLessonSequence();
        loadPage(0);
    });

    // New listeners for the pane
    teacherBtn.addEventListener('click', () => toggleTeacherPane(true));
    closePaneBtn.addEventListener('click', () => toggleTeacherPane(false));
    paneBackdrop.addEventListener('click', () => toggleTeacherPane(false));
    
    // --- 8. INITIALIZATION ---
    async function initializePlayer() {
        await loadTeacherData(); // Load TIG data
        populateDropdown();      // Then set up the player
        buildLessonSequence();
        loadPage(0);
    }

    initializePlayer();
});