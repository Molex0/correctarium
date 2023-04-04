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

const Translation = () => {
  const { t } = useTranslation("prices")
  return (
    <div className={styles.prices}>
    <Prices/>
    <SeviceCard
        title={t("translate.card1.title")}
        subtitle={t("translate.card1.subtitle")}
        text={t("translate.card1.text")}
        btn={t("translate.card1.btn")}
        price={t("translate.card1.price")}
        priceFor={t("translate.card1.priceFor")}
      />
      <SeviceCard
      subtitle={t("translate.card2.subtitle")}
        text={t("translate.card2.text")}
        btn={t("translate.card2.btn")}
        price={t("translate.card2.price")}
        priceFor={t("translate.card2.priceFor")}
      />
      <SeviceCard
      subtitle={t("translate.card3.subtitle")}
        text={t("translate.card3.text")}
        btn={t("translate.card3.btn")}
        price={t("translate.card3.price")}
        priceFor={t("translate.card3.priceFor")}
      />
    </div>
  )
}

export default Translation
