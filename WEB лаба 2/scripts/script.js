const clothesData = { // масив елементів, які є object (одягу)
    all: [
        { type: 'hat', image: 'hat1.jpg', description: 'Брендові капелюхи. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'dress', image: 'dress1.jpg', description: 'Брендові сукні. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'top', image: 'top1.jpg', description: 'Брендовий верхній одяг. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { type: 'shoes', image: 'shoes1.jpg', description: 'Брендове взуття. Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        // дані для типів
    ],
    hat: [
        { type: 'hat', image: 'hat1.jpg', description: 'Чудовий капелюх номер 1. ' },
        { type: 'hat', image: 'hat2.jpg', description: 'Чудовий капелюх номер 2.' },
        { type: 'hat', image: 'hat3.jpg', description: 'Чудовий капелюх номер 3.' },
        { type: 'hat', image: 'hat4.jpg', description: 'Чудовий капелюх номер 4.' },
        { type: 'hat', image: 'hat5.jpg', description: 'Чудовий капелюх номер 5.' },
        { type: 'hat', image: 'hat6.jpg', description: 'Чудовий капелюх номер 6.' },
        { type: 'hat', image: 'hat7.jpg', description: 'Чудовий капелюх номер 7.' },
        { type: 'hat', image: 'hat8.jpg', description: 'Чудовий капелюх номер 8.' },
        { type: 'hat', image: 'hat9.jpg', description: 'Чудовий капелюх номер 9.' },
        { type: 'hat', image: 'hat10.jpg', description: 'Чудовий капелюх номер 10.' },
        // тут можна нові капелюхи додати
    ],
    dresses: [
        { type: 'dress', image: 'dress1.jpg', description: 'Гарна сукня номер 1.' },
        { type: 'dress', image: 'dress2.jpg', description: 'Гарна сукня номер 2.' },
        { type: 'dress', image: 'dress3.jpg', description: 'Гарна сукня номер 3.' },
        { type: 'dress', image: 'dress4.jpg', description: 'Гарна сукня номер 4.' },
        { type: 'dress', image: 'dress6.jpg', description: 'Гарна сукня номер 5.' },
        { type: 'dress', image: 'dress5.jpg', description: 'Гарна сукня номер 6.' },
        { type: 'dress', image: 'dress7.jpg', description: 'Гарна сукня номер 7.' },
        { type: 'dress', image: 'dress8.jpg', description: 'Гарна сукня номер 8.' },
        { type: 'dress', image: 'dress9.jpg', description: 'Гарна сукня номер 9.' },
        { type: 'dress', image: 'dress10.jpg', description: 'Гарна сукня номер 10.' },
        // тут сукні
    ],
    tops: [
        { type: 'top', image: 'top1.jpg', description: 'Брендова куртка номер 1.' },
        { type: 'top', image: 'top2.jpg', description: 'Брендова куртка номер 2.' },
        { type: 'top', image: 'top3.jpg', description: 'Брендова куртка номер 3.' },
        { type: 'top', image: 'top4.jpg', description: 'Брендова куртка номер 4.' },
        { type: 'top', image: 'top5.jpg', description: 'Брендова куртка номер 5.' },
        { type: 'top', image: 'top6.jpg', description: 'Брендова куртка номер 6.' },
        { type: 'top', image: 'top7.jpg', description: 'Брендова куртка номер 7.' },
        { type: 'top', image: 'top8.jpg', description: 'Брендова куртка номер 8.' },
        { type: 'top', image: 'top9.jpg', description: 'Брендова куртка номер 9.' },
        { type: 'top', image: 'top10.jpg', description: 'Брендова куртка номер 10.' },
        // всілякий верхній одяг
    ],
    shoes: [
        { type: 'shoes', image: 'shoes1.jpg', description: 'Стильне взуття номер 1.' },
        { type: 'shoes', image: 'shoes2.jpg', description: 'Стильне взуття номер 2.' },
        { type: 'shoes', image: 'shoes3.jpg', description: 'Стильне взуття номер 3.'},
        { type: 'shoes', image: 'shoes4.jpg', description: 'Стильне взуття номер 4.' },
        { type: 'shoes', image: 'shoes5.jpg', description: 'Стильне взуття номер 5.' },
        { type: 'shoes', image: 'shoes6.jpg', description: 'Стильне взуття номер 6.' },
        { type: 'shoes', image: 'shoes7.jpg', description: 'Стильне взуття номер 7.' },
        { type: 'shoes', image: 'shoes8.jpg', description: 'Стильне взуття номер 8.' },
        { type: 'shoes', image: 'shoes9.jpg', description: 'Стильне взуття номер 9.' },
        { type: 'shoes', image: 'shoes10.jpg', description: 'Стильне взуття номер 10.' },
        // взуття
    ],
    // дані для інших фільтрів
};
// відповідає за завантаження одягу на веб-сторінку відповідно до обраного фільтру.
// Наприклад, якщо користувач обирає "Взуття", то відображаються тільки взуття, які відповідають вибору. 
function loadClothes() {
    const filterSelect = document.getElementById('filterSelect');
    const selectedFilter = filterSelect.value;
    const clothesContainer = document.getElementById('clothes-container');

    // очищення контейнера перед завантаженням нових даних
    clothesContainer.innerHTML = '';

    // витягування даних відповідно до обраного фільтру
    const selectedData = clothesData[selectedFilter];

    // створення та додавання елементів до контейнера
    selectedData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = `../images/${item.image}`;
        img.alt = item.type;
        card.appendChild(img);

        const description = document.createElement('p');
        description.className = 'description';
        description.textContent = item.description.substring(0, 100);
        card.appendChild(description);

        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-button';
        toggleButton.textContent = 'Опис';
        toggleButton.onclick = function () {
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                toggleButton.textContent = 'Згорнути опис';
            } else {
                description.style.display = 'none';
                toggleButton.textContent = 'Опис';
            }
        };
        card.appendChild(toggleButton);

        clothesContainer.appendChild(card);
    });
}

