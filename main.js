const QUESTIONS = document.querySelectorAll(".question-heading");
console.log(QUESTIONS);

QUESTIONS.forEach(
  addEventListener("click", (e) => {
    let currentTarget = e.target;
    currentTarget.classList.toggle("closed");
    currentTarget.classList.toggle("open");
    currentTarget.nextElementSibling.nextElementSibling.classList.toggle(
      "active"
    );
  })
);
