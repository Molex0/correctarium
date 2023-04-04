import React from 'react'
import styles from './CustomerList.module.scss'
import { useTranslation } from "next-i18next"
import { fullListComp } from '../../../public/data'

const CustomerList = () => {
  const { t } = useTranslation("companies")
  const list = fullListComp.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className={styles.customerList}>
      <div className={styles.customerList__container}>
        <h1 className={styles.title}>{t("list.title")}</h1>
        <h3 className={styles.subtitle}>{t("list.subtitle")}</h3>
        <div className={styles.list}>
          {list.map(({name,link},index) => {
            return <a className={styles.link} key={index} href={link} target='_blank'>{name}</a>
          })}
        </div>
      </div>
    </section>
  )
}

export default CustomerList