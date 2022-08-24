import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./posts/**/*.md', { eager: true });
const posts = Object.values(postImportResult);

export function get() {
  return rss({
    title: `Tim Twiest`,
    description: 'Genius, billionaire, playboy, philanthropist.',
    site: import.meta.env.SITE,
    items: posts.map((post: any) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.publishedAt,
    })),
  });
}
