import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import logo from "../../images/Logomark_1_.svg"
import { FiEye, FiEyeOff } from 'react-icons/fi'; // используем иконки из react-icons
import { useState } from "react";

enum Language {
    RU = 'RU',
    EN = 'EN',
}

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [language, setLanguage] = useState<Language>(Language.RU);

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <div className={styles.login}>
            <div className={styles.title}>
                <img src={logo} alt="logo" className={styles.title__logo}></img>
                <h1 className={styles.title__text}>Вход в Sirius Future</h1>
            </div>
            <form className={styles.form}>
                <input
                    className={styles.form__input}
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    required
                />
                <div className={styles.form__container}>
                    <input
                        className={styles.form__input}
                        placeholder="Пароль"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                    />
                    <span
                        className={styles.form__toggle}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                </div>
                <div className={styles.form__remember}>
                    <input type="checkbox" id="rememberMe" name="rememberMe" className={styles.checkbox} />
                    <label className={styles.checkbox__label} htmlFor="rememberMe">Запомнить меня</label>
                </div>
                <button
                    className={styles.form__button}
                    type="submit"
                >
                    Войти
                </button>
                <div className={styles.links}>
                    <p>
                        <Link to={"/forgot-password"} className={styles.links__link}>
                            Я забыл пароль
                        </Link>
                    </p>
                    <p>
                        <Link to={"/trainer"} className={styles.links__link}>
                            Войти как тренер
                        </Link>
                    </p>
                </div>
                <p className={styles.links__accent}> 
                    Нет аккаунта?
                    <br/>
                    <Link to={"/register"} className={styles.links__link}>
                        Зарегистрироваться
                    </Link>
                </p>
            </form>
            <div className={styles.languageSwitcher}>
                <button
                    className={`${styles.languageSwitcher__btn} ${language === Language.RU ? styles.languageSwitcher__btn_active : ''}`}
                    onClick={() => handleLanguageChange(Language.RU)}
                >
                    RU
                </button>
                <button
                    className={`${styles.languageSwitcher__btn} ${language === Language.EN ? styles.languageSwitcher__btn_active : ''}`}
                    onClick={() => handleLanguageChange(Language.EN)}
                >
                    EN
                </button>
            </div>
        </div>
    );
}

export default Login;
