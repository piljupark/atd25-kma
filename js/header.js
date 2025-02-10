document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const cateWrap = document.querySelector('.cate-wrap');
    const html = document.html;
    const bgOver = document.querySelector('.bg-over');

    menuBtn.addEventListener('click', function() {
        cateWrap.classList.add('show');
        html.style.overflow = 'hidden'; 
        bgOver.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        cateWrap.classList.remove('show');
        html.style.overflow = 'visible'; 
        bgOver.style.display = 'none';
    });
});

//스크롤시 헤더 백그라운드 변경
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});