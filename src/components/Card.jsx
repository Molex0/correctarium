import React from "react"
import Image from "next/image"
import styles from "./Card.module.scss"

const Card = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      <Image className={styles.icon} src={icon} alt="icon" />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default Card
