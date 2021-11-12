import React from 'react';
import { Wrapper } from './style';

export default function Tag({ content }: { content: string }) {
  return <Wrapper>{content}</Wrapper>;
}
