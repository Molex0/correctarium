import React from "react"
import styles from "./WhyUs.module.scss"
import Card from "../Card"
import official from "../../../public/whyUs/Officially.svg"
import word from "../../../public/whyUs/keepWord.svg"
import fast from "../../../public/whyUs/fast.svg"
import available from "../../../public/whyUs/available.svg"
import good from "../../../public/whyUs/weGood.svg"
import records from "../../../public/whyUs/records.svg"
import { useTranslation } from "next-i18next"

const WhyUs = () => {
  const { t } = useTranslation("companies")
  return (
    <section className={styles.whyUs}>
      <div className={styles.whyUs__container}>
        <h1 className={styles.title}>{t("whyUs.title")}</h1>
        <div className={styles.cards}>
          <Card
            icon={official}
            title={t("whyUs.cards.official.title")}
            text={t("whyUs.cards.official.text")}
          />
          <Card
            icon={word}
            title={t("whyUs.cards.word.title")}
            text={t("whyUs.cards.word.text")}
          />
          <Card
            icon={fast}
            title={t("whyUs.cards.fast.title")}
            text={t("whyUs.cards.fast.text")}
          />
          <Card
            icon={available}
            title={t("whyUs.cards.available.title")}
            text={t("whyUs.cards.available.text")}
          />
          <Card
            icon={good}
            title={t("whyUs.cards.good.title")}
            text={t("whyUs.cards.good.text")}
          />
          <Card
            icon={records}
            title={t("whyUs.cards.records.title")}
            text={t("whyUs.cards.records.text")}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyUs
