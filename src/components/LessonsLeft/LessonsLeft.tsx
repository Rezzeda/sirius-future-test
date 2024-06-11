import styles from './LessonsLeft.module.scss'

function LessonsLeft() {
    return (
        <div className={styles.LessonsLeft__container}>
            <h3 className={styles.LessonsLeft__title}>Баланс занятий</h3>
            <ul className={styles.LessonsLeft__list}>
                <li className={styles.LessonsLeft__item}>
                    <p className={styles.LessonsLeft__item_text}>Ментальная Арифметика</p>
                    <p className={styles.LessonsLeft__item_count}>10</p>
                </li>
                <li className={styles.LessonsLeft__item}>
                    <p className={styles.LessonsLeft__item_text}>Ментальная Арифметика</p>
                    <p className={styles.LessonsLeft__item_count}>10</p>
                </li>
                <li className={styles.LessonsLeft__item}>
                    <p className={styles.LessonsLeft__item_text}>Ментальная Арифметика</p>
                    <p className={styles.LessonsLeft__item_count}>10</p>
                </li>
                <li className={styles.LessonsLeft__item}>
                    <p className={styles.LessonsLeft__item_text}>Ментальная Арифметика</p>
                    <p className={styles.LessonsLeft__item_count}>10</p>
                </li>
                <li className={styles.LessonsLeft__item}>
                    <p className={styles.LessonsLeft__item_text}>Ментальная Арифметика</p>
                    <p className={styles.LessonsLeft__item_count}>10</p>
                </li>
            </ul>
            <button className={styles.LessonsLeft__button}>Button</button>
        </div>
    );
}

export default LessonsLeft;