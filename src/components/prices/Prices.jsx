import React from "react"
import styles from "./Prices.module.scss"
import { useRouter } from "next/router"
import Link from "next/link"
import { useTranslation } from "next-i18next"

const Prices = () => {
  const { t } = useTranslation("prices")
  const router = useRouter()
  return (
    <section className={styles.services}>
      <div className={styles.services__container}>
        <h1 className={styles.title}>{t("prices.title")}</h1>
        <div className={styles.nav}>
          <Link href="/prices/proofreading" className={
              router.pathname == "/prices/proofreading" ? styles.activeLink : styles.link
            }>
            {t("prices.service1")}
          </Link>
          <Link href="/prices/editing-en" className={
              router.pathname == "/prices/editing-en" ? styles.activeLink : styles.link
            }>
            {t("prices.service2")}
          </Link>
          <Link href="/prices/translation" className={
              router.pathname == "/prices/translation" ? styles.activeLink : styles.link
            }>
            {t("prices.service3")}
          </Link>
          <Link href="/prices/rewriting" className={
              router.pathname == "/prices/rewriting" ? styles.activeLink : styles.link
            }>
            {t("prices.service4")}
          </Link>
          <Link href="/prices/evaluation" className={
              router.pathname == "/prices/evaluation" ? styles.activeLink : styles.link
            }>
            {t("prices.service5")}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Prices
