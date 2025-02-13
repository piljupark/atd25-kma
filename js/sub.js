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
