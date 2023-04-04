import React from 'react'
import styles from "./Card.module.scss"


const Card = ({title, points}) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.points}>{points}</p>
    </div>
  )
}

export default Card