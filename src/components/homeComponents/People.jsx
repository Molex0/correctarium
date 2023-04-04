import React from "react"
import styles from "./People.module.scss"
import { people } from "../../../public/data"
import Testimonial from "../Testimonial"
import { useState } from "react"

const People = () => {
  const [i, setI] = useState(0)
  const [side, setSide] = useState(true)

  const prevTestimonialHandler = () => {
    setI((prev) => prev - 1)
    if (i <= 0) {
      setI(people.length - 1)
    }
  }
  const nextTestimonialHandler = () => {
    setI((prev) => prev + 1)
    if (i >= people.length - 1) {
      setI(0)
    }
  }
  return (
    <section className={styles.people}>
      <div className={styles.people__container}>
        {people.map(
          ({ img, name, facebook, text, company, link, since }, index) => {
            return (
              <div  key={index}className={index === i ? styles.active : styles.hidden}>
              <Testimonial
                key={index}
                side={side}
                img={img}
                name={name}
                facebook={facebook}
                text={text}
                company={company}
                link={link}
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
