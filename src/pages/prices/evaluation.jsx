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

const Evaluation = () => {
  const { t } = useTranslation("prices")
  return (
    <div className={styles.prices}>
      <Prices />
      <SeviceCard
        title={t("eval.title")}
        text={t("eval.text")}
        btn={t("eval.btn")}
        price={t("eval.price")}
        priceFor={t("eval.priceFor")}
      />
    </div>
  )
}

export default Evaluation