// завантаження усіх елементів при завантаженні сторінки 
window.onload = loadClothes;


document.addEventListener("DOMContentLoaded", () => { //обробник модального і немодального
    let dialog = document.getElementById("dialog");
    let modal = document.getElementById("modal");
    let isSubscritionAccepted;
    if (localStorage.getItem('subscriptionAccepted') == null) {
        isSubscriptionAccepted = localStorage.setItem('subscriptionAccepted', 'false');
    }


// відображає діалогове вікно та встановлює обробники подій для його закриття та натискання на кнопку, 
//щоб зберегти статус підписки в локальному сховищі.
    let submitBtn = document.getElementById("submit");
    function nonModal() {
        dialog.show();

        dialog.onclose = () => {
            console.log("closed: ", dialog.returnValue);
        };

        submitBtn.onclick = (e) => {
            localStorage.setItem('subscriptionAccepted', 'true');

        };
    }
// перевіряє, чи користувач вже погодився на щось
    if (localStorage.getItem('subscriptionAccepted') == null || localStorage.getItem('subscriptionAccepted') == 'false') {
        isSubscriptionAccepted = localStorage.setItem('subscriptionAccepted', 'false')
        window.setTimeout(nonModal, 10000);
    }
    //document.write(isSubscriptionAccepted); //перевірка того, що користувач вже прийняв розсилку
    function showButton() {
        var button = document.querySelector(".hidden");
        var text = document.querySelector("#fivesec");
        text.classList.replace("shown", "hidden");
        button.classList.replace("hidden", "shown");
    }

    function showModal() {
        modal.show();
    }
    for (let i = 0; i < 1; i++) {
        window.setTimeout(showModal, 30000);
        window.setTimeout(showButton, 35000);
    }
});

