import Head from 'next/head';
import classNames from 'classnames';
import { ReactNode } from 'react';
import Header from 'components/design-system/organisms/Header';
import styles from './index.module.scss';
import useBreakpoint from 'technical/utils/useBreakpoint';

interface IProps {
  children: ReactNode;
  title: string;
  pageWidth?: PageContentWidthValues;
}

type PageContentWidthValues = "full" | "large" | "medium" | "small";

export default function Layout({children, pageWidth = "full", title}: IProps) {
  const bp = useBreakpoint();

  const isDesktop = bp === "desktop" || bp === "desktop-small";

  return (
    <div className={styles.layout__root}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={styles.layout__pageContainer}>
        <div className={classNames(styles.layout__pageContent, {
          [styles.layout__pageContent__full]  : isDesktop && pageWidth === "full",
          [styles.layout__pageContent__large] : isDesktop && pageWidth === "large",
          [styles.layout__pageContent__medium]: isDesktop && pageWidth === "medium",
          [styles.layout__pageContent__small] : isDesktop && pageWidth === "small",
        })}>
          {children}
        </div>
      </div>
      <footer>
        <hr/>
        <span>
          footer
        </span>
      </footer>
    </div>
  )
}