import React from "react"
import styles from "./PartOfTeam.module.scss"
import Card from "./Components/Card"
import Link from "next/link"
import { useTranslation } from "next-i18next"

const PartOfTeam = () => {
  const { t } = useTranslation("career")
  return (
    <section className={styles.team}>
      <div className={styles.team__container}>
        <h1 className={styles.title}>{t("team.title")}</h1>
        <h3 className={styles.subtitle}>{t("team.subtitle")}</h3>
        <ul className={styles.list}>
          <li className={styles.li}>{t("team.li1")}</li>
          <li className={styles.li}>{t("team.li2")}</li>
          <li className={styles.li}>{t("team.li3")}</li>
          <li className={styles.li}>{t("team.li4")}</li>
        </ul>
      </div>
      <div className={styles.cards}>
        <Card title={t("team.card1.title")} points={t("team.card1.points")} />
        <Card title={t("team.card2.title")} points={t("team.card2.points")} />
        <Card title={t("team.card3.title")} points={t("team.card3.points")} />
        <Card title={t("team.card4.title")} points={t("team.card4.points")} />
        <Card title={t("team.card5.title")} points={t("team.card5.points")} />
      </div>
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdXvqKwjdb4INqBAwd8bg-IKGE_didavB7jDJwiwGAG9pE2tQ/viewform"
        target="_blank"
      >
        <button className={styles.btn}>{t("team.btn")}</button>
      </Link>
    </section>
  )
}

export default PartOfTeam
