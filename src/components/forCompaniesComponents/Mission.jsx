import React from "react"
import styles from "./Mission.module.scss"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import Image from "next/image"
import val from "../../../public/people/Kozlova.png"

const Mission = () => {
  const { t } = useTranslation("companies")
  return (
    <section className={styles.mission}>
      <div className={styles.mission__container}>
        <h1 className={styles.title}>{t("mission.title")}</h1>
        <div className={styles.text}>
          <p className={styles.p1}>{t("mission.p1")}</p>
          <p className={styles.p2}>{t("mission.p2")}</p>
        </div>
        <div className={styles.contact}>
          <div className={styles.card}>
            <Image className={styles.avatar} src={val} alt="Valentina" />
            <div className={styles.info_text}>
              <h4><a
                className={styles.link}
                target="_blank"
                href="https://www.facebook.com/valentyna.kozlova/"
              >
                {t("mission.name")}
              </a></h4>
              <p className={styles.position}>{t("mission.position")}</p>
            </div>
          </div>
          <Link href="mailto:mail@correctarium.com">
            <button className={styles.btn}>{t("mission.contact")}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Mission
