import React, { useContext } from "react"
import styles from "./Translation.module.scss"
import { useTranslation } from "next-i18next"
import { ManagedUI } from "../order/Managed"

const Translation = () => {
  const { t } = useTranslation("home")
  const { openModal, setOpenModal } = useContext(ManagedUI)
  return (
    <section className={styles.translation}>
      <div className={styles.translation__container}>
        <h3 className={styles.title}>{t("home.translation.title")}</h3>
        <p className={styles.text}>{t("home.translation.text")}</p>
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className={styles.btn}
        >
          {t("home.translation.btn")}
        </button>
      </div>
    </section>
  )
}

export default Translation
