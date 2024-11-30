document.addEventListener("DOMContentLoaded", function () {
    // すべての入力要素とプルダウンメニューを取得
    const inputs = document.querySelectorAll("input, textarea, select");

    // 各要素にイベントリスナーを設定
    inputs.forEach((input) => {
        // 入力欄とプルダウンの違いを処理
        const eventType = input.tagName === "SELECT" ? "change" : "input";

        input.addEventListener(eventType, function () {
            if (input.value.trim() !== "") {
                input.style.backgroundColor = "#fff"; // 文字が入力or選択されたら白に変更
            } else {
                input.style.backgroundColor = "#E7E5E5"; // 空なら灰色に戻す
            }
        });
    });
});
