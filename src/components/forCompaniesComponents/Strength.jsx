import React from "react"
import styles from "./Strength.module.scss"
import Image from "next/image"
import heart from "../../../public/trust_heart.webp"
import { useTranslation } from "next-i18next"

const Stregth = () => {
  const { t } = useTranslation("companies")
  const char = t("strength.char").split(";")
  return (
    <section className={styles.strength}>
      <div className={styles.strength__container}>
          <h1 className={styles.title}>{t("strength.title")}</h1>
          <div className={styles.comp_table}>
            {char.map((name, index) => {
              return (
                <span className={styles.char} key={index}>
                  {name}
                </span>
              )
            })}
          </div>
        </div>
    </section>
  )
}

export default Stregth
