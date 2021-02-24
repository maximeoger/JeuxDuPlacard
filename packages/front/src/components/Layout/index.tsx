import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styles from './index.module.scss';

interface IProps {
  children: ReactNode;
  title: string;

}

export default function Layout({children, title}: IProps) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Accueil</a>
          </Link>
        </li>
        <li>
          <Link href="/connexion">
            <a>Connexion</a>
          </Link>
        </li>
        <li>
          <Link href="/inscription">
            <a>Inscription</a>
          </Link>
        </li>
      </ul>
    </nav>
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