// いいね獲得率
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("good-Chart");
  if (ctx) {
    // カスタムプラグインを定義
    const ratioTextPlugin = {
      id: "ratio-text",
      beforeDraw(chart) {
        const {
          ctx,
          chartArea: { top, width, height },
        } = chart;

        if (!chart.config.options.plugins.ratioText) {
          return; // プラグインが無効の場合は処理をスキップ
        }

        ctx.save();
        const centerX = width / 2;
        const centerY = top + height / 2;

        // フォントのスタイル指定
        ctx.font = "bold 9px Roboto";
        ctx.fillStyle = "#333333";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // 中央にパーセント表示
        ctx.fillText("80%", centerX, centerY);
        ctx.restore();
      },
    };
    // プラグインを登録
    Chart.register(ratioTextPlugin);
    // チャートを作成
    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [20, 80],
            backgroundColor: [
              "rgba(255, 127, 127, 1)",
              "rgba(212, 217, 214, 1)", //#d4d9d6 リードグレイ reed gray
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "70%", // ドーナツの幅を調整
        plugins: {
          ratioText: true, // カスタムプラグインを有効化
        },
      },
    });
  } else {
    console.error("Canvas element not found");
  }
});

// 性別獲得率
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
      options: {
        cutout: "70%", // ドーナツの幅を調整
        plugins: {
          ratioText: false, // カスタムプラグインを無効化
        },
      },
    });
  } else {
    console.error("Canvas element not found");
  }
});

// 年代獲得率
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
      options: {
        cutout: "70%", // ドーナツの幅を調整
        plugins: {
          ratioText: false, // カスタムプラグインを無効化
        },
      },
    });
  } else {
    console.error("Canvas element not found");
  }
});
