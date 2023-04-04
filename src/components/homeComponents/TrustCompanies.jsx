import React from "react"
import styles from "./TrustCompanies.module.scss"
import Image from "next/image"
import heart from "../../../public/trust_heart.webp"
import { useTranslation } from "next-i18next"
import { companies } from "../../../public/data"

const TrustCompanies = () => {
  const { t } = useTranslation("home")
  return (
    <section className={styles.trustCompanies}>
      <div className={styles.trustCompanies__container}>
        <Image className={styles.heart} src={heart} alt="heart" />
        <div className={styles.companies__container}>
          <h1 className={styles.title}>{t("home.trust.title")}</h1>
          <div className={styles.comp_table}>
            {companies.map(({ name, link },index) => {
              return <a className={styles.link} key={index} href={link} target="_blank">{name}</a>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustCompanies
