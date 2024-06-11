import styles from './NextLessons.module.scss'
import avatar from '../../images/avatar-icon.svg'
function NextLessons() {
    return (
        <div className={styles.NextLessons__container}>
            <h3 className={styles.NextLessons__title}>Ближайшие уроки</h3>
            <ul className={styles.NextLessons__list}>
                <li className={styles.NextLessons__item}>
                    <div className={styles.NextLessons__date}>
                        <p className={styles.NextLessons__date_day}>10</p>
                        <p className={styles.NextLessons__date_month}>декабря</p>
                    </div>
                    <p className={styles.NextLessons__lesson}>Ментальная Арифметика</p>
                    <p className={styles.NextLessons__time}>10:00-10:25</p>
                    <div className={styles.NextLessons__teacher}>
                        <img className={styles.NextLessons__teacher_avatar} src={avatar} />
                        <p className={styles.NextLessons__teacher_name}>Александр Александр</p>
                    </div>
                    <div className={styles.NextLessons__item_btns}>
                        <button className={styles.NextLessons__item_button_light}>Button</button>
                        <button className={styles.NextLessons__item_button_dark}>Button</button>
                    </div>
                </li>
                <li className={styles.NextLessons__item}>
                    <div className={styles.NextLessons__date}>
                        <p className={styles.NextLessons__date_day}>10</p>
                        <p className={styles.NextLessons__date_month}>декабря</p>
                    </div>
                    <p className={styles.NextLessons__lesson}>Ментальная Арифметика</p>
                    <p className={styles.NextLessons__time}>10:00-10:25</p>
                    <div className={styles.NextLessons__teacher}>
                        <img className={styles.NextLessons__teacher_avatar} src={avatar} />
                        <p className={styles.NextLessons__teacher_name}>Александр Александр</p>
                    </div>
                    <div className={styles.NextLessons__item_btns}>
                        <button className={styles.NextLessons__item_button_light} disabled>Button</button>
                        <button className={styles.NextLessons__item_button_dark}>Button</button>
                    </div>
                </li>
            </ul>
            <button className={styles.NextLessons__button}>Button</button>
        </div>
    );
}

export default NextLessons;