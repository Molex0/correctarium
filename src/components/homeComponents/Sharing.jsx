import React from "react"
import styles from "./Sharing.module.scss"
import ukr from "../../../public/Telegram_logo_UKR.svg"
import fb from "../../../public/fb.svg"
import blog from "../../../public/Blog.svg"
import link from "../../../public/icons-ico-24-external-link.svg"
import Image from "next/image"
import { useTranslation } from "next-i18next"

const Sharing = () => {
  const { t } = useTranslation("home")
  return (
    <section className={styles.sharing}>
      <div className={styles.sharing__container}>
        <h1 className={styles.title}>{t("home.sharing.title")}</h1>
        <div className={styles.links__container}>
          <a className={styles.link_block} href="https://t.me/correctariumukr" target="_blank">
            <Image className={styles.icon} src={ukr} alt="ukr"/>
            <h4 className={styles.link__title}>
              {t("home.sharing.ukrainian")} <Image className={styles.redirect__icon} src={link} alt="link" />{" "}
            </h4>
          </a>
          <a className={styles.link_block} href="https://www.facebook.com/correctarium" target="_blank">
            <Image className={styles.icon} src={fb} alt="ukr" />
            <h4 className={styles.link__title}>
              {t("home.sharing.fb")} <Image src={link} alt="link" />{" "}
            </h4>
          </a>
          <a className={styles.link_block} href="https://blog.correctarium.com/" target="_blank">
            <Image className={styles.icon} src={blog} alt="ukr" />
            <h4 className={styles.link__title}>
              {t("home.sharing.blog")} <Image src={link} alt="link" />{" "}
            </h4>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sharing
