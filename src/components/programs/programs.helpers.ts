import { TBook, TProgram } from './programs.types';

export function toBook(data: TBook): TProgram[] {
  const { author, book, chapters } = data;

  const out = chapters.map((chapter, index) => ({
    id: `${author}-${book}-${index + 1}`,
    name: `${author}, ${book} - Chapter ${index + 1}`,
    play: chapter
      .trim()
      .replace(/[^\w,.!?]/gm, ' ')
      .replace(/\n\s*\n/gm, '|')
      .replace(/\s+/gm, ' ')
      .replace(/\|/gm, '\n\n')
  }));

  console.log(out);

  return out;
}