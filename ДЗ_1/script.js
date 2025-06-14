const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");
const switchBtn = document.getElementById("textBtn");

switchBtn.addEventListener("click", () => {
  if (text1.classList.contains("hidden")) {
    text1.classList.remove("hidden");
    text1.classList.add("visible");
    text2.classList.remove("visible");
    text2.classList.add("hidden");
  } else {
    text1.classList.remove("visible");
    text1.classList.add("hidden");
    text2.classList.remove("hidden");
    text2.classList.add("visible");
  }
});