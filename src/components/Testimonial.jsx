import React from "react"
import Image from "next/image"
import styles from "./Testimonial.module.scss"
import { useTranslation } from "next-i18next"


const Testimonial = ({side, img, name, facebook, text, company, link, since, className }) => {
  const { t } = useTranslation("home")
  return (
    <div className={`${styles.testimonial} ${className}`}>
      <Image src={img} className={styles.avatar} alt={name} width={230} height={230}/>
      <div className={styles.text}>
        <p className={styles.paragraph}>{t(text)}</p>
        <a className={styles.facebook} href={facebook}>
          {t(name)}
        </a>
        <a className={styles.company} href={link}>
          {t(company)}
        </a>
        <p className={styles.since}>{t(since)}</p>
      </div>
    </div>
  )
}

export default Testimonial
