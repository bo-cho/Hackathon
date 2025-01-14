const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementsByClassName("close")[0];

modalBtn.onclick = function () {
  modal.classList.add("show"); // クラスを付与
};

closeBtn.onclick = function () {
  modal.classList.remove("show"); // クラスを削除
};
