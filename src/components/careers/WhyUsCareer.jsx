import React from "react"
import styles from "./WhyUsCareer.module.scss"
import Card from "../Card"
import orders from "../../../public/whyUsCareer/Fascinating.svg"
import managers from "../../../public/whyUsCareer/friendly.svg"
import instructions from "../../../public/whyUsCareer/clear_instructions.svg"
import communication from "../../../public/whyUsCareer/communication.svg"
import career from "../../../public/whyUsCareer/growth.svg"
import onTime from "../../../public/whyUsCareer/payment.svg"
import { useTranslation } from "next-i18next"

const WhyUsCareer = () => {
  const { t } = useTranslation("career")
  return (
    <section className={styles.whyUsCareer}>
      <div className={styles.whyUsCareer__container}>
        <h1 className={styles.title}>{t("whyUs.title")}</h1>
        <div className={styles.cards}>
          <Card
            icon={orders}
            title={t("whyUs.cards.orders.title")}
            text={t("whyUs.cards.orders.text")}
          />
          <Card
            icon={managers}
            title={t("whyUs.cards.managers.title")}
            text={t("whyUs.cards.managers.text")}
          />
          <Card
            icon={instructions}
            title={t("whyUs.cards.instructions.title")}
            text={t("whyUs.cards.instructions.text")}
          />
          <Card
            icon={communication}
            title={t("whyUs.cards.communication.title")}
            text={t("whyUs.cards.communication.text")}
          />
          <Card
            icon={career}
            title={t("whyUs.cards.career.title")}
            text={t("whyUs.cards.career.text")}
          />
          <Card
            icon={onTime}
            title={t("whyUs.cards.onTime.title")}
            text={t("whyUs.cards.onTime.text")}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyUsCareer
