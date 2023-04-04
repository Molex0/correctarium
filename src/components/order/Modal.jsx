import React, { useRef, useContext } from "react"
import { createPortal } from "react-dom"
import style from "./Modal.module.scss"
import { useTranslation } from "next-i18next"
import Form from "react-bootstrap/Form"
import { ManagedUI } from "./Managed"
import cross from "../../../public/cross.svg"
import Image from "next/image"

function Modal() {
  const { t } = useTranslation("common")
  const { setOpenModal } = useContext(ManagedUI)
  const modalRef = useRef()
  const closeModal = (e) => {
    if (modalRef.current == e.target) {
      setOpenModal(false)
    }
  }
  return createPortal(
    <div className={style.modalBackground}>
      <section className={style.modal}>
        <Form className={style.form}>
          <h3 className={style.title}>{t("service.title")}</h3>
          <Form.Select aria-label="Default select example">
            <option hidden>{t("service.service")}</option>
            <option value="translation">{t("service.translation")}</option>
            <option value="proofreading">{t("service.proofreading")}</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{t("service.textarea")}</Form.Label>
            <Form.Control as="textarea" rows={8} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder={t("service.email")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder={t("service.name")} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder={t("service.comment")} />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option hidden>{t("service.language")}</option>
            <option value="URE">{t("service.URE")}</option>
            <option value="EU">{t("service.EU")}</option>
            <option value="ER">{t("service.ER")}</option>
            <option value="RU">{t("service.RU")}</option>
            <option value="UR">{t("service.UR")}</option>
          </Form.Select>
        </Form>
        <div className={style.right}>
          <Image className={style.cross}
            src={cross}
            alt="cross"
            width={40}
            height={40}
            ref={modalRef}
            onClick={(e) => closeModal(e)}
          />
          <div className={style.price}> <span>0</span> UAH</div>
          <p className={style.noOrders}>{t("service.btn")}</p>
        </div>
      </section>
    </div>,
    document.body
  )
}

export default Modal
