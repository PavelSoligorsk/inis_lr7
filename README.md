# Лента статей на Next.js

Вариант 4. Главная `/` рендерится на сервере (`getServerSideProps`) и пишет время запроса. Страница статьи `/posts/[slug]` собирается заранее (`getStaticPaths` и `getStaticProps`).

## Запуск

```bash
npm install
npm run build
npm run start
```

Для разработки: `npm run dev`.
