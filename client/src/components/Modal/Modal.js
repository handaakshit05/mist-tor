import React from "react"
import "./Modal.css"
import ModalFunction from "../../helper/modalFunction"

const Modal = (type) => {

    return (
        <div className="w-screen fixed inset-0 flex justify-center items-center md:overflow-hidden overflow-scroll" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
            <div className="w-screen md:w-3/4 md:m-0 mx-4 mt-20 rounded-xl modal-trans" style={{ backgroundColor: "#3C3644" }}>
                {ModalFunction(type)}
            </div>
        </div>
    )
}

export default Modal