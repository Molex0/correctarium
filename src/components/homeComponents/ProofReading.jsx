import React from "react"
import styles from "./ProofReading.module.scss"
import Image from "next/image"
import arrow from "../../../public/arrow-1.svg"
import noCall from "../../../public/no_call.png"
import time from "../../../public/one_hour.png"
import { useTranslation } from "next-i18next"

const ProofReading = () => {
  const { t } = useTranslation("home")
  return (
    <section className={styles.proofReading}>
      <div className={styles.proofReading__container}>
        <h1 className={styles.title}>
          {t("home.proofReading.title")}
        </h1>
        <div className={styles.numbers__container}>
          <div className={styles.number_block}>
            <h2 className={styles.number}>
              01 <Image className={styles.arrow} src={arrow} alt="-->" />
            </h2>
            <p>{t("home.proofReading.card01")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>
              02 <Image className={styles.arrow} src={arrow} alt="-->" />
            </h2>
            <p>{t("home.proofReading.card02")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>
              03 <Image className={styles.arrow} src={arrow} alt="-->" />
            </h2>
            <p>{t("home.proofReading.card03")}</p>
          </div>
          <div className={styles.number_block}>
            <h2 className={styles.number}>04</h2>
            <p>{t("home.proofReading.card04")}</p>
          </div>
        </div>
        <div className={styles.emoji__container}>
          <div className={styles.emoji}>
            <Image src={noCall} alt="no-call"/>
            <p className={styles.text}>{t("home.proofReading.noneed")}</p>
          </div>
          <div className={styles.emoji}>
            <Image src={time} alt="no-call"/>
            <p className={styles.text}>{t("home.proofReading.compTime")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProofReading
