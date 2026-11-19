function formatPublishedAt(iso, now = new Date()) {
  const published = new Date(iso);
  const hours = Math.floor((now.getTime() - published.getTime()) / 3600000);
  if (hours < 1) return "только что";
  if (hours === 1) return "1 ч. назад";
  if (hours < 24) return `${hours} ч. назад`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "1 д. назад";
  return `${days} д. назад`;
}

module.exports = { formatPublishedAt };
