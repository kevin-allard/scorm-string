document.addEventListener('DOMContentLoaded', () => {

    // --- 1. STATE MANAGEMENT ---
    let studentLessonData = null;
    let teacherLessonData = null;
    let lessonPages = []; // Will be an array of arrays of "features"
    let currentPageIndex = 0;

    // --- 2. DOM ELEMENT REFERENCES ---
    const playerTitle = document.getElementById('player-title');
    const contentWindow = document.getElementById('content-window');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageIndicator = document.getElementById('page-indicator');
    const teacherBtn = document.getElementById('teacher-btn');
    const teacherPane = document.getElementById('teacher-pane');
    const closePaneBtn = document.getElementById('close-pane-btn');
    const paneContent = document.getElementById('pane-content');
    const paneBackdrop = document.getElementById('pane-backdrop');

    // --- 3. DATA LOADING ---
    async function loadLessonData() {
        try {
            const [studentResponse, teacherResponse] = await Promise.all([
                fetch(CONFIG.studentDataPath),
                fetch(CONFIG.teacherDataPath)
            ]);
            studentLessonData = await studentResponse.json();
            teacherLessonData = await teacherResponse.json();
        } catch (error) {
            console.error("Failed to load lesson data:", error);
            contentWindow.innerHTML = `<p style="color: red;">Error: Could not load lesson files. Please check the file paths in config.js and the browser console for details.</p>`;
        }
    }

    // --- 4. LESSON STRUCTURE BUILDER ---
    function buildLessonSequence() {
        if (!studentLessonData) return;

        lessonPages = [];
        let currentPageFeatures = [];
        
        // We assume all content is in the first session for this example
        const features = studentLessonData.lesson_content_sessions[0].features;

        for (const feature of features) {
            if (feature.feature_type === 'slide_break' && currentPageFeatures.length > 0) {
                lessonPages.push(currentPageFeatures);
                currentPageFeatures = [];
            } else {
                 if (feature.feature_type !== 'slide_break') {
                    currentPageFeatures.push(feature);
                }
            }
        }
        // Add the last page if it has content
        if (currentPageFeatures.length > 0) {
            lessonPages.push(currentPageFeatures);
        }
    }

    // --- 5. DYNAMIC CONTENT RENDERING ---

    /**
     * Main function to load a page of content
     */
    function loadPage(index) {
        if (index < 0 || index >= lessonPages.length) return;
        currentPageIndex = index;

        const pageFeatures = lessonPages[currentPageIndex];
        contentWindow.innerHTML = ''; // Clear previous content
        pageFeatures.forEach(feature => {
            const featureHtml = renderFeature(feature);
            if (featureHtml) {
                contentWindow.appendChild(featureHtml);
            }
        });
        
        updateUI();
        updateTeacherPane();
        contentWindow.scrollTop = 0; // Scroll to top of new content
    }

    /**
     * Renders a single student feature into an HTML element
     */
    function renderFeature(feature) {
        const el = document.createElement('div');
        el.className = `feature-card feature-${feature.feature_type}`;
        
        let content = `<h3>${feature.feature_title}</h3>`;
        const data = feature.feature_data;

        switch (feature.feature_type) {
            case 'block_header':
                return null; // Don't render these as cards
            case 'activate_block':
            case 'instructional_text':
                content += data.content || data.text;
                break;
            case 'assessment_item':
                content += data.item_body.stem;
                // You could add logic here to render inputs for interactions
                break;
            default:
                // For unknown types, just show the title
                break;
        }
        el.innerHTML = content;
        return el;
    }

    /**
     * Finds and renders teacher support for the current page
     */
    function updateTeacherPane() {
        if (!teacherLessonData) return;
        paneContent.innerHTML = ''; // Clear old notes

        const currentFeatureUuids = lessonPages[currentPageIndex].map(f => f.uuid);
        const allSupportItems = teacherLessonData.lesson_support_sessions[0].support_items;

        const relevantSupportItems = allSupportItems.filter(item => 
            currentFeatureUuids.includes(item.linked_student_uuid)
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
     * Renders a single teacher support item into an HTML element
     */
    function renderSupportItem(item) {
        const el = document.createElement('div');
        el.className = 'feature-card';
        let content = `<h4>${item.feature_title} (${item.block})</h4>`;
        const data = item.feature_data;

        switch (item.feature_type) {
            case 'facilitation_notes':
                content += '<ul>' + data.steps.map(step => `<li>${step}</li>`).join('') + '</ul>';
                break;
            case 'purposeful_questions':
                content += '<ul>';
                data.items.forEach(q_set => {
                    content += q_set.questions.map(q => `<li><strong>${q_set.question_type}:</strong> ${q}</li>`).join('');
                });
                content += '</ul>';
                break;
            case 'differentiation_strategy':
                content += `<strong>${data.title}</strong>${data.text}`;
                break;
            default:
                content += `<p>Note of type: ${item.feature_type}</p>`;
                break;
        }
        el.innerHTML = content;
        return el;
    }

    // --- 6. UI MANAGEMENT ---
    function updateUI() {
        playerTitle.textContent = studentLessonData?.lesson_metadata.lesson_title || "Lesson";
        pageIndicator.textContent = `Page ${currentPageIndex + 1} of ${lessonPages.length}`;
        prevBtn.disabled = (currentPageIndex === 0);
        nextBtn.disabled = (currentPageIndex === lessonPages.length - 1);
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
    nextBtn.addEventListener('click', () => loadPage(currentPageIndex + 1));
    prevBtn.addEventListener('click', () => loadPage(currentPageIndex - 1));
    teacherBtn.addEventListener('click', () => toggleTeacherPane(true));
    closePaneBtn.addEventListener('click', () => toggleTeacherPane(false));
    paneBackdrop.addEventListener('click', () => toggleTeacherPane(false));

    // --- 8. INITIALIZATION ---
    async function initializePlayer() {
        await loadLessonData();
        if (studentLessonData && teacherLessonData) {
            buildLessonSequence();
            loadPage(0);
        }
    }

    initializePlayer();
});