import styles from './BannerSale.module.scss'

function BannerSale() {
    return (
        <div className={styles.banner}>
            <h3 className={styles.banner__title}>До&nbsp;31&nbsp;декабря любой курс со&nbsp;скидкой&nbsp;20%</h3>
            <p className={styles.banner__subtitle}>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
        </div>
    );
}

export default BannerSale;