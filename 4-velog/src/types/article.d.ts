interface Article {
  id: number;
  title: string;
  body: string;
  summary: string;
  series: string | undefined;
  tags: string;
  parsedTags?: string[];
  thumbnail?: string;
  date: string;
}
