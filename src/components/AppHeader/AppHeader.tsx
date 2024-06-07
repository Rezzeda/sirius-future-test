import styles from './AppHeader.module.scss';
import messageIcon from '../../images/Messages, Chat.svg';
import avatar1 from '../../images/avatar.png';
import avatar2 from '../../images/avatar2.png';
import { useState } from 'react';
import CustomModal from '../Modal/CustomModal';
import { NavLink } from 'react-router-dom';

interface User {
    name: string;
    avatar: string;
}

const AppHeader: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<User>({ name: 'Михаил', avatar: avatar1 });
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

    const users: User[] = [
        { name: 'Михаил', avatar: avatar1 },
        { name: 'Анна', avatar: avatar2 }
    ];

    const handleUserChange = (user: User) => {
        setSelectedUser(user);
        setModalIsOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <p className={styles.header__text}>
                    Добро пожаловать,&nbsp;
                    <span className={styles.header__text_accent}>{selectedUser.name}</span>
                    &#33;
                </p>
                <div className={styles.header__btns}>
                    <button className={styles.header__btn_dialogs} type="button">
                        <img src={messageIcon} alt="message icon" />
                        <div className={styles.header__btn_counter}>1</div>
                    </button>
                    <button className={styles.header__btn_user} type="button" onClick={() => setModalIsOpen(true)}>
                        <img className={styles.header__userImg} src={selectedUser.avatar} alt="user avatar" />
                    </button>
                    <svg className={styles.selectIcon} onClick={() => setModalIsOpen(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 10L12 14L16 10" stroke="#7362BC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className={styles.modalContainer}>
                {modalIsOpen && (
                    <svg className={styles.modalContainer_arrow} width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.6038 1.33436C5.80395 1.07436 6.19605 1.07436 6.3962 1.33436L11.2926 7.695C11.5457 8.02379 11.3113 8.5 10.8964 8.5H1.10358C0.688658 8.5 0.454275 8.02379 0.707374 7.695L5.6038 1.33436Z" fill="#7362BC" stroke="#7362BC"/>
                    </svg>
                )}
                <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <p>Смена пользователя</p>
                    <ul className={styles.userList}>
                        {users.map(user => (
                            <li
                                className={`${styles.userList__item} ${user.name === selectedUser.name ? styles.selectedUser : ''}`}
                                key={user.name}
                                onClick={() => handleUserChange(user)}
                            >
                                <img className={styles.userList__img} src={user.avatar} alt={user.name} />
                                <p className={styles.userList__user}>
                                    {user.name}
                                    {user.name === selectedUser.name && (
                                        <span className={styles.currentUserTag}>(Это вы)</span>
                                    )}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <NavLink
                        to={'#'}
                        className={styles.logoutButton}
                    >
                        Выход
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4445 8.44253L20.0019 12L16.4445 15.5575" stroke="#008AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.33191 12L20.0034 12" stroke="#008AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.55432 3.99666C5.58958 3.99666 3.99684 5.5894 3.99684 7.55414L3.99684 16.4458C3.99684 18.4106 5.58958 20.0033 7.55432 20.0033" stroke="#008AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </NavLink>
                </CustomModal>
            </div>
        </header>
    );
}

export default AppHeader;





