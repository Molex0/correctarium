import React, { useState, useContext, useEffect } from "react"
import styles from './ServiceCard.module.scss'
import { ManagedUI } from "../order/Managed"

const SeviceCard = ({title, subtitle ,text, btn, price, priceFor}) => {
  const { openModal, setOpenModal } = useContext(ManagedUI)
  const priceArr = price.split(' ')

  return (
    <section className={subtitle ? styles.cardDown: styles.card}>
      <div >
        <h3 className={styles.title}>{title}</h3>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <p className={styles.text}>{text}</p>
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className={styles.btn}
        >
          {btn}
        </button>
      </div>
      <div className={styles.price}>
        <span>{priceArr[0]}</span> {priceArr[1]}
        <div className={styles.priceFor}>{priceFor}</div>
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className={styles.mob_btn}
        >
          {btn}
        </button>
      </div>
      
    </section>
  )
}

export default SeviceCard