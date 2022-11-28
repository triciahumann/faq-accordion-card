// //title to each faq question 
const questions = document.querySelectorAll(".question");

questions.forEach((question) => question.addEventListener
('click', () => {
    console.log("clicked");
    //parentNode is the element above in HTML, 
    //so the parentNode for .question is ".accordion-item"
    if(question.parentNode.classList.contains("active")) {
        question.parentNode.classList.toggle('active');
    } else {
        questions.forEach((question) => question.parentNode.classList.remove("active"))
        question.parentNode.classList.add('active')
    }
})
)



// //When the question title is clicked
// questionTitles.addEventListener("click", function () {
//     console.log("hello");
//     answer.classList.toggle("hide")
// })

// questionTitles.forEach(question => {
//     question.addEventListener('click', () => {
//         console.log("hello");
//         //answer.classList.toggle("hide")
//         //nextElementSibling is not correct, it hides the arrow rather
//         // than the answer going in and out
//         question.nextElementSibling.classList.toggle("hide")
//     })
// })

