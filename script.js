//title to each faq question 
const questionTitle = document.querySelector(".question-title");
//the answer to each faq question
const answer = document.querySelector(".answer");

// When the question title is clicked
questionTitle.addEventListener("click", function () {
    console.log("hello");
    answer.classList.remove("hide")
})