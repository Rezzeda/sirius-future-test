import styles from './ScheduleActions.module.scss'

function ScheduleActions() {
    return (
        <div className={styles.ScheduleActions}>
            <form>
                {/* <label htmlFor="lesson-select">Выбрать предмет</label> */}
                <select className={styles.ScheduleActions__select} name="lesson" id="lesson-select">
                    <option className={styles.ScheduleActions__option} value="">Выбрать предмет</option>
                    <option className={styles.ScheduleActions__option} value="maths">Ментальная Арифметика</option>
                    <option className={styles.ScheduleActions__option} value="programming">Программирование</option>
                    <option className={styles.ScheduleActions__option} value="reading">Скорочтение</option>
                </select>
            </form>
            <div className={styles.ScheduleActions__btns}>
                <button className={styles.ScheduleActions__btn}>Изменить расписание</button>
            </div>
        </div>
    );
}

export default ScheduleActions;