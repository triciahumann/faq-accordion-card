// //title to each faq question 
const questionTitles = document.querySelectorAll(".question-title");
// //the answer to each faq question
const answer = document.querySelector(".answer hide");

//When the question title is clicked
// questionTitles.addEventListener("click", function () {
//     console.log("hello");
//     answer.classList.toggle("hide")
// })

questionTitles.forEach(question => {
    question.addEventListener('click', () => {
        console.log("hello");
        //answer.classList.toggle("hide")
        //nextElementSibling is not correct, it hides the arrow rather
        // than the answer going in and out
        question.nextElementSibling.classList.toggle("hide")
    })
})

