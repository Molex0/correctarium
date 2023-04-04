import React from "react"
import styles from "./Working.module.scss"
import { useTranslation } from "next-i18next"

const Working = () => {
  const { t } = useTranslation("career")
  return (
    <section className={styles.working}>
      <div className={styles.working__container}>
        <h1 className={styles.title}>{t("working.title")}</h1>
        <div className={styles.numbers__container}>
          <div className={styles.number_block}>
            <h2 className={styles.number}>01</h2>
            <p className={styles.text}>
              {t("working.step.01.text")}
              <a className={styles.link} href="mailto:mail@correctarium.com">
                {t("working.step.01.link")}
              </a>
            </p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>02</h2>
            <p className={styles.text}>{t("working.step.02")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>03</h2>
            <p className={styles.text}>{t("working.step.03")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>04</h2>
            <p className={styles.text}>{t("working.step.04")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>05</h2>
            <p className={styles.text}>{t("working.step.05")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>06</h2>
            <p className={styles.text}>{t("working.step.06")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>07</h2>
            <p className={styles.text}>{t("working.step.07")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>08</h2>
            <p className={styles.text}>{t("working.step.08")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Working
