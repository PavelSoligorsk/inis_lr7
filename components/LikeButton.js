import { useState } from "react";

export default function LikeButton({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  function like() {
    setLiked(true);
    setCount((value) => value + 1);
  }

  return (
    <button type="button" className={liked ? "like liked" : "like"} onClick={like}>
      {liked ? "Отмечено" : "Like"} {count}
    </button>
  );
}
