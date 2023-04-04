import React from "react"
import styles from "./WhyLoveUs.module.scss"
import Card from "../Card"
import fork_fast from "../../../public/whyLoveUs/fork_fast.svg"
import formats from "../../../public/whyLoveUs/formats.svg"
import new_tech from "../../../public/whyLoveUs/new_tech.svg"
import on_time from "../../../public/whyLoveUs/on_time.svg"
import pros from "../../../public/whyLoveUs/pros.svg"
import specialize from "../../../public/whyLoveUs/specialize.svg"
import { useTranslation } from "next-i18next"

const WhyLoveUs = () => {
  const { t } = useTranslation("home")
  return (
    <section className={styles.whyLoveUs}>
      <div className={styles.whyLoveUs__container}>
        <h1 className={styles.title}>{t("home.whyLoveUs.title")}</h1>
        <div className={styles.cards}>
          <Card
            icon={fork_fast}
            title={t("home.whyLoveUs.cards.fast.title")}
            text={t("home.whyLoveUs.cards.fast.text")}
          />
          <Card
            icon={on_time}
            title={t("home.whyLoveUs.cards.onTime.title")}
            text={t("home.whyLoveUs.cards.onTime.text")}
          />
          <Card
            icon={specialize}
            title={t("home.whyLoveUs.cards.specialize.title")}
            text={t("home.whyLoveUs.cards.specialize.text")}
          />
          <Card
            icon={pros}
            title={t("home.whyLoveUs.cards.professional.title")}
            text={t("home.whyLoveUs.cards.professional.text")}
          />
          <Card
            icon={new_tech}
            title={t("home.whyLoveUs.cards.technology.title")}
            text={t("home.whyLoveUs.cards.technology.text")}
          />
          <Card
            icon={formats}
            title={t("home.whyLoveUs.cards.formats.title")}
            text={t("home.whyLoveUs.cards.formats.text")}
          />
        </div>
      </div>
    </section>
  )
}

export default WhyLoveUs
