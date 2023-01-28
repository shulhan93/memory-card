let cards = document.querySelectorAll(".card");
let card1, card2;
let disableDesk = false;
let matched = 0;

function flipCard({ target: clickedCard }) {
    if (card1 !== clickedCard && !disableDesk) {
        clickedCard.classList.add("flip");

        if (!card1) {
            return (card1 = clickedCard);
        }
        card2 = clickedCard;
        disableDesk = true;

        let cardImg1 = card1.querySelector("img").src;
        let cardImg2 = card2.querySelector("img").src;
        matchCards(cardImg1, cardImg2);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == 8) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        card1.removeEventListener("click", flipCard);
        card2.removeEventListener("click", flipCard);
        card1 = card2 = "";
        return (disableDesk = false);
    }

    setTimeout(() => {
        card1.classList.add("shake");
        card2.classList.add("shake");
    }, 400);

    setTimeout(() => {
        card1.classList.remove("shake", "flip");
        card2.classList.remove("shake", "flip");
        card1 = card2 = "";
        disableDesk = false;
    }, 800);
}

function shuffleCard() {
    disableDesk = false;
    matched = 0;
    card1 = card2 = 0;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let img = card.querySelector(".back-view img");
        img.src = `images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

cards.forEach((el) => el.addEventListener("click", flipCard));

/*
1. Перевернуть карту +
2. Перевернуть вторую карту +
3. Сравнить карты: 
    - Если одинаковые картинки, то оставить
    - Если разные, то перевернуть обратно.
*/
