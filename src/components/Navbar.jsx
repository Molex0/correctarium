import React, { useState, useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import Link from "next/link"
import Image from "next/image"
import logo from "../../public/logo.svg"
import arrow from "../../public/arrowDown.svg"
import burger from "../../public/burger.svg"
import cross from "../../public/cross.svg"
import styles from "../styles/Navbar.module.scss"
import { ManagedUI } from "./order/Managed"
import Modal from "./order/Modal"



const Navbar = () => {
  const router = useRouter()
  const { t } = useTranslation("common")
  const [burgOpened, setBurgOpened] = useState(false)
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const [language, setLanguage] = useState(
    router.locale === "ua" ? "UKR" : "ENG"
  )
  const { openModal, setOpenModal } = useContext(ManagedUI)

  useEffect(() => {
    burgOpened || openModal
      ? (document.body.style.position = "fixed") &&
        (document.body.style.margin = "auto")&&
        (document.body.style.overflow = "visible")
      : (document.body.style.position = "relative")&&
      (document.body.style.overflow = "hidden")
  }, [burgOpened, openModal])
  return (
    <header className={burgOpened ? styles.header__opened : styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="logo" />
        </Link>

        <Image
          className={styles.burger}
          onClick={() => setBurgOpened(!burgOpened)}
          src={burgOpened ? cross : burger}
          alt="burger"
        />

        <div className={styles.right}>
          <Link
            href="/forcompanies"
            className={
              router.pathname == "/forcompanies" ? styles.activeLink : ""
            }
            onClick={() => setBurgOpened(false)}
          >
            {t("header.companies")}
          </Link>
          <Link
            href="/prices/proofreading"
            className={
              router.pathname.includes("/prices") ? styles.activeLink : ""
            }
            onClick={() => setBurgOpened(false)}
          >
            {t("header.services")}
          </Link>
          <Link
            href="/careers"
            className={router.pathname == "/careers" ? styles.activeLink : ""}
            onClick={() => setBurgOpened(false)}
          >
            {t("header.careers")}
          </Link>
          <Link
            rel="nofollow"
            href="https://blog.correctarium.com/"
            target="_blank"
            onClick={() => setBurgOpened(false)}
          >
            {t("header.blog")}
          </Link>
          <p
            onClick={() => {
              setOpenModal(true)
              setBurgOpened(false)
            }}
            className={styles.modal}
          >
            {t("header.order")}
          </p>
          {openModal && <Modal />}
          <div className={styles.languages}>
            <div
              className={styles.lang_pick}
              onClick={() => setIsOpenLanguage(!isOpenLanguage)}
            >
              {language}
              <Image
                className={isOpenLanguage ? styles.arrowUp : styles.arrowDown}
                width={8}
                height={8}
                src={arrow}
                alt="arrow"
              />
            </div>
            <div className={isOpenLanguage ? styles.lang_active : styles.lang}>
              <ul>
                <li
                  onClick={() => {
                    setLanguage("UKR")
                    setIsOpenLanguage(false)
                  }}
                >
                  <Link
                    href={router.pathname}
                    locale="ua"
                    className={
                      router.locale === "ua" ? styles.activeLocale : ""
                    }
                  >
                    UKR
                  </Link>
                </li>
                <li
                  onClick={() => {
                    setLanguage("ENG")
                    setIsOpenLanguage(false)
                  }}
                >
                  <Link
                    href={router.pathname}
                    locale="en"
                    className={
                      router.locale === "en" ? styles.activeLocale : ""
                    }
                  >
                    ENG
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
