import { Counter } from "../../components/Counter/Counter";
import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Calendar from "../../components/Calendar/Calendar";

function Home() {
    return (
        <div className={styles.homepage}>
            <Navigation />
            <div className={styles.homepage__container}>
                <header>header</header>
                <div>actions</div>
                <Calendar />
                {/* <div>calendar</div> */}
                {/* <Counter /> */}
            </div>
        </div>
    );
}

export default Home;