
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


