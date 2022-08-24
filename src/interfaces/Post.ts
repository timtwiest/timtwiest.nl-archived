export type PostFrontMatter = {
  title: string;
  summary: string;
  original?: {
    url: string;
    external?: boolean;
  };
  publishedAt: string;
};
