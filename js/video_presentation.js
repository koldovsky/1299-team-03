const videoBlock = document.getElementById("hidden-video");

if (videoBlock) {
  videoBlock.addEventListener("click", () => {
    // Логика для отображения скрытого видео
    alert("Video block clicked!");
  });
}
