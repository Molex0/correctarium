import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Prices from "@/components/prices/Prices"
import SeviceCard from "@/components/prices/SeviceCard"
import styles from "../../styles/ProofReading.module.scss"
import { useTranslation } from "next-i18next"


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "prices"])),
    },
  }
}

const Rewriting = () => {
  const { t } = useTranslation("prices")
  return (
    <div className={styles.prices}>
    <Prices/>
    <SeviceCard
        title={t("rewriting.card1.title")}
        subtitle={t("rewriting.card1.subtitle")}
        text={t("rewriting.card1.text")}
        btn={t("rewriting.card1.btn")}
        price={t("rewriting.card1.price")}
        priceFor={t("rewriting.card1.priceFor")}
      />
      <SeviceCard
      subtitle={t("rewriting.card2.subtitle")}
        text={t("rewriting.card2.text")}
        btn={t("rewriting.card2.btn")}
        price={t("rewriting.card2.price")}
        priceFor={t("rewriting.card2.priceFor")}
      />
      <SeviceCard
      subtitle={t("rewriting.card3.subtitle")}
        text={t("rewriting.card3.text")}
        btn={t("rewriting.card3.btn")}
        price={t("rewriting.card3.price")}
        priceFor={t("rewriting.card3.priceFor")}
      />
    </div>
  )
}

export default Rewriting
