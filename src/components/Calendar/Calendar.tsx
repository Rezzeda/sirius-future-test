import React from 'react';
import { incrementMonth, decrementMonth, resetToToday } from '../../services/calendarSlice';
import styles from './Calendar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/appHooks';
import { currentDateSelector } from '../../services/selectors';

const Calendar: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentDate = useAppSelector(currentDateSelector);
    const startOfMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDay: number = (startOfMonth.getDay() + 6) % 7; // Сдвиг дня недели на понедельник
    const daysInMonth: number = endOfMonth.getDate();

    const prevMonthEnd: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const prevMonthDays: number = prevMonthEnd.getDate();

    const generateDays = (): JSX.Element[] => {
        const days: JSX.Element[] = [];

        // Предыдущие месяцы
        for (let i = startDay - 1; i >= 0; i--) {
            days.push(
                <div key={`prev-${i}`} className={`${styles.day} ${styles.prevNextMonthDay}`}>
                    {prevMonthDays - i}
                </div>
            );
        }

        // Текущий месяц
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(
                <div key={`day-${i}`} className={styles.day}>
                    {i}
                </div>
            );
        } 

        // Следующий месяц
        const totalDays = startDay + daysInMonth;
        const nextMonthDays = 42 - totalDays; // 42 ячеек (6 недель по 7 дней) для покрытия полного месяца

        for (let i = 1; i <= nextMonthDays; i++) {
            days.push(
                <div key={`next-${i}`} className={`${styles.day} ${styles.prevNextMonthDay}`}>
                    {i}
                </div>
            );
        }

        return days;
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.header}>
                <button onClick={() => dispatch(decrementMonth())}>Previous</button>
                <h2>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                <button onClick={() => dispatch(incrementMonth())}>Next</button>
            </div>
            <div className={styles.grid}>
                <div className={styles.dayOfWeek}>Mon</div>
                <div className={styles.dayOfWeek}>Tue</div>
                <div className={styles.dayOfWeek}>Wed</div>
                <div className={styles.dayOfWeek}>Thu</div>
                <div className={styles.dayOfWeek}>Fri</div>
                <div className={styles.dayOfWeek}>Sat</div>
                <div className={styles.dayOfWeek}>Sun</div>
                {generateDays()}
            </div>
            <button className={styles.todayButton} onClick={() => dispatch(resetToToday())}>
                Today
            </button>
        </div>
    );
};


export default Calendar;
