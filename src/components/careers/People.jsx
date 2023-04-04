import React from "react"
import styles from "./People.module.scss"
import { peopleNoPhoto } from "../../../public/data"
import TestimonialNoPhoto from '../TestimonialNoPhoto.jsx'
import { useState } from "react"

const People = () => {
  const [i, setI] = useState(0)
  const [side, setSide] = useState(true)

  const prevTestimonialHandler = () => {
    setI((prev) => prev - 1)
    if (i <= 0) {
      setI(peopleNoPhoto.length - 1)
    }
  }
  const nextTestimonialHandler = () => {
    setI((prev) => prev + 1)
    if (i >= peopleNoPhoto.length - 1) {
      setI(0)
    }
  }
  return (
    <section className={styles.people}>
      <div className={styles.people__container}>
        {peopleNoPhoto.map(
          ({ name, text, since }, index) => {
            return (
              <div  key={index}className={index === i ? styles.active : styles.hidden}>
              <TestimonialNoPhoto
                key={index}
                name={name}
                text={text}
                since={since}
                className={`${side ? styles.toRight: styles.toLeft}`}
              />
              </div>
            )
          }
        )}
        <div className={styles.navigation}>
          <button
            className={styles.left__btn}
            onClick={() => {
              prevTestimonialHandler()
              setSide(false)
            }}
          ></button>
          <button
            className={styles.right__btn}
            onClick={() => {
              nextTestimonialHandler()
              setSide(true)
            }}
          ></button>
        </div>
      </div>
    </section>
  )
}

export default People
