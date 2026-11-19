import Link from "next/link";
import { getArticles } from "../lib/articles";
import { formatPublishedAt } from "../lib/formatPublishedAt";

export default function Home({ articles, generatedAt }) {
  return (
    <main>
      <p className="eyebrow">Блог</p>
      <h1>Лента статей</h1>
      <p className="stamp">Страница собрана на сервере: {generatedAt}</p>
      <ul className="feed">
        {articles.map((article) => (
          <li key={article.slug}>
            <p className="tag">{article.tag}</p>
            <h2>
              <Link href={`/posts/${article.slug}`}>{article.title}</Link>
            </h2>
            <p>
              {article.author} · {formatPublishedAt(article.publishedAt, new Date(generatedAt))}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      articles: getArticles(),
      generatedAt: new Date().toISOString(),
    },
  };
}
