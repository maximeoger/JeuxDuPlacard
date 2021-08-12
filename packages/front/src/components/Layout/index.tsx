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

type PageContentWidthValues = "full" | "large" | "medium" | "small" | "auto";

export default function Layout({children, pageWidth = "full", title}: IProps) {
  const bp = useBreakpoint();

  const isDesktop = bp === "desktop" || bp === "desktop-small";

  return (
    <div className={styles.layout__root}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/fonts/Nunito/Nunito-Black.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-BlackItalic.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-Bold.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-BoldItalic.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-ExtraBold.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-ExtraBoldItalic.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-ExtraLight.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-ExtraLightItalic.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-Italic.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-Light.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-LightItalic.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-Regular.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-SemiBold.ttf" as="font" crossOrigin=""/>
        <link rel="preload" href="/fonts/Nunito/Nunito-SemiBoldItalic.ttf" as="font" crossOrigin=""/>
      </Head>
      <Header/>
      <div className={styles.layout__pageContainer}>
        <div className={classNames(styles.layout__pageContent, {
          [styles.layout__pageContent__full]  : isDesktop && pageWidth === "full",
          [styles.layout__pageContent__large] : isDesktop && pageWidth === "large",
          [styles.layout__pageContent__medium]: isDesktop && pageWidth === "medium",
          [styles.layout__pageContent__small] : isDesktop && pageWidth === "small",
          [styles.layout__pageContent__auto] : isDesktop && pageWidth === "auto",
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