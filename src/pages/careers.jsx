import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import Always from "../components/careers/Always"
import WhyUsCareer from "@/components/careers/WhyUsCareer"
import Working from "@/components/careers/Working"
import People from "@/components/careers/People"
import PartOfTeam from "@/components/careers/PartOfTeam"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "career"])),
    },
  }
}

const Companies = () => {
  const { t } = useTranslation("career")
  return (
    <>
      <Always />
      <WhyUsCareer />
      <Working />
      <People/>
      <PartOfTeam/>
    </>
  )
}

export default Companies
