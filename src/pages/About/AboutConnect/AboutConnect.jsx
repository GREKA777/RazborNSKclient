import React, {useState} from 'react';
import styles from './AboutConnect.module.css';
import {createConnect} from "../../../http/connectAPI";

const AboutConnect = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [topic, setTopic] = useState("")
    const [text, setText] = useState("")
    const send = () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("email", email)
        formData.append("topic", topic)
        formData.append("text", text)
        createConnect(formData).then(() => {
            setName("")
            setEmail("")
            setTopic("")
            setText("")
        })
    }
    return (
        <div className={styles.all}>
            <div className={styles.connectContent}>
                <h2 className={styles.connectName}>Обратная связь</h2>
                <h2 className={styles.connectText}>Вы можете задать нам вопрос, либо поделиться вашими предложениями!</h2>
                <form>
                <div>
                    <input type="text" placeholder={"Ваше имя"} onChange={t => setName(t.target.value)} value={name} className={styles.name} required/>
                    <input type="email" placeholder={"Ваше E-mail"} onChange={t => setEmail(t.target.value)} value={email} className={styles.email} required/>
                    <input type="text" placeholder={"Тема сообщения"} onChange={t => setTopic(t.target.value)} value={topic} className={styles.tema} required/>
                </div>
                <div>
                    <textarea type="text" placeholder={"Текст вопроса/предложения"} onChange={t => setText(t.target.value)} value={text} className={styles.Text} required/>
                </div>
                <button className={styles.connectButton} onClick={send}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default AboutConnect;