import { Link } from 'react-router-dom';
import styles from './MenuBanner.module.scss';

function MenuBanner() {
    return (
        <div className={styles.banner}>
            <h2 className={styles.banner__title}>Учитесь бесплатно</h2>
            <p className={styles.banner__subtitle}>Приводите друзей с детьми заниматься в Sirius Future 
            и получайте подарки!</p>
            <Link to={'/learnfree'} className={styles.banner__btn} >Узнать</Link>
        </div>
    );
}

export default MenuBanner;