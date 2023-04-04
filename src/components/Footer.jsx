import React from "react"
import Link from "next/link"
import styles from "../styles/Footer.module.scss"
import logo from "../../public/footer_logo.png"
import Image from "next/image"
import { useTranslation } from "next-i18next"


const Footer = () => {
  const { t } = useTranslation("common")
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.rights}>
          <Link className={styles.terms} href="/termsOfUse">{t("footer.terms")}</Link>
          <p className={styles.p}>© Correctarium</p>
          <p className={styles.p}>2015-2023</p>
        </div>
        <Image className={styles.logo} src={logo} alt="footer-logo" />
        <div className={styles.contact}>
          <p className={styles.p}>{t("footer.contact")}:</p>
          <a className={styles.email} href="mailto:manager@correctarium.com">manager@correctarium.com</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
