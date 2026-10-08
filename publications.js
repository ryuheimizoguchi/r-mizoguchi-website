// 1. Find the buttons and the two areas on the page
const showAllButton = document.querySelector("#show-all");
const showArticlesButton = document.querySelector("#show-articles");
const showPresentationsButton = document.querySelector("#show-presentations");

const articles = document.querySelector("#articles");
const presentations = document.querySelector("#presentations");

// 2. Decide what happens when each button is clicked
showAllButton.addEventListener("click", function (){
    articles.hidden = false;
    presentations.hidden = false;

    showAllButton.classList.add("is-active");
    showArticlesButton.classList.remove("is-active");
    showPresentationsButton.classList.remove("is-active");
});

showArticlesButton.addEventListener("click", function (){
    articles.hidden = false;
    presentations.hidden = true;

    showAllButton.classList.remove("is-active");
    showArticlesButton.classList.add("is-active");
    showPresentationsButton.classList.remove("is-active");
});

showPresentationsButton.addEventListener("click", function (){
    articles.hidden = true;
    presentations.hidden = false;

    showAllButton.classList.remove("is-active");
    showArticlesButton.classList.remove("is-active");
    showPresentationsButton.classList.add("is-active");
});
