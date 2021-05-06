import React from 'react';
import Link from 'next/link';
import { Button } from 'components/molecules/Button';
import useBreakpoint from "technical/utils/useBreakpoint";
import styles from 'styles/organisms/Header/index.module.scss';
import { Search } from 'components/icons/Search';

const Header = () => {
  const bp = useBreakpoint();
 // console.log(bp);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        {
          (bp === "mobile-large" || bp === "tablet") ? (
            <div className={styles.iconContainer}>
              <Search color="#575366"/>
            </div>
          ) : (
            <div className={styles.btnContainer}>
              <Link href="/">
                <a><Button variant="flat" size="small" color="primary">Vendre un jeu</Button></a>
              </Link>
              <Link href="/inscription">
                <a><Button variant="flat" size="small" color="secondary">Inscription | Connexion</Button></a>
              </Link>
            </div>
          )
        } 
         
      </div>
    </div>
  )
}

export default Header;