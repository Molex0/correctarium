import React from "react"
import styles from "./Brands.module.scss"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { compImages } from "../../../public/data"

const Brands = () => {
  const { t } = useTranslation("home")
  return (
    <section className={styles.brands}>
      <div className={styles.brands__container}>
        <h3 className={styles.title}>{t("home.brands.title")}</h3>
        <div className={styles.logos__container}>
          {compImages.map((p, index) => 
          <div key={index} className={styles.logo_block}>
            <Image className={styles.logo} src={p} alt="brand-logo" fill/>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Brands
