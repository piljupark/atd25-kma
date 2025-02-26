document.addEventListener("DOMContentLoaded", () => {
  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    let isDragging = false; // 드래그 여부 체크

    const summary = details.querySelector("summary");

    // 드래그 시작 감지
    summary.addEventListener("mousedown", () => {
      isDragging = false;
    });

    // 드래그 여부 확인
    summary.addEventListener("mousemove", () => {
      isDragging = true;
    });

    summary.addEventListener("mouseup", () => {
      setTimeout(() => {
        isDragging = false;
      }, 100);
    });

    details.addEventListener("click", (event) => {
      if (isDragging) {
        event.preventDefault(); // 드래그 시 클릭 방지
        return;
      }

      if (details.open) {
        event.preventDefault();
        details.classList.add("closing");
        setTimeout(() => {
          details.open = false;
          details.classList.remove("closing");
        }, 300);
      } else {
        detailsElements.forEach((otherDetails) => {
          if (otherDetails !== details && otherDetails.open) {
            otherDetails.open = false;
          }
        });
      }
    });
  });
});