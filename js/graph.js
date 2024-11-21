document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("good-Chart");
  if (ctx) {
    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [20, 80],
            backgroundColor: ["rgba(20, 122, 214, 1)", "rgba(214, 20, 20, 1)"],
            borderWidth: 0,
          },
        ],
      },
    });
  } else {
    console.error("Canvas element not found");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("gender-Chart");
  if (ctx) {
    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [76, 24, 10],
            backgroundColor: [
              "rgba(20, 122, 214, 1)",
              "rgba(214, 20, 20, 1)",
              "rgba(72, 72, 72, 1)",
            ],
            borderWidth: 0,
          },
        ],
      },
    });
  } else {
    console.error("Canvas element not found");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("age-Chart");
  if (ctx) {
    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [76, 24, 40, 45, 20, 15],
            backgroundColor: [
              "rgba(214, 20, 20, 1)",
              "rgba(255, 195, 0, 1)",
              "rgba(98, 255, 0, 1)",
              "rgba(0, 229, 255, 1)",
              "rgba(0, 81, 255, 1)",
              "rgba(144, 0, 255, 1)",
            ],
            borderWidth: 0,
          },
        ],
      },
    });
  } else {
    console.error("Canvas element not found");
  }
});
