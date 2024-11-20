// Пример данных новостей и событий
const newsData = [
    { title: "First Day of School", description: "The new academic year starts on September 1st." },
    { title: "Science Fair", description: "Our annual science fair will take place on November 15th." }
];

const eventsData = [
    { title: "Parent-Teacher Meeting", date: "November 20, 2024" },
    { title: "Sports Day", date: "December 10, 2024" }
];

// Функция для рендеринга карточек
function renderCards(container, data) {
    const html = data.map(item => `
        <div class="card">
            <h3>${item.title}</h3>
            <p>${item.description || item.date}</p>
        </div>
    `).join('');
    container.innerHTML = html;
}

// Загрузка новостей и событий
document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector(".news-container");
    const eventsContainer = document.querySelector(".events-container");

    renderCards(newsContainer, newsData);
    renderCards(eventsContainer, eventsData);
});
