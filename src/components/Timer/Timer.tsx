import styles from './Timer.module.scss'
function Timer() {
    return (
        <div className={styles.timer}>
            <h3 className={styles.timer__title}>Следующее занятие начнется через:</h3>
            <ul className={styles.timer__container}>
                <li className={styles.timer__item}>
                    <p className={styles.timer__item_count}>00</p>
                    <p className={styles.timer__item_title}>д</p>
                </li>
                <li className={styles.timer__item}>
                    <p className={styles.timer__item_count}>00</p>
                    <p className={styles.timer__item_title}>ч</p>
                </li>
                <li className={styles.timer__item}>
                    <p className={styles.timer__item_count}>00</p>
                    <p className={styles.timer__item_title}>мин</p>
                </li>
            </ul>
            <button className={styles.timer__button}>Button</button>
        </div>
    );
}

export default Timer;