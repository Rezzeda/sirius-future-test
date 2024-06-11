import { NavLink } from 'react-router-dom';
import BannerSale from '../../components/BannerSale/BannerSale';
import LessonsLeft from '../../components/LessonsLeft/LessonsLeft';
import NextLessons from '../../components/NextLessons/NextLessons';
import Timer from '../../components/Timer/Timer';
import styles from './UserPage.module.scss';

function UserPage() {
    return (
        <div className={styles.homepage__container}>
            <BannerSale />
            <Timer />
            <div className={styles.homepage__links}>
                <NavLink to={'#'} className={`${styles.homepage__link} ${styles.homepage__link_top}`}>
                    Домашние задания
                    <svg className={styles.homepage__link_icon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" fill="white"/>
                        <path d="M20 20V14.8639" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 25.1729C14.793 25.0648 13.5804 25.3074 12.508 25.8716C12.1987 26.0502 11.8179 26.0513 11.5076 25.8746C11.1973 25.6978 11.0041 25.3697 11 25.0126V15.7939C10.9944 15.1556 11.2967 14.5537 11.812 14.1769C14.3433 12.3775 17.8038 12.6678 20 14.8639C22.1961 12.6678 25.6566 12.3775 28.188 14.1769C28.7032 14.5537 29.0055 15.1556 29 15.7939V19.9999" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 24.25V30.5C20 30.7761 20.2239 31 20.5 31H28.5C28.7761 31 29 30.7761 29 30.5V24.25" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25.95 31V27.5C25.95 27.2239 25.7261 27 25.45 27H23.45C23.1738 27 22.95 27.2239 22.95 27.5V31" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M30 25L24.8 21.1C24.6222 20.9667 24.3778 20.9667 24.2 21.1L19 25" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </NavLink>
                <NavLink to={'#'} className={`${styles.homepage__link} ${styles.homepage__link_bottom}`}>
                    Отчеты учителей
                    <svg className={styles.homepage__link_icon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H28C34.6274 0 40 5.37258 40 12V28C40 34.6274 34.6274 40 28 40H12C5.37258 40 0 34.6274 0 28V12Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.0025 29.0037H13.9975C12.8925 29.0037 11.9967 28.1079 11.9967 27.0029V12.9971C11.9967 11.892 12.8925 10.9962 13.9975 10.9962H26.0025C27.1076 10.9962 28.0034 11.892 28.0034 12.9971V27.0029C28.0034 28.1079 27.1076 29.0037 26.0025 29.0037Z" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.9983 15.9983H24.0016" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.9983 24.0017H17.9991" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M24.6129 23.5295L22.6671 25.4753L21.5006 24.3078" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.9983 20H24.0016" stroke="#323854" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </NavLink>
            </div>
            <LessonsLeft />
            <NextLessons />
        </div>
    );
}

export default UserPage;