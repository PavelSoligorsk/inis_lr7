const articles = [
  {
    slug: "design-systems",
    title: "Как дизайн-системы ускоряют масштабирование веб-приложений",
    author: "Алексей П.",
    likes: 42,
    tag: "Фронтенд",
    publishedAt: "2026-10-30T09:00:00.000Z",
    content:
      "Одни и те же кнопка, карточка и поле собираются в экран, а не рисуются заново.",
  },
  {
    slug: "card-component",
    title: "Зачем карточке отдельный компонент",
    author: "Марина К.",
    likes: 18,
    tag: "Компоненты",
    publishedAt: "2026-10-29T12:00:00.000Z",
    content:
      "Заголовок, автор и обложка приходят через props. Карточка не знает, откуда взялся список.",
  },
  {
    slug: "shared-filter",
    title: "Общий фильтр не живёт в карточке",
    author: "Илья С.",
    likes: 7,
    tag: "Состояние",
    publishedAt: "2026-10-28T15:30:00.000Z",
    content: "Кнопка тега меняет store, а список сам читает активный тег.",
  },
  {
    slug: "cover-file",
    title: "Обложка как файл, а не как цвет",
    author: "Ольга В.",
    likes: 3,
    tag: "Фронтенд",
    publishedAt: "2026-10-27T08:10:00.000Z",
    content: "Адрес картинки хранится отдельно от разметки карточки.",
  },
];

function getArticles() {
  return articles;
}

function getArticle(slug) {
  return articles.find((item) => item.slug === slug) || null;
}

module.exports = { getArticles, getArticle };
