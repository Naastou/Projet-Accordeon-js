const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const minusIcon = question.querySelector(".minus-icon");
  const plusIcon = question.querySelector(".plus-icon");

  plusIcon.addEventListener("click", function () {
    question.classList.add("show-text");
  });

  minusIcon.addEventListener("click", function () {
    question.classList.remove("show-text");
  });
});
