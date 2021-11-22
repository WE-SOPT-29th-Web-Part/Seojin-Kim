interface Article extends Write, Preview {
  id?: number;
  series?: string | undefined;
  thumbnail?: string;
  date?: string;
  tags?: string;
}

interface Write {
  title?: string;
  body?: string;
  parsedTags?: string[];
}

interface Preview {
  summary?: string;
}
