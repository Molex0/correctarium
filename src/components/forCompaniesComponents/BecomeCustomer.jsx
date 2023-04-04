import React from "react"
import styles from "./BecomeCustomer.module.scss"
import { useTranslation } from "next-i18next"

const BecomeCustomer = () => {
  const { t } = useTranslation("companies")
  return (
    <section className={styles.becomeCustomer}>
      <div className={styles.becomeCustomer__container}>
        <h1 className={styles.title}>{t("customer.title")}</h1>
        <div className={styles.numbers__container}>
          <div className={styles.number_block}>
            <h2 className={styles.number}>01</h2>
            <p className={styles.text}>
              {t("customer.01")}{" "}
              <a className={styles.link} href="mailto:mail@correctarium.com">
                mail@correctarium.com
              </a>
            </p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>02</h2>
            <p className={styles.text}>{t("customer.02")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>03</h2>
            <p className={styles.text}>{t("customer.03")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>04</h2>
            <p className={styles.text}>
              {t("customer.04")}{" "}
              <a className={styles.link} href="mailto:manager@correctarium.com">
                manager@correctarium.com
              </a>
            </p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>05</h2>
            <p className={styles.text}>{t("customer.05")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>06</h2>
            <p className={styles.text}>{t("customer.06")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BecomeCustomer
