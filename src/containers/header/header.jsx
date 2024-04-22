import Link from 'next/link.js';
import style from './header.module.css';

const Header = () => {

    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/product">Produit</Link>
                    </li>
                    <li>
                        <Link href="/country">Pays</Link>
                    </li>
                    <li>
                        <Link href="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;