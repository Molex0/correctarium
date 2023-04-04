import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import MainPage from "../components/forCompaniesComponents/MainPage"
import WhyUs from "@/components/forCompaniesComponents/WhyUs"
import Stregth from "@/components/forCompaniesComponents/Strength"
import BecomeCustomer from "@/components/forCompaniesComponents/BecomeCustomer"
import CustomerList from "@/components/forCompaniesComponents/CustomerList"
import Mission from "@/components/forCompaniesComponents/Mission"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "companies"])),
    },
  }
}

const Companies = () => {
  return (
    <>
      <MainPage />
      <WhyUs/>
      <Stregth/>
      <BecomeCustomer/>
      <CustomerList/>
      <Mission/>
    </>
  )
}

export default Companies
