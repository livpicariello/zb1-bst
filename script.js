// Select all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

// Define the filterCards function
const filterCards = (e) => {
    document.querySelector('.active').classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    filterableCards.forEach(card => {
        card.classList.add("hide");
    });
};

console.log(filterButtons, filterableCards);

// Add click event listener to each filter button
filterButtons.forEach((button) => button.addEventListener("click", filterCards));
