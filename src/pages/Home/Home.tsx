import styles from "./Home.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import UserPage from "../../pages/UserPage/UserPage";
import AppHeader from "../../components/AppHeader/AppHeader";

function Home() {
    return (
        <div className={styles.homepage}>
            <Navigation />
            <div className={styles.homepage__container}>
                <AppHeader />
                <UserPage />
            </div>
        </div>
    );
}

export default Home;