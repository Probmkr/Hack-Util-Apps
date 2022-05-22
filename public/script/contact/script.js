const textarea = document.getElementById("message");
const letterCount = document.getElementById("messageLetterCount");
textarea.oninput = () => {
  letterCount.textContent = textarea.value.length;
};
