import React from "react"
import styles from "./TestimonialNoPhoto.module.scss"
import { useTranslation } from "next-i18next"


const Testimonial = ({name, text, since, className }) => {
  const { t } = useTranslation("career")
  return (
    <div className={`${styles.testimonial} ${className}`}>
      <div className={styles.text}>
        <p className={styles.facebook}>
          {t(name)}
        </p>
        <p className={styles.since}>{t(since)}</p>
        <p className={styles.paragraph}>{t(text)}</p>
      </div>
    </div>
  )
}

export default Testimonial