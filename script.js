//title to each faq question 
const questionTitles = document.querySelector(".question-title");
//the answer to each faq question
const answer = document.querySelector(".answer");

// When the question title is clicked
questionTitles.addEventListener("click", function () {
    console.log("hello");
    answer.classList.toggle("hide")
})

