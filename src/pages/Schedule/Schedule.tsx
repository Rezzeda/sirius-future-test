import AppHeader from '../../components/AppHeader/AppHeader';
import Calendar from '../../components/Calendar/Calendar';
import Navigation from '../../components/Navigation/Navigation';
import ScheduleActions from '../../components/ScheduleActions/ScheduleActions';
import styles from './Schedule.module.scss';

function Schedule() {
    return (
        <div className={styles.schedulePage}>
            <Navigation />
            <div className={styles.schedulePage__container}>
                <AppHeader />
                <ScheduleActions />
                <Calendar />
            </div>
        </div>
    );
}

export default Schedule;