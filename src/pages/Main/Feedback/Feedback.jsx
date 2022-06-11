import React, {useEffect, useState} from 'react';
import styles from './Feedback.module.css'
import {useSelector} from "react-redux";

const Feedback = () => {
    const reviews = useSelector(state => state.feedbackk.listFeedback)
  const [selectedReview, setSelectedReview] = useState({id: 6, text: '6'})
  const leftClick = () => {
    reviews.map(rev => {
      if (rev.id === (selectedReview.id - 1)) {
        setSelectedReview(rev)
      }
    })
  }
  const rightClick = () => {
    reviews.map(rev => {
      if (rev.id === (selectedReview.id + 1)) {
        setSelectedReview(rev)
      }
    })
  }
    useEffect(() => {
        setSelectedReview(reviews[3])
    },[])
  return (
    <div className={styles.backg}>
      <h1 className={styles.feedback}>Отзывы</h1>
      <div className={styles.maindivfeedback}>
        <div className={styles.leftBlock}>
          <div className={styles.left}></div>
          {reviews.map(rew => {
            if (rew.id < selectedReview.id) {
              return (
                <div className={styles.left}>
                  <h2 className={styles.nameFeedbackB}>{rew.name}</h2>
                  <p className={styles.textFeedbackV}>{rew.text}</p>
                </div>
              )
            }
          })}
        </div>
        <div className={styles.mainBlock} >
            {selectedReview.id !== reviews[0].id?
                <button className={styles.buttonLeft} onClick={leftClick}><span
                    className="material-icons-outlined">chevron_left</span></button>:
                <button className={styles.buttonLeft} onClick={leftClick} style={{opacity: 0, cursor: "default"}}><span
                    className="material-icons-outlined">chevron_left</span></button>
            }
          <div className={styles.center } id={'center'}>
            <h2 className={styles.nameFeedback}>{selectedReview.name}</h2>
            <p className={styles.textFeedback}>{selectedReview.text}</p>
          </div>
            {selectedReview.id !== reviews[6].id?
          <button className={styles.buttonRight} onClick={rightClick}><span className="material-icons-outlined">chevron_right</span></button>:
                <button className={styles.buttonRight} onClick={rightClick} style={{opacity: 0, cursor: "default"}}><span className="material-icons-outlined">chevron_right</span></button>
            }
            </div>
        <div className={styles.rightBlock}>
          {reviews.map(rew => {
            if (rew.id > selectedReview.id) {
              return (
                <div className={styles.right}>
                  <h2 className={styles.nameFeedbackB}>{rew.name}</h2>
                  <p className={styles.textFeedbackS}>{rew.text}</p>
                </div>
              )
            }
          })}
          <div className={styles.right}>
          <h2 className={styles.nameFeedbackB}></h2>
          <p className={styles.textFeedbackS}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;