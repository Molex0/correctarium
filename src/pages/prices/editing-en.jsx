import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Prices from "@/components/prices/Prices"
import SeviceCard from "@/components/prices/SeviceCard"
import { useTranslation } from "next-i18next"
import styles from "../../styles/ProofReading.module.scss"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "prices"])),
    },
  }
}

const Editing = () => {
  const { t } = useTranslation("prices")
  return (
    <div className={styles.prices}>
    <Prices/>
    <SeviceCard
        title={t("en.card1.title")}
        subtitle={t("en.card1.subtitle")}
        text={t("en.card1.text")}
        btn={t("en.card1.btn")}
        price={t("en.card1.price")}
        priceFor={t("en.card1.priceFor")}
      />
      <SeviceCard
        subtitle={t("en.card2.subtitle")}
        text={t("en.card2.text")}
        btn={t("en.card2.btn")}
        price={t("en.card2.price")}
        priceFor={t("en.card2.priceFor")}
      />
    </div>
  )
}

export default Editing
