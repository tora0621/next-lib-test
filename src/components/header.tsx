import Link from 'next/link';
import h from '../styles/header.module.scss';

const Header = () => {
  return (
    <header className={h.header}>
      <div className={h.container}>
        <span className={h.text}>
          The source code for this is
          <Link href={`https://github.com/tora0621/next-lib-test`}>
            <a className={h.link} target='_blank'>
              {' '}
              available on Git Hub
            </a>
          </Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
