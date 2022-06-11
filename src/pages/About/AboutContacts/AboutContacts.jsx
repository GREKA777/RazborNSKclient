import React, {useEffect} from 'react';
import styles from './AboutContacts.module.css'
const AboutContacts = () => {
    useEffect(() => {
        let script = document.createElement('script');
        script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A818ddd50a55cbf0df4d61e2356ec812c1185901f57f24f23cf4332d296918cf5&amp;width=400&amp;height=300&amp;lang=ru_RU&amp;scroll=true";
        document.getElementById('yamap').replaceWith(script);
    }, [])
    return (
        <div className={styles.allContacts}>
            <div className={styles.aboutContactsHead}>Контактная информация</div>
            <div className={styles.aboutContactsTextAll}>
            <div>
            <div className={styles.aboutContactsText}>Номер мобильного телефона:</div>
            <div className={styles.aboutContactsText}>WhatsApp, Telegram:</div>
            <div className={styles.aboutContactsText}>Почта:</div>
            <div className={styles.aboutContactsText}>Часы работы:</div>
            <div className={styles.aboutContactsText}>Офис в Новосибирске:</div>
            </div>
            <div>
                <div className={styles.aboutContactsTextt}>+7 923 777 06 08</div>
                <div className={styles.aboutContactsTextt}>+7 923 777 06 08</div>
                <div className={styles.aboutContactsTextt}>razbornskavto@yandex.ru</div>
                <div className={styles.aboutContactsTextt}>пн-пт: 9:00-21:00, сб-вс: 11:00-21:00</div>
                <div className={styles.aboutContactsTextt}>г. Новосибирск, р-н Кировский, ул. Северный проезд, д. 7, оф.2</div>
            </div>
            </div>
            <div className={styles.map}>
                <div id={"yamap"} ></div>
            </div>
        </div>
    );
};

export default AboutContacts;