
/* 팀별 일정 상단 버튼 */

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.scd-btn-wrap .btn');
    const scdBoxes = document.querySelectorAll('.scd-box');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 박스를 숨김
            scdBoxes.forEach(box => {
                box.style.display = 'none';
            });

            // 모든 버튼의 opacity를 0.3으로 설정
            buttons.forEach(btn => {
                btn.style.opacity = '.3';
            });

            // 클릭한 버튼의 opacity를 1로 설정
            button.style.opacity = '1';

            // 클릭한 버튼의 클래스 이름에 따라 해당 박스를 표시
            const targetClass = button.classList[1]; // btn-a, btn-b 등
            const targetBox = document.querySelector(`.${targetClass.replace('btn-', 'scd-box-')}`); // scd-box-a, scd-box-b 등

            // 해당 박스를 표시
            if (targetBox) {
                targetBox.style.display = 'grid';
            }
        });
    });
});

/* 키노트 스피커 */
document.addEventListener("DOMContentLoaded", () => {
    const knts = document.querySelectorAll(".knt");

    knts.forEach((knt) => {
        knt.addEventListener("click", () => {
            knts.forEach((item) => {
                const bgKnt = item.querySelector(".bg-knt");

                if (item === knt) {
                    item.style.width = "70%";
                    item.classList.remove("shrink");
                    item.classList.add('show');
                } else {
                    item.style.width = "15%";
                    item.classList.add("shrink");
                    item.classList.remove('show');
                }
            });
        });
    });
});

/* 코디네이터 그룹 */
document.addEventListener("DOMContentLoaded", () => {
    const knts = document.querySelectorAll(".cdn");

    knts.forEach((knt) => {
        knt.addEventListener("click", () => {
            knts.forEach((item) => {
                const bgKnt = item.querySelector(".bg-cdn");

                if (item === knt) {
                    item.style.width = "90%";
                    item.classList.remove("shrink");
                    item.classList.add('show');
                } else {
                    item.style.width = "15%";
                    item.classList.add("shrink");
                    item.classList.remove('show');
                }
            });
        });
    });
});

