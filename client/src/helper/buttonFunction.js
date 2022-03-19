import React from "react"
import { FolderMinus, List, Trash, UserX } from "react-feather"

const ButtonFunction = (clearance, position, openModal) => {
    
    switch(clearance.toLowerCase()){
        case "board":
            switch(position.toLowerCase()){
                case "president":
                    return (
                        <div className="w-full md:px-0 px-2 flex md:flex-row flex-col md:h-40 h-36 my-2">
                            <button 
                                className="flex flex-col justify-center items-center h-full md:w-1/3 w-full md:mx-2 md:my-0 my-2 border-2 border-gray-900"
                                onClick={() => openModal("KICK")}
                            >
                                <UserX className="my-1" size={40}/>
                                <h5 className="text-2xl my-1">Kick</h5>
                            </button>
                            <button 
                                className="flex flex-col justify-center items-center h-full md:w-2/3 w-full md:mx-2 md:my-0 my-2 md:py-0 py-6 border-2 border-gray-900"
                                onClick={() => openModal("ANNOUNCEMENT")}
                            >
                                <h5 className="text-2xl my-1">Create Announcement</h5>
                            </button>
                        </div>
                    )
                case "gensec":
                    return (
                        <div className="w-full md:px-0 px-2 flex md:h-40 h-36 my-2">
                            <button 
                                className="flex flex-col justify-center items-center h-full w-full md:mx-2 md:my-0 my-2 md:py-0 py-6 border-2 border-gray-900"
                                onClick={() => openModal("ANNOUNCEMENT")}
                            >
                                <h5 className="text-2xl my-1">Create Announcement</h5>
                            </button>
                        </div>
                    )
                case "hr":
                    return (
                        <div className="w-full px-2 flex flex-col my-1">
                            <button 
                                className="flex flex-col justify-center items-center md:h-40 h-32 w-full my-2 md:py-0 py-6 border-2 border-gray-900"
                                onClick={() => openModal("ANNOUNCEMENT")}
                            >
                                <h5 className="text-2xl my-1">Create Announcement</h5>
                            </button>
                            <div className="flex w-full md:px-0 flex md:flex-row flex-col md:h-40 h-36 my-2">
                                <button 
                                    className="flex flex-col justify-center items-center h-full md:w-1/3 w-full md:mr-1 md:my-0 my-2 border-2 border-gray-900"
                                    onClick={() => openModal("DELETE_COMPLAIN")}
                                >
                                    <Trash className="my-1" size={40}/>
                                    <h5 className="text-2xl my-1">Delete Complains</h5>
                                </button>
                                <button 
                                    className="flex flex-col justify-center items-center h-full md:w-1/3 w-full md:mx-3 md:my-0 my-2 border-2 border-gray-900"
                                    onClick={() => openModal("COMPLAIN")}
                                >
                                    <List className="my-1" size={40}/>
                                    <h5 className="text-2xl my-1">Complains</h5>
                                </button>
                                <button 
                                    className="flex flex-col justify-center items-center h-full md:w-1/3 w-full md:ml-1 md:my-0 my-2 border-2 border-gray-900"
                                    onClick={() => openModal("KICK")}
                                >
                                    <UserX className="my-1" size={40}/>
                                    <h5 className="text-2xl my-1">Kick</h5>
                                </button>
                            </div>
                        </div>
                    )
                case "webdev":
                    return (
                        <div className="w-full md:px-2 flex flex-col my-1">
                            <button 
                                className="flex flex-col justify-center items-center h-40 w-full my-2 md:py-0 py-6 border-2 border-gray-900"
                                onClick={() => openModal("ANNOUNCEMENT")}
                            >
                                <h5 className="text-2xl my-1">Create Announcement</h5>
                            </button>
                            <div className="flex w-full flex md:flex-row flex-col md:h-40 h-36 my-2">
                                <button className="flex flex-col justify-center items-center h-full md:w-1/2 w-full md:mr-1 md:my-0 my-2 border-2 border-gray-900">
                                    <Trash className="my-1" size={40}/>
                                    <h5 className="text-2xl my-1">Delete News Articles</h5>
                                </button>
                                <button className="flex flex-col justify-center items-center h-full md:w-1/2 w-full md:ml-3 md:my-0 my-2 border-2 border-gray-900">
                                    <FolderMinus className="my-1" size={40}/>
                                    <h5 className="text-2xl my-1">Logs</h5>
                                </button>
                            </div>
                        </div>
                    )
            }
    }
}

export default ButtonFunction