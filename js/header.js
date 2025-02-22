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

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('innerHeader');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 340) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mainCateListItems = document.querySelectorAll('.pc-cate ul.main-cate li');
    const header = document.querySelector('#header');
    const subCate1 = document.querySelector('.sub-cate-1');
    const subCate2 = document.querySelector('.sub-cate-2');
    const pcCate = document.querySelector('.pc-cate');

    mainCateListItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            if (item === mainCateListItems[0]) {
                subCate1.style.visibility = 'visible';
                subCate1.style.opacity = '1';
                subCate2.style.visibility = 'hidden';
                subCate2.style.opacity = '0';
            } else if (item === mainCateListItems[1]) {
                subCate1.style.visibility = 'hidden';
                subCate1.style.opacity = '0';
                subCate2.style.visibility = 'visible';
                subCate2.style.opacity = '1';
            } else {
                subCate1.style.visibility = 'hidden';
                subCate1.style.opacity = '0';
                subCate2.style.visibility = 'hidden';
                subCate2.style.opacity = '0';
            }
        });
    });

    pcCate.addEventListener('mouseleave', function(event) {
        if (event.target !== subCate1 && event.target !== subCate2 && event.target !== header) {
            subCate1.style.visibility = 'hidden';
            subCate1.style.opacity = '0';
            subCate2.style.visibility = 'hidden';
            subCate2.style.opacity = '0';
        }
    });
});
