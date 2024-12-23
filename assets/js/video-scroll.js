function handleScrollFade(sectionId, videoId) {
    const section = document.getElementById(sectionId);
    const video = document.getElementById(videoId);

    if (!section || !video) return; // 섹션이나 비디오가 없으면 종료

    const sectionTop = section.getBoundingClientRect().top; // 섹션의 위치 확인
    const windowHeight = window.innerHeight;

    // 섹션이 화면에 보이는지 확인
    if (sectionTop >= 0 && sectionTop < windowHeight) {
        section.classList.add('visible');
        section.classList.remove('hidden');
        
        if (video.paused) {
            video.play(); // 비디오 재생
        }
    } else {
        section.classList.add('hidden');
        section.classList.remove('visible');

        video.pause(); // 비디오 일시 정지
        video.currentTime = 0; // 비디오 재생 위치 초기화
    }
}

// 스크롤 이벤트 등록: 한 번만 호출됨
window.addEventListener('scroll', () => {
    handleScrollFade('video-section', 'scroll-video');      // 첫 번째 섹션
    handleScrollFade('video-section-2', 'scroll-video-2');  // 두 번째 섹션
});

let debounceTimer;
window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        handleScrollFade('video-section', 'scroll-video');
        handleScrollFade('video-section-2', 'scroll-video-2');
    }, 50);
});
