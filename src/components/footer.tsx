import Link from 'next/link';
import f from '../styles/footer.module.scss';
import { NextPage } from 'next';

//ref:https://zenn.dev/ifhito/articles/7d345bb8d03024
// type Props = {
//   title:string
// }

const Footer = () => {
  return (
    <footer className={f.footer}>
      <div className={f.container}>
        <span className={f.title}>Micro Cms Test Page Next.js</span>
        <Link href={`/`}>
          <a className={f.btn}>TOP</a>
        </Link>
        <Link href={`/news/`}>
          <a className={f.btn2}>News</a>
        </Link>
        <Link href={`/`}>
          <a className={f.link}>View on GitHub</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
