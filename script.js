// List of subjects with chapters
const subjects = [
    {
        name: "Additional English (Poetry)",
        folder: "ADDITIONAL_ENGLISH_POETRY",
        img: "images/poetry.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ADDITIONAL_ENGLISH_POETRY/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Additional English (Prose)",
        folder: "ADDITIONAL_ENGLISH_PROSE",
        img: "images/prose.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ADDITIONAL_ENGLISH_PROSE/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Biology",
        folder: "BIOLOGY",
        img: "images/biology.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/BIOLOGY/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Chemistry",
        folder: "CHEMISTRY",
        img: "images/chemistry.jpg",
        chapters: Array.from({ length: 5 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/CHEMISTRY/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Disaster Management",
        folder: "DISASTER_MANAGEMENT",
        img: "images/disaster.jpg",
        chapters: Array.from({ length: 5 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/DISASTER_MANAGEMENT/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Economics",
        folder: "ECONOMICS",
        img: "images/economics.jpg",
        chapters: Array.from({ length: 4 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ECONOMICS/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "English (Writing Skill)",
        folder: "ENGLISH_WRITING_SKILL",
        img: "images/writing.jpg",
        chapters: Array.from({ length: 12 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ENGLISH_WRITING_SKILL/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "English Composition",
        folder: "ENGLISH_COMPOSITION",
        img: "images/composition.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ENGLISH_COMPOSITION/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "English Course Book",
        folder: "ENGLISH_COURSE_BOOK",
        img: "images/coursebook.jpg",
        chapters: Array.from({ length: 15 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ENGLISH_COURSE_BOOK/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "English Literature Reader (Poetry)",
        folder: "ENGLISH_LITERATURE_POETRY",
        img: "images/lit_poetry.jpg",
        chapters: Array.from({ length: 7 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ENGLISH_LITERATURE_POETRY/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "English Literature Reader (Prose)",
        folder: "ENGLISH_LITERATURE_PROSE",
        img: "images/lit_prose.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/ENGLISH_LITERATURE_PROSE/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Geography",
        folder: "GEOGRAPHY",
        img: "images/geography.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/GEOGRAPHY/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Higher Mathematics",
        folder: "HIGHER_MATHEMATICS",
        img: "images/higher_math.jpg",
        chapters: Array.from({ length: 8 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/HIGHER_MATHEMATICS/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "History",
        folder: "HISTORY",
        img: "images/history.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/HISTORY/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Home Science 9",
        folder: "HOME_SCIENCE_9",
        img: "images/home_science.jpg",
        chapters: Array.from({ length: 10 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/HOME_SCIENCE_9/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Manipuri Composition 9",
        folder: "MANIPURI_COMPOSITION_9",
        img: "images/manipuri_comp.jpg",
        chapters: Array.from({ length: 1 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/MANIPURI_COMPOSITION_9/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Manipuri Grammar",
        folder: "MANIPURI_GRAMMAR",
        img: "images/manipuri_grammar.jpg",
        chapters: Array.from({ length: 12 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/MANIPURI_GRAMMAR/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Manipuri Nachom (Sheireng/Wareng)",
        folder: "MANIPURI_NACHOM",
        img: "images/nachom.jpg",
        chapters: Array.from({ length: 9 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/MANIPURI_NACHOM/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Manipuri Nongin (Wareng)",
        folder: "MANIPURI_NONGIN",
        img: "images/nongin.jpg",
        chapters: Array.from({ length: 12 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/MANIPURI_NONGIN/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Mathematics",
        folder: "MATHEMATICS",
        img: "images/math.jpg",
        chapters: Array.from({ length: 15 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/MATHEMATICS/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Physics",
        folder: "PHYSICS",
        img: "images/physics.jpg",
        chapters: Array.from({ length: 6 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/PHYSICS/chapter${i + 1}.pdf`
        }))
    },
    {
        name: "Political Science",
        folder: "POLITICAL_SCIENCE",
        img: "images/political_science.jpg",
        chapters: Array.from({ length: 4 }, (_, i) => ({
            name: `Chapter ${i + 1}`,
            pdf: `pdfs/POLITICAL_SCIENCE/chapter${i + 1}.pdf`
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
            subject.chapters.forEach(chapter => {
                const card = document.createElement('div');
                card.classList.add('chapter-card');
                card.innerHTML = `<h4>${chapter.name}</h4>`;
                card.addEventListener('click', () => openPDFModal(chapter));
                chapterList.appendChild(card);
            });
        }
    }

    // Navbar toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // PDF Modal functionality
    const pdfModal = document.getElementById('pdf-modal');
    const pdfModalClose = document.querySelector('.pdf-modal-close');
    pdfModalClose.addEventListener('click', () => {
        pdfModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === pdfModal) {
            pdfModal.style.display = 'none';
        }
    });
});

// Function to open PDF modal
function openPDFModal(chapter) {
    const pdfModal = document.getElementById('pdf-modal');
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfDownload = document.getElementById('pdf-download');
    const pdfModalTitle = document.getElementById('pdf-modal-title');

    pdfModalTitle.textContent = chapter.name;
    pdfViewer.src = chapter.pdf;
    pdfDownload.href = chapter.pdf;
    pdfModal.style.display = 'flex';
}