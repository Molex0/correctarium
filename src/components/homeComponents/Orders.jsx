import styles from "./Orders.module.scss"
import { useTranslation } from "next-i18next"
import React, {useContext} from "react"
import LangCard from "./components/LangCard"
import { ManagedUI } from "../order/Managed"

const Orders = () => {
  const { t } = useTranslation("home")
  const { openModal, setOpenModal } = useContext(ManagedUI)

  return (
    <section className={styles.order}>
      <div className={styles.container_back}>
        <h1 className={styles.title}>{t("home.order.title")}</h1>
        <p className={styles.subtitle}>{t("home.order.subtitle")}</p>
        <button
          onClick={() => {
            setOpenModal(true)
          }}
          className={styles.button}
        >
          {t("home.order.btn")}
        </button>
        <div className={styles.cards}>
          <LangCard
            language={t("home.order.langCard.UKR")}
            text={t("home.order.langCard.UKR-text")}
          />
          <LangCard
            language={t("home.order.langCard.ENG")}
            text={t("home.order.langCard.ENG-text")}
          />
          <LangCard
            language={t("home.order.langCard.RU")}
            text={t("home.order.langCard.RU-text")}
          />
        </div>
      </div>
    </section>
  )
}

export default Orders
