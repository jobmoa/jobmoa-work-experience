document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/fulls/상세1.jpg",
        "images/fulls/상세2.jpg",
        "images/fulls/상세3.jpg",
        "images/fulls/상세4.jpg",
    ];

    let currentIndex = 0;
    const galleryContainer = document.getElementById("gallery-container");

    // 이미지 요소 생성
    const imgElements = images.map((src, index) => {
        const img = document.createElement("img");
        img.classList.add("gallery-image");
        img.src = src;
        img.style.zIndex = images.length - index; // 뒤쪽 이미지가 더 낮은 z-index
        if (index !== 0) img.style.opacity = 0; // 첫 이미지만 보이게
        galleryContainer.appendChild(img);
        return img;
    });

    // 클릭 시 다음 이미지로 전환
    galleryContainer.addEventListener("click", function () {
        const currentImage = imgElements[currentIndex];
        currentImage.style.opacity = 0; // 현재 이미지를 투명하게
        currentImage.style.zIndex = 1; // 뒤로 이동

        currentIndex = (currentIndex + 1) % images.length; // 다음 이미지 인덱스

        const nextImage = imgElements[currentIndex];
        nextImage.style.opacity = 1; // 다음 이미지를 보이게
        nextImage.style.zIndex = images.length; // 앞으로 이동
    });
});
