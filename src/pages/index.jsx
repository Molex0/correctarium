import Orders from "@/components/homeComponents/Orders"
import Translation from "@/components/homeComponents/Translation"
import WhyLoveUs from "@/components/homeComponents/WhyLoveUs"
import ProofReading from "@/components/homeComponents/ProofReading"
import TrustCompanies from "@/components/homeComponents/TrustCompanies"
import People from "@/components/homeComponents/People"
import Brands from "@/components/homeComponents/Brands"
import Sharing from "@/components/homeComponents/Sharing"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  }
}

const Home = () => {
  return (
  <div>
    <Orders/>
    <Translation/>
    <WhyLoveUs/>
    <ProofReading/>
    <TrustCompanies/>
    <People/>
    <Brands />
    <Sharing/>
  </div>
  )
}
export default Home
