import React from "react"
import { AlignLeft, MessageSquare, User } from "react-feather"
import ButtonFunction from "../../helper/buttonFunction"

const ButtonArea = (props) => {

    const arrayOfModalTypes = [ "ANNOUNCEMENT", "PROPOSAL", "COMPLAIN", "NEWS" ]

    const openModal = (type) => {
        for(let i = 0; i < arrayOfModalTypes.length; i++) {
            if(type != arrayOfModalTypes[i])
                document.getElementById(`${type.toLowerCase()}-modal`).style.display = "none"
        }
        document.getElementById(`${type.toLowerCase()}-modal`).style.display = "block"
    }

    return (
        <div className="container mx-auto md:w-2/5 w-4/5 md:py-16 py-4">
            <div className="flex flex-col items-center">
                <div className="flex md:h-40 w-full h-36 my-2 justify-center">
                    <button 
                        className="flex flex-col justify-center items-center h-full md:w-2/3 w-1/2 mx-2 border-2 border-gray-900" 
                        onClick={() => openModal("PROPOSAL")}
                    >
                        <MessageSquare className="my-1" size={40}/>
                        <h5 className="text-2xl my-1">Proposal</h5>
                    </button>
                    <button 
                        className="flex flex-col justify-center items-center h-full md:w-1/3 w-1/2 mx-2 border-2 border-gray-900" 
                        onClick={() => openModal("COMPLAIN")}
                    >
                        <AlignLeft className="my-1" size={40}/>
                        <h5 className="text-2xl my-1">Complain</h5>
                    </button>
                </div>
                {ButtonFunction(props.clearance, props.position, openModal)}
            </div>
        </div>
    )
}

export default ButtonArea