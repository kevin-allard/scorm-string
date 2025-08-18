document.addEventListener('DOMContentLoaded', () => {

    // --- 1. UPDATED DATA STRUCTURE ---
    // The data now includes the source folder for each file,
    // matching the "File Folder" column in your CSV.
    const lessonData = {
        'Lesson Overview': [
            { file: '378289.xhtml', folder: 'Lesson Overview' }
        ],
        'Explore and Develop': [
            { file: '305773.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
            { file: '305877.xhtml', folder: 'Activity 1 Connecting Area Models and the Distributive Property' },
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
            { file: '294860.xhtml', folder: 'Piles of Tiles (Money/Bills)' },
            { file: '294861.xhtml', folder: 'Piles of Tiles (Money/Bills)' }
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

    // --- 2. STATE MANAGEMENT ---
    let currentPageIndex = 0;
    let currentLessonPages = []; // This will be an array of objects {file, folder}

    // --- 3. DOM ELEMENT REFERENCES ---
    const iframe = document.getElementById('content-frame');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const activateSelect = document.getElementById('activate-select');

    // --- 4. CORE FUNCTIONS ---

    /**
     * Builds the full sequence of lesson pages based on the dropdown selection.
     */
    function buildLessonSequence() {
        const selectedActivateKey = activateSelect.value;
        const selectedActivatePages = activateActivities[selectedActivateKey];

        // Assemble the lesson in the correct order
        currentLessonPages = [
            ...lessonData['Lesson Overview'],
            ...selectedActivatePages,
            ...lessonData['Explore and Develop'],
            ...lessonData['Reflect'],
            ...lessonData['Interactive Journal']
        ];
    }

    /**
     * Loads a specific page into the iframe by its index in the sequence.
     * @param {number} index - The index of the page to load.
     */
    function loadPage(index) {
        if (index < 0 || index >= currentLessonPages.length) {
            console.error("Attempted to load an out-of-bounds page index:", index);
            return;
        }
        currentPageIndex = index;
        const pageInfo = currentLessonPages[currentPageIndex];
        
        // **KEY CHANGE HERE**: Construct the path using the folder and file properties
        const filePath = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
        
        iframe.src = filePath;
        updateUI();
    }

    /**
     * Updates the navigation buttons (enabling/disabling) and page indicator text.
     */
    function updateUI() {
        pageIndicator.textContent = `Page ${currentPageIndex + 1} of ${currentLessonPages.length}`;
        prevBtn.disabled = (currentPageIndex === 0);
        nextBtn.disabled = (currentPageIndex === currentLessonPages.length - 1);
    }
    
    /**
     * Populates the dropdown menu with options from the activateActivities object.
     */
    function populateDropdown() {
        // Use Object.keys to ensure a consistent order
        Object.keys(activateActivities).forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = key;
            activateSelect.appendChild(option);
        });
    }

    // --- 5. EVENT LISTENERS ---

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

    // --- 6. INITIALIZATION ---
    function initializePlayer() {
        populateDropdown();
        buildLessonSequence();
        loadPage(0);
    }

    initializePlayer();
});