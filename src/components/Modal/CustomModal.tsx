import React from 'react';
import styles from './CustomModal.module.scss';

interface CustomModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children?: React.ReactNode; // children необязательны
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onRequestClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modal__content}>
                <button className={styles.modal__closeButton} onClick={onRequestClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L16 16" stroke="#7362BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L8 16" stroke="#7362BC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </button>
                {children}
            </div>
        </div>
    );
}

export default CustomModal;

