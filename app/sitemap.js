import { publishedGuides } from "./lib/guides";

const BASE = "https://kcalc.kr";

export default function sitemap() {
  const now = new Date();

  // 정적 페이지
  const staticPages = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${BASE}/salary`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/severance`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/loan`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/savings`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${BASE}/guides`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${BASE}/about`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${BASE}/contact`, priority: 0.4, changeFrequency: "monthly" },
    { url: `${BASE}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${BASE}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ].map((p) => ({ ...p, lastModified: now }));

  // 게시된 머니 팁 글
  const guidePages = publishedGuides().map((g) => ({
    url: `${BASE}/guides/${g.slug}`,
    lastModified: new Date(g.lastReviewed ? `${g.lastReviewed}-01` : g.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages];
}
