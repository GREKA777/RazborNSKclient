import React from 'react';
import styles from './MainAbout.module.css'
import mainaboutt from '../../../assets/mainaboutt.jpg'
import speed from '../../../assets/speed.png'
import secure from '../../../assets/secure.png'
import finger from '../../../assets/finger.png'
import lowmoney from '../../../assets/lowmoney.png'

const MainAbout = () => {
    return (
        <div>
            <h2 className={styles.mainAboutHead}>Почему мы?</h2>
            <div className={styles.grid}>
                <img src={mainaboutt} alt="" className={styles.mainAboutPicture}/>

                <div className={styles.gridd}>
                    <div className={styles.centergrids}>
                        <img src={speed} alt=""/>
                        <span>Быстро</span>
                    </div>
                    <div className={styles.centergrids}>
                        <img src={secure} alt=""/>
                        <span>Надёжно</span>
                    </div>
                    <div className={styles.centergrids}>
                        <img src={finger} alt=""/>
                        <span>Качественно</span>
                    </div>
                    <div className={styles.centergrids}>
                        <img src={lowmoney} alt=""/>
                        <span>Не дорого</span>
                    </div>
                </div>
            </div>
            <div className={styles.textAboutAll}>
            <div className={styles.textAbout}>
                Быстро: <p>Наши сотрудники - профессионалы, каждый выполняет свою работу быстро и качественно. Все автозапчасти, которых нет в наличии, проступают на наши склады в течении двух недель. После вашего заказа, в течении 30 минут он уже будет собран и готов к доставке или получению прямиком со склада.</p>
            </div>
            <div className={styles.textAbout}>
                Надёжно: <p>Полученные в результате демонтажа автомобиля детали проходят тщательный осмотр с целью выявления различных дефектов и их отбраковки. После строгого отбора запчасти маркируют, тщательно упаковывают и отправляют в сухие и хорошо проветриваемые склады компании.</p>
            </div>
            <div className={styles.textAbout}>
                Качественно: <p>Большой опыт работы на японском и российском автомобильном рынке, высокий профессионализм наших сотрудников, отлаженная система доставки и строгий контроль гарантируют высокое качество предлагаемых автозапчастей.</p>
            </div>
            <div className={styles.textAbout}>
                Не дорого: <p>Наши цены, не зависят от доллара. Цены фиксированные и меняются они каждый сезон. Стоимость автозапчастей всегда ниже рыночных, что может увидеть каждый пользователь.</p>
            </div>
            </div>
        </div>
    );
};

export default MainAbout;