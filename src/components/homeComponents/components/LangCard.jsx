import React from 'react'
import styles from "./LangCard.module.scss"

const LangCard = ({language, text}) => {
  return (
    <div className={styles.langCard}>
      <h4 className={styles.title}>{language}</h4>
      <p className={styles.parag}>{text}</p>
    </div>
  )
}

export default LangCard