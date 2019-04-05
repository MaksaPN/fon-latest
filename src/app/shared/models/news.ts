export interface News {
  id: number;
  source: NewsSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface NewsSource {
  id: string;
  name: string;
}

export interface NewsApiError {
  status: string;
  code: string;
  message: string;
}
