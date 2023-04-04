import React from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Prices from "@/components/prices/Prices"
import SeviceCard from "@/components/prices/SeviceCard"
import styles from "../../styles/ProofReading.module.scss"
import { useTranslation } from "next-i18next"
import Router, { useRouter } from "next/router"

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "prices"])),
    },
  }
}

const ProofReading = () => {
  const { t } = useTranslation("prices")
  const router = useRouter()
  return (
    <div className={styles.prices}>
      <Prices />
      <SeviceCard
        title={t("ukru.title")}
        text={t("ukru.text")}
        btn={t("ukru.btn")}
        price={t("ukru.price")}
        priceFor={t("ukru.priceFor")}
      />
      <div className={router.locale === 'ua' ? styles.mistakesDisplay: styles.mistakes}>
        <h3 className={styles.title}>
          Під час редагування ми виправимо такі помилки:
        </h3>
        <div className={styles.group}>
          <h4 className={styles.group_title}>ОРТОГРАФІЧНІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>2-х кімнатна квартира</li>
              <li>бігборд</li>
              <li>ді-джей</li>
            </ul>
            <ul>
              <li>2-кімнатна квартира</li>
              <li>білборд</li>
              <li>диджей</li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h4 className={styles.group_title}>ЛЕКСИЧНІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>М’ясо домашньої птиці добре засвоюється.</li>
              <li>Усі без виключення прийшли на збори.</li>
              <li>Ти зробила вірний вибір.</li>
            </ul>
            <ul>
              <li>М’ясо свійської птиці добре засвоюється.</li>
              <li>Усі без винятку прийшли на збори.</li>
              <li>Ти зробила правильний вибір.</li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h4 className={styles.group_title}>ГРАМАТИЧНІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>Пасажири, оплачуйте за проїзд!</li>
              <li>Вибач мене, друже.</li>
              <li>Дмитро написав книжку за півтора роки.</li>
            </ul>
            <ul>
              <li>Пасажири, оплачуйте проїзд!</li>
              <li>Вибач мені, друже.</li>
              <li>Дмитро написав книжку за півтора року.</li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h4 className={styles.group_title}>ПУНКТУАЦІЙНІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>У цілому, він зрозумів що помилився, але не зрозумів, де.</li>
            </ul>
            <ul>
              <li>У цілому він зрозумів, що помилився, але не зрозумів де.</li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h4 className={styles.group_title}>ДРУКАРСЬКІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>
                “Ми з Петриком, - сказала вона, - любимо слухати гурт “Джинсовий
                вареник””.
              </li>
            </ul>
            <ul>
              <li>
                «Ми з Петриком, — сказала вона, — любимо слухати гурт „Джинсовий
                вареник“».
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h4 className={styles.group_title}>СТИЛІСТИЧНІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>
                Самим оптимальним рішенням буде запитати це питання в автора.
              </li>
            </ul>
            <ul>
              <li>Оптимальне вирішення — поставити це запитання авторові.</li>
            </ul>
          </div>
        </div>
        <div className={styles.group}>
          <h4 className={styles.group_title}>ЛОГІЧНІ</h4>
          <div className={styles.compare}>
            <ul>
              <li>
                Я зайняв своє місце біля вікна, аж тут пес увійшов у літак.
                Зазвичай з великими собаками на борт не пускають, а він був
                великий.
              </li>
            </ul>
            <ul>
              <li>
                Я зайняв своє місце біля вікна, аж тут у літак увійшов пес. Він
                був великий, з такими на борт зазвичай не пускають.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProofReading
