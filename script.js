document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATA STRUCTURE ---
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
            // ** THE ONLY CHANGE IS HERE **
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

    // --- 2. STATE MANAGEMENT ---
    let currentPageIndex = 0;
    let currentLessonPages = []; 

    // --- 3. DOM ELEMENT REFERENCES ---
    const iframe = document.getElementById('content-frame');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const activateSelect = document.getElementById('activate-select');
    const playerTitle = document.getElementById('player-title');

    // --- 4. CORE FUNCTIONS ---

    function buildLessonSequence() {
        const selectedActivateKey = activateSelect.value;

        const mapPages = (blockTitle, pages) => {
            return pages.map(page => ({
                ...page, 
                block: blockTitle 
            }));
        };
        
        const selectedActivatePages = mapPages(selectedActivateKey, activateActivities[selectedActivateKey]);

        currentLessonPages = [
            ...mapPages('Lesson Overview', lessonData['Lesson Overview']),
            ...selectedActivatePages,
            ...mapPages('Explore and Develop', lessonData['Explore and Develop']),
            ...mapPages('Reflect', lessonData['Reflect']),
            ...mapPages('Interactive Journal', lessonData['Interactive Journal'])
        ];
    }

    function loadPage(index) {
        if (index < 0 || index >= currentLessonPages.length) {
            console.error("Attempted to load an out-of-bounds page index:", index);
            return;
        }
        currentPageIndex = index;
        const pageInfo = currentLessonPages[currentPageIndex];
        const filePath = `${pageInfo.folder}/OEBPS/${pageInfo.file}`;
        
        iframe.src = filePath;
        updateUI();
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