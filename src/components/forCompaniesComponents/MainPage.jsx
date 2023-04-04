import React, { useState, useContext, useEffect } from "react"
import styles from "./MainPage.module.scss"
import { useTranslation } from "next-i18next"
import { ManagedUI } from "../order/Managed"
import Modal from "../order/Modal"

const MainPage = () => {
  const { t } = useTranslation("companies")
  const { openModal, setOpenModal } = useContext(ManagedUI)
  useEffect(() => {
    openModal
      ? (document.body.style.position = "fixed") &&
        (document.body.style.margin = "auto")
      : (document.body.style.position = "relative")
  }, [openModal])
  return (
    <section className={styles.mainPage}>
      <div className={styles.mainPage__container}>
        <h1 className={styles.title}>{t("mainPage.title")}</h1>
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className={styles.btn}
        >
          {t("mainPage.btn")}
        </button>
        <div className={styles.article}>
          <p className={styles.text}>{t("mainPage.text1")}</p>
          <p className={styles.text}>{t("mainPage.text2")}</p>
        </div>
      </div>
    </section>
  )
}

export default MainPage
