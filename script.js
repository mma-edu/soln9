// List of subjects with chapters
const subjects = [
    {
        name: "Additional English (Poetry)",
        folder: "ADDITIONAL_ENGLISH_POETRY",
        img: "images/poetry.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ADDITIONAL_ENGLISH_POETRY/chapter${i + 1}.html`
        }))
    },
    {
        name: "Additional English (Prose)",
        folder: "ADDITIONAL_ENGLISH_PROSE",
        img: "images/prose.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ADDITIONAL_ENGLISH_PROSE/chapter${i + 1}.html`
        }))
    },
    {
        name: "Biology",
        folder: "BIOLOGY",
        img: "images/biology.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/BIOLOGY/chapter${i + 1}.html`
        }))
    },
    {
        name: "Chemistry",
        folder: "CHEMISTRY",
        img: "images/chemistry.jpg",
        chapters: Array.from({ length: 5 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/CHEMISTRY/chapter${i + 1}.html`
        }))
    },
    {
        name: "Disaster Management",
        folder: "DISASTER_MANAGEMENT",
        img: "images/disaster.jpg",
        chapters: Array.from({ length: 5 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/DISASTER_MANAGEMENT/chapter${i + 1}.html`
        }))
    },
    {
        name: "Economics",
        folder: "ECONOMICS",
        img: "images/economics.jpg",
        chapters: Array.from({ length: 4 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ECONOMICS/chapter${i + 1}.html`
        }))
    },
    {
        name: "English (Writing Skill)",
        folder: "ENGLISH_WRITING_SKILL",
        img: "images/writing.jpg",
        chapters: Array.from({ length: 12 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ENGLISH_WRITING_SKILL/chapter${i + 1}.html`
        }))
    },
    {
        name: "English Composition",
        folder: "ENGLISH_COMPOSITION",
        img: "images/composition.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ENGLISH_COMPOSITION/chapter${i + 1}.html`
        }))
    },
    {
        name: "English Course Book",
        folder: "ENGLISH_COURSE_BOOK",
        img: "images/coursebook.jpg",
        chapters: Array.from({ length: 15 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ENGLISH_COURSE_BOOK/chapter${i + 1}.html`
        }))
    },
    {
        name: "English Literature Reader (Poetry)",
        folder: "ENGLISH_LITERATURE_POETRY",
        img: "images/lit_poetry.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ENGLISH_LITERATURE_POETRY/chapter${i + 1}.html`
        }))
    },
    {
        name: "English Literature Reader (Prose)",
        folder: "ENGLISH_LITERATURE_PROSE",
        img: "images/lit_prose.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/ENGLISH_LITERATURE_PROSE/chapter${i + 1}.html`
        }))
    },
    {
        name: "Geography",
        folder: "GEOGRAPHY",
        img: "images/geography.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/GEOGRAPHY/chapter${i + 1}.html`
        }))
    },
    {
        name: "Higher Mathematics",
        folder: "HIGHER_MATHEMATICS",
        img: "images/higher_math.jpg",
        chapters: Array.from({ length: 8 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/HIGHER_MATHEMATICS/chapter${i + 1}.html`
        }))
    },
    {
        name: "History",
        folder: "HISTORY",
        img: "images/history.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/HISTORY/chapter${i + 1}.html`
        }))
    },
    {
        name: "Home Science 9",
        folder: "HOME_SCIENCE_9",
        img: "images/home_science.jpg",
        chapters: Array.from({ length: 11 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/HOME_SCIENCE_9/chapter${i + 1}.html`
        }))
    },
    {
        name: "Manipuri Composition 9",
        folder: "MANIPURI_COMPOSITION_9",
        img: "images/manipuri_comp.jpg",
        chapters: Array.from({ length: 1 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/MANIPURI_COMPOSITION_9/chapter${i + 1}.html`
        }))
    },
    {
        name: "Manipuri Grammar",
        folder: "MANIPURI_GRAMMAR",
        img: "images/manipuri_grammar.jpg",
        chapters: Array.from({ length: 12 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/MANIPURI_GRAMMAR/chapter${i + 1}.html`
        }))
    },
    {
        name: "Manipuri Nachom (Sheireng/Wareng)",
        folder: "MANIPURI_NACHOM",
        img: "images/nachom.jpg",
        chapters: Array.from({ length: 9 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/MANIPURI_NACHOM/chapter${i + 1}.html`
        }))
    },
    {
        name: "Manipuri Nongin (Wareng)",
        folder: "MANIPURI_NONGIN",
        img: "images/nongin.jpg",
        chapters: Array.from({ length: 12 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/MANIPURI_NONGIN/chapter${i + 1}.html`
        }))
    },
    {
        name: "Mathematics",
        folder: "MATHEMATICS",
        img: "images/math.jpg",
        chapters: Array.from({ length: 15 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/MATHEMATICS/chapter${i + 1}.html`
        }))
    },
    {
        name: "Physics",
        folder: "PHYSICS",
        img: "images/physics.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/PHYSICS/chapter${i + 1}.html`
        }))
    },
    {
        name: "Political Science",
        folder: "POLITICAL_SCIENCE",
        img: "images/political_science.jpg",
        chapters: Array.from({ length: 4 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            solution: `pdfs/POLITICAL_SCIENCE/chapter${i + 1}.html`
        }))
    }
];

