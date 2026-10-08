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

// 3. Turn one item from publications.json into text for a list item
const myNames = ["Mizoguchi, R.", "溝口龍平"];

function formatPublication(pub) {
    // Make my name bold (English and Japanese)
    let authors = pub.authors;
    myNames.forEach(function (name) {
        authors = authors.replace(name, `<strong>${name}</strong>`);
    });

    // Presentations: "(2024, August)" and the conference name
    if (pub.venue) {
        return `${authors} (${pub.year}, ${pub.month}). ${pub.title}. ${pub.venue}.`;
    }

    // Articles: journal name and volume in italics, then the issue if there is one
    let text = `${authors} (${pub.year}). ${pub.title}.`;
    if (pub.journal) {
        let source = `<em>${pub.journal}, ${pub.volume}</em>`;
        if (pub.issue) {
            source = source + `(${pub.issue})`;
        }
        text = text + ` ${source}, ${pub.pages}.`;
    }
    if (pub.doi) {
        text = text + ` <a href="${pub.doi}" target="_blank">${pub.doi}</a>`;
    }
    return text;
}

// 4. Load publications.json and put each item into the list for its type
fetch("publications.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (publications) {
        publications.forEach(function (pub) {
            const list = document.querySelector(`[data-list="${pub.type}"]`);
            const item = document.createElement("li");
            item.innerHTML = formatPublication(pub);
            list.appendChild(item);
        });
    })
    .catch(function (error) {
        console.error("Could not load publications.json:", error);
    });