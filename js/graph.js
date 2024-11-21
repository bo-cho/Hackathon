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
            data: [80, 20],
            backgroundColor: [
              "rgba(246, 46, 54, 1)",
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
            data: [40, 44, 10],
            backgroundColor: [
              "rgba(0, 160,222, 1)",
              "rgba(246, 46, 54, 1)",
              "rgba(212, 217, 214, 1)",
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
            data: [20, 20, 20, 20, 20, 20],
            backgroundColor: [
              "rgba(242,112,112, 1)",
              "rgba(239,162,58, 1)",
              "rgba(237,200, 34, 1)",
              "rgba(94, 211, 141, 1)",
              "rgba(80, 199, 218, 1)",
              "rgba(69, 137, 235, 1)",
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
