import React, { useState, useContext, useEffect } from "react"
import styles from "./Always.module.scss"
import { useTranslation } from "next-i18next"
import { ManagedUI } from "../order/Managed"


const Always = () => {
  const { t } = useTranslation("career")
  const { openModal, setOpenModal } = useContext(ManagedUI)
  return (
    <section className={styles.always}>
      <div className={styles.always__container}>
        <h1 className={styles.title}>{t("always.title")}</h1>
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className={styles.btn}
        >
          {t("always.btn")}
        </button>
        <div className={styles.article}>
          <p className={styles.text}>{t("always.text1")}</p>
          <p className={styles.text}>{t("always.text2")}</p>
        </div>
      </div>
    </section>
  )
}

export default Always
