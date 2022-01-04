interface Article extends Write, Preview {
  id?: string;
  date?: string;
}

interface Write {
  title?: string;
  body?: string;
  tags?: string[];
}

interface Preview {
  summary?: string;
  thumbnail?: string;
}
