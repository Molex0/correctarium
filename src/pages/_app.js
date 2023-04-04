import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { appWithTranslation } from "next-i18next"
import "@/styles/globals.scss"
import { Montserrat } from "next/font/google"
import { ManagedUIProvider } from "@/components/order/Managed"

const font = Montserrat({
  weight: ["100", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
})

const App = ({ Component, pageProps }) => {
  return (
    <ManagedUIProvider>
      <main className={font.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ManagedUIProvider>
  )
}

export default appWithTranslation(App)
