
/* 팀별 일정 */
document.addEventListener('DOMContentLoaded', () => {
    const detailsElements = document.querySelectorAll('details');
  
    detailsElements.forEach(details => {
      details.addEventListener('click', (event) => {
        if (details.open) {
          event.preventDefault();
          details.classList.add('closing');
          setTimeout(() => {
            details.open = false;
            details.classList.remove('closing');
          }, 300);
        } else {
          detailsElements.forEach(otherDetails => {
            if (otherDetails !== details && otherDetails.open) {
              otherDetails.open = false;
            }
          });
        }
      });
    });
  });

/* 키노트 스피커 */
document.addEventListener("DOMContentLoaded", () => {
    const knts = document.querySelectorAll(".knt");

    knts.forEach((knt) => {
        knt.addEventListener("click", () => {
            if (knt.classList.contains('show')) {
                // .show 클래스를 가진 요소를 클릭했을 때
                knts.forEach((item) => {
                    item.style.width = "33%";
                    item.classList.remove("shrink");
                    item.classList.remove('show');
                });
            } else {
                // 일반적인 .knt 요소를 클릭했을 때
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
            }
        });
    });
});


/* 코디네이터 그룹 */
document.addEventListener("DOMContentLoaded", () => {
    const knts = document.querySelectorAll(".cdn");

    knts.forEach((knt) => {
        knt.addEventListener("click", () => {
            if (knt.classList.contains('show')) {
                // .show 클래스를 가진 요소를 클릭했을 때
                knts.forEach((item) => {
                    item.style.width = "50%";
                    item.classList.remove("shrink");
                    item.classList.remove('show');
                });
            } else {
                // 일반적인 .cdn 요소를 클릭했을 때
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
            }
        });
    });
});


