import React from 'react';
import { incrementMonth, decrementMonth, resetToToday } from '../../services/calendarSlice';
import styles from './Calendar.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/appHooks';
import { currentDateSelector } from '../../services/selectors';
import { Lesson } from '../../services/lessonSlice';

const Calendar: React.FC = () => {
    const dispatch = useAppDispatch();
    const currentDate = useAppSelector(currentDateSelector);
    const lessons = useAppSelector(state => state.lesson.lessons);
    const startOfMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth: Date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDay: number = (startOfMonth.getDay() + 6) % 7; // Сдвиг дня недели на понедельник
    const daysInMonth: number = endOfMonth.getDate();
    const prevMonthEnd: Date = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    const prevMonthDays: number = prevMonthEnd.getDate();

    const getLessonsForDay = (date: Date): Lesson[] => {
        const dayStr = date.toISOString().split('T')[0]; // строка в формате YYYY-MM-DD
        return lessons.filter(lesson => lesson.date === dayStr);
    };

    const generateDays = (): JSX.Element[] => {
        const days: JSX.Element[] = [];

        // Предыдущие месяцы
        for (let i = startDay - 1; i >= 0; i--) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, prevMonthDays - i);
            const dayLessons = getLessonsForDay(date);
            days.push(
                <div key={`prev-${i}`} className={`${styles.day} ${styles.prevNextMonthDay}`}>
                    {<span className={styles.day_number}>{prevMonthDays - i}</span>}
                    {dayLessons.map(lesson => (
                        <div key={lesson.id} className={styles.lesson}>
                            {lesson.startTime} - {lesson.endTime}: {lesson.lessonName}
                        </div>
                    ))}
                </div>
            );
        }

        // Текущий месяц
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            const dayLessons = getLessonsForDay(date);
            days.push(
                <div key={`day-${i}`} className={styles.day}>
                    {<span className={styles.day_number}>{i}</span>}
                    {dayLessons.map(lesson => (
                        <div key={lesson.id} className={styles.lesson}>
                            {lesson.startTime} - {lesson.endTime} {lesson.lessonName}
                            {/* если не оплачено появляется кошелек */}
                            { lesson.paidLessons === 0 
                            ? <span className={styles.lesson_wallet}>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_5243_441)">
                                    <path d="M2.31171 5.27647H12.9524C13.689 5.27647 14.2857 5.87314 14.2857 6.6098V12.6665C14.2857 13.3998 13.6857 13.9998 12.9524 13.9998H3.61904C2.88237 13.9998 2.28571 13.4031 2.28571 12.6665V5.52714C2.28571 4.97247 2.62904 4.4758 3.14837 4.2798L10.0504 1.6738C10.4864 1.50914 10.9524 1.83114 10.9524 2.29714V5.2758" stroke="#E12828" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.9517 9.41664C10.8137 9.41731 10.7024 9.52931 10.7024 9.66731C10.7024 9.80531 10.8144 9.91731 10.9524 9.91664C11.0904 9.91664 11.2024 9.80464 11.2024 9.66664C11.2024 9.52864 11.0904 9.41664 10.9517 9.41664" stroke="#E12828" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_5243_441">
                                    <rect width="16" height="16" fill="white" transform="translate(0.285706)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            : null}
                        </div>
                    ))}
                </div>
            );
        } 

        // Следующий месяц
        const totalDays = startDay + daysInMonth;
        const nextMonthDays = 42 - totalDays;

        for (let i = 1; i <= nextMonthDays; i++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
            const dayLessons = getLessonsForDay(date);
            days.push(
                <div key={`next-${i}`} className={`${styles.day} ${styles.prevNextMonthDay}`}>
                    {<span className={styles.day_number}>{i}</span>}
                    {dayLessons.map(lesson => (
                        <div key={lesson.id} className={styles.lesson}>
                            {lesson.startTime} - {lesson.endTime} {lesson.lessonName}
                        </div>
                    ))}
                </div>
            );
        }
        return days;
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.calendar__header}>
                <button className={styles.calendar__header_btn} onClick={() => dispatch(decrementMonth())}>
                    {/* Previous */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L19 12" stroke="#79747F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 7L5 12" stroke="#79747F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 17L5 12" stroke="#79747F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <h2 className={styles.calendar__header_title}>
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h2>
                <button className={styles.calendar__header_btn} onClick={() => dispatch(incrementMonth())}>
                    {/* Next */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12L5 12" stroke="#79747F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 17L19 12" stroke="#79747F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14 7L19 12" stroke="#79747F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                <button className={styles.calendar__today} onClick={() => dispatch(resetToToday())}>
                    Сегодня
                </button>
                <button className={styles.calendar__question}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.0002" cy="11.9997" r="9.00375" stroke="#7362BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 12.7114L13.3276 11.9738C13.9901 11.6058 14.401 10.9075 14.401 10.1496C14.3225 8.88929 13.2417 7.92852 11.9808 7.99833C10.8543 7.95156 9.85385 8.71311 9.599 9.81149" stroke="#7362BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12.1001 15.9018C12.1001 15.957 12.0553 16.0017 12 16.0017C11.9448 16.0017 11.9001 15.9569 11.9 15.9017C11.9 15.8465 11.9447 15.8017 12 15.8016C12.0265 15.8016 12.052 15.8121 12.0708 15.8309C12.0896 15.8497 12.1002 15.8752 12.1001 15.9018" stroke="#7362BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={styles.grid}>
                <div className={styles.grid__dayOfWeek}>Пн</div>
                <div className={styles.grid__dayOfWeek}>Вт</div>
                <div className={styles.grid__dayOfWeek}>Ср</div>
                <div className={styles.grid__dayOfWeek}>Чт</div>
                <div className={styles.grid__dayOfWeek}>Пт</div>
                <div className={styles.grid__dayOfWeek}>Сб</div>
                <div className={styles.grid__dayOfWeek}>Вс</div>
                {generateDays()}
            </div>
        </div>
    );
};

export default Calendar;
