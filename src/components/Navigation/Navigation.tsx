import MenuBanner from '../MenuBanner/MenuBanner';
import styles from './Navigation.module.scss'

function Navigation() {
    return (
        <div className={styles.menu}>
        <nav className={styles.menu__nav}>
            navigation
        </nav>
        <MenuBanner />
        </div>
    );
}

export default Navigation;