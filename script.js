let cards = document.querySelectorAll(".card");

function shuffleCard() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    console.log(arr);
    cards.forEach((card, i) => {
        let img = card.querySelector(".back-view img");
        img.src = `images/img-${arr[i]}.png`;
    });
}

shuffleCard();
