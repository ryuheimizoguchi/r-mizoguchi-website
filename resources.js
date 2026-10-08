// Load resources.json and put each link into the list named in "list"
fetch("resources.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (resources) {
        resources.forEach(function (resource) {
            const list = document.querySelector(`[data-list="${resource.list}"]`);
            const item = document.createElement("li");
            item.innerHTML = `<a href="${resource.url}" target="_blank">${resource.title}</a>`;
            list.appendChild(item);
        });
    })
    .catch(function (error) {
        console.error("Could not load resources.json:", error);
    });
