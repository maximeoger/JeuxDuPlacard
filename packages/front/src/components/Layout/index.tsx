import Head from 'next/head';
import { ReactNode } from 'react';
import Header from 'components/design-system/organisms/Header';
import styles from './index.module.scss';

interface IProps {
  children: ReactNode;
  title: string;

}

export default function Layout({children, title}: IProps) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <div className={styles.layout}>
      {children}
    </div>
    <footer>
      <hr/>
      <span>
        footer
      </span>
    </footer>
    </>
  )
}