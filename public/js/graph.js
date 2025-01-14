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
            data: [80, 70, 30, 20, 10, 0],
            backgroundColor: [
              "rgba(208,66,84, 1)",
              "rgba(277,106,60, 1)",
              "rgba(254,233, 42, 1)",
              "rgba(27, 165, 102, 1)",
              "rgba(75, 116, 184, 1)",
              "rgba(180, 59, 134, 1)",
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
