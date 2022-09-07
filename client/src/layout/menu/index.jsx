import React from 'react';
import styles from "./menu.module.scss";
import { useTranslation } from 'react-i18next';
import {
    Link
} from "react-router-dom";

const Menu = () => {
    const student = false;
    const teacher = false;
    const object = false;
    const admin = false;
    const { t } = useTranslation();
    
    return (
        <div className={styles['menu']}>
            {/* Sinh viên */}
            {student && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('feature')} </div>
                <div className={styles['list_menu']}>
                <Link to="/" className={styles['feature_name']}>{t('projectRegistration')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('myProject')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectProgress')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectDefenseSchedule')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectPoin')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('sampleProject')}</Link>
                </div>
            </div>}

            {/* Giảng viên */}
            {teacher && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" className={styles['feature_name']}>{t('projectRegistration')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('studentList')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectDefenseSchedule')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectPoin')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('sampleProject')}</Link>
                </div>
            </div>}

            {/* Bộ môn */}
            {object && <div className={styles['menu_style']}>
                <div className={styles['menu_name']}> {t('feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" className={styles['feature_name']}>{t('studentManagement')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('teacherManagement')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectDefenseScheduleManager')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('councilManager')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectPoinManager')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('sampleProjectManager')}</Link>
                </div>
            </div>}

            {/* Khoa */}
            {admin && <div className={styles['menu_style']}>
            <div className={styles['menu_name']}> {t('feature')} </div>
                <div className={styles['list_menu']}>
                    <Link to="/" className={styles['feature_name']}>{t('statistic')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('studentManagement')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('objectManagement')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('projectDefenseScheduleManager')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('councilManager')}</Link>
                    <Link to="/" className={styles['feature_name']}>{t('sampleProjectManager')}</Link>
                </div>
            </div>}
        </div>
    )
}

export default Menu