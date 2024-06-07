import AppHeader from '../../components/AppHeader/AppHeader';
import Calendar from '../../components/Calendar/Calendar';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Schedule.module.scss';

function Schedule() {
    return (
        <div className={styles.homepage}>
            <Navigation />
            <div className={styles.homepage__container}>
            <AppHeader />
            <div>actions</div>
                <Calendar />
                {/* <div>calendar</div> */}
                {/* <Counter /> */}
            </div>
        </div>
    );
}

export default Schedule;