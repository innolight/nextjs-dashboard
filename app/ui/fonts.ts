import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

// use Inter with latin-subset as primary font
export const fontInter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin']
});
