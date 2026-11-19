import Link from "next/link";
import CommentSection from "../../components/CommentSection";
import LikeButton from "../../components/LikeButton";
import { getArticle, getArticles } from "../../lib/articles";
import { formatPublishedAt } from "../../lib/formatPublishedAt";

export default function Post({ article, builtAt }) {
  return (
    <main>
      <p>
        <Link href="/">К ленте</Link>
      </p>
      <p className="tag">{article.tag}</p>
      <h1>{article.title}</h1>
      <p>
        {article.author} · {formatPublishedAt(article.publishedAt, new Date(builtAt))}
      </p>
      <p>{article.content}</p>
      <p className="stamp">Страница собрана при сборке: {builtAt}</p>
      <LikeButton initialCount={article.likes} />
      <CommentSection />
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: getArticles().map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = getArticle(params.slug);
  return {
    props: {
      article,
      builtAt: new Date().toISOString(),
    },
  };
}
