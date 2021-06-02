import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'components/design-system/molecules/Button';
import useBreakpoint from "technical/utils/useBreakpoint";
import { Search } from 'components/design-system/icons/Search';
import styles from './index.module.scss';

const Header = () => {
  const bp = useBreakpoint();
  const router = useRouter();
  
  const onButtonClick = (e) => {
    e.preventDefault();
    router.push('/creer-une-annonce');
  };

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
                <a>
                  <Button 
                    onClick={onButtonClick} 
                    variant="flat" 
                    size="small"
                    color="primary"
                  >Vendre un jeu</Button>
                </a>
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