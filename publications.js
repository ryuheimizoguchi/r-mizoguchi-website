// 1. Find all filter buttons and all groups on the page
const buttons = document.querySelectorAll(".pub-filter button");
const groups = document.querySelectorAll("[data-group]");

// 2. Give every button the same click behavior
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter;

        // Show the matching group(s), hide the others
        groups.forEach(function (group) {
            if (filter === "all" || group.dataset.group === filter) {
                group.hidden = false;
            } else {
                group.hidden = true;
            }
        });

        // Highlight only the clicked button
        buttons.forEach(function (otherButton) {
            otherButton.classList.remove("is-active");
        });
        button.classList.add("is-active");
    });
});