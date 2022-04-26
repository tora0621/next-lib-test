import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scroll(0, 0)}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </div>
  );

  // return <Component {...pageProps} />;
}

export default MyApp;
