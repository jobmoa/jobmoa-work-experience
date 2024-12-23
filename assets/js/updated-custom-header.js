document.addEventListener("DOMContentLoaded", function () {
    let scrollPosition = 0; // 스크롤 위치 저장 변수

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    });

    const items = document.querySelectorAll(".custom-icon-list li");
    items.forEach((item) => observer.observe(item));

    function openModal(imageSrc, captionText) {
        // 스크롤 위치 저장
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        // 모달 열기
        const modal = document.getElementById("imageModal");
        const modalImage = document.getElementById("modalImage");
        const modalCaption = document.getElementById("modalCaption");

        modal.style.display = "block";
        modalImage.src = imageSrc;
        modalCaption.textContent = captionText;

        // 페이지 스크롤 고정
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = "100%";
    }

    function closeModal() {
        // 모달 닫기
        const modal = document.getElementById("imageModal");
        modal.style.display = "none";

        // 스크롤 위치 복구
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollPosition);
    }

    // 모달 열기 및 닫기 이벤트를 연결
    document.querySelectorAll(".custom-icon-list li img").forEach((img) => {
        img.addEventListener("click", (event) => {
            const imageSrc = event.target.getAttribute("src");
            const captionText = event.target.getAttribute("alt") || "";
            openModal(imageSrc, captionText);
        });
    });

    document.getElementById("imageModal").addEventListener("click", closeModal);
});