// Populate subjects on homepage
document.addEventListener('DOMContentLoaded', () => {
    const subjectGrid = document.getElementById('subject-grid');
    if (subjectGrid) {
        subjects.forEach(subject => {
            const card = document.createElement('div');
            card.classList.add('subject-card');
            card.innerHTML = `
                <img src="${subject.img}" alt="${subject.name}">
                <h3>${subject.name}</h3>
            `;
            card.addEventListener('click', () => {
                window.location.href = `subject.html?subject=${encodeURIComponent(subject.name)}`;
            });
            subjectGrid.appendChild(card);
        });
    }

    // Handle subject detail page
    const urlParams = new URLSearchParams(window.location.search);
    const subjectName = urlParams.get('subject');
    if (subjectName) {
        const subject = subjects.find(s => s.name === subjectName);
        if (subject) {
            // Set subject title
            document.getElementById('subject-title').textContent = subject.name;

            // Populate chapter list
            const chapterList = document.getElementById('chapter-list');
            const chapterSolutionView = document.getElementById('chapter-solution-view');
            subject.chapters.forEach(chapter => {
                const card = document.createElement('div');
                card.classList.add('chapter-card');
                card.innerHTML = `<h4>${chapter.name}</h4>`;
                card.addEventListener('click', () => showChapterSolution(chapter));
                chapterList.appendChild(card);
            });

            // Close button functionality
            const closeButton = document.getElementById('close-button');
            closeButton.addEventListener('click', () => {
                chapterList.style.display = 'grid';
                chapterSolutionView.style.display = 'none';
                document.getElementById('subject-title').style.display = 'block';
                document.querySelector('header').style.display = 'flex';
                document.querySelector('footer').style.display = 'block';
                chapterSolutionView.classList.remove('active');
            });
        }
    }

    // Navbar toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Function to show chapter solution
function showChapterSolution(chapter) {
    const chapterList = document.getElementById('chapter-list');
    const chapterSolutionView = document.getElementById('chapter-solution-view');
    const solutionFrame = document.getElementById('solution-frame');
    const solutionDownload = document.getElementById('solution-download');
    const solutionFallback = document.querySelector('.solution-fallback');
    const subjectTitle = document.getElementById('subject-title');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Reset iframe
    solutionFrame.src = '';
    solutionFrame.src = chapter.solution;
    solutionDownload.href = chapter.solution;
    solutionFallback.style.display = 'none';
    solutionFrame.style.display = 'block';

    // Check if file exists (basic client-side check)
    fetch(chapter.solution, { method: 'HEAD' })
        .then(response => {
            if (!response.ok) {
                solutionFallback.style.display = 'block';
                solutionFrame.style.display = 'none';
            }
        })
        .catch(() => {
            solutionFallback.style.display = 'block';
            solutionFrame.style.display = 'none';
        });

    // Handle iframe load
    solutionFrame.onload = () => {
        try {
            const doc = solutionFrame.contentDocument || solutionFrame.contentWindow.document;
            if (!doc || doc.documentElement.innerHTML.length < 10) { // Basic emptiness check
                solutionFallback.style.display = 'block';
                solutionFrame.style.display = 'none';
            } else {
                solutionFallback.style.display = 'none';
                solutionFrame.style.display = 'block';
            }
        } catch (e) {
            solutionFallback.style.display = 'block';
            solutionFrame.style.display = 'none';
        }
    };

    // Toggle views
    chapterList.style.display = 'none';
    chapterSolutionView.style.display = 'block';
    subjectTitle.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
    chapterSolutionView.classList.add('active');
}