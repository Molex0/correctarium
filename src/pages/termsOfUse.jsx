import React from "react"
import styles from "../styles/Terms.module.scss"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

const TermsOfUse = () => {
  const { t } = useTranslation("common")
  return (
    <section className={styles.terms}>
      <div className={styles.terms__container}>
        <h3 className={styles.title}>{t("terms.title")}</h3>
        <div className={styles.text__box}>
          <p className={styles.text}>{t("terms.text")}</p>
        </div>
      </div>
    </section>
  )
}

export default TermsOfUse
