const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');
const experienceContainer = document.querySelector('.experience-container');

// เมื่อกดปุ่มเลื่อนซ้าย
scrollLeftButton.addEventListener('click', () => {
    experienceContainer.scrollBy({
        left: -300, // เลื่อนไปทางซ้าย
        behavior: 'smooth' // การเลื่อนที่ราบรื่น
    });
});

// เมื่อกดปุ่มเลื่อนขวา
scrollRightButton.addEventListener('click', () => {
    experienceContainer.scrollBy({
        left: 300, // เลื่อนไปทางขวา
        behavior: 'smooth' // การเลื่อนที่ราบรื่น
    });
});
