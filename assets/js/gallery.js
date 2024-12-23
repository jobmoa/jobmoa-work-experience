document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/thumbs/001.jpg",
        "images/thumbs/002.jpg",
        "images/thumbs/003.jpg",
        "images/thumbs/그림4.jpg",
        "images/thumbs/그림5.jpg",
        "images/thumbs/그림6.jpg"
    ];

    let currentIndex = 0;
    const galleryImage = document.getElementById("gallery-image");

    // 갤러리 이미지 클릭 이벤트
    if (galleryImage) {
        galleryImage.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % images.length;
            galleryImage.src = images[currentIndex];
        });
    }

    // 호버 효과 추가
    const galleryImages = document.querySelectorAll(".gallery .image img");

    galleryImages.forEach(image => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.1)";
            image.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
            image.style.boxShadow = "none";
        });
    });
});

