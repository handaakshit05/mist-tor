import React, { useState } from "react"
import { X } from "react-feather"
import { createProposal, makeComplain } from "../context"
import { createAnnounce } from "../context/actions"

const ModalFunction = (props) => {

    const [proposal, setProposal] = useState({
        type: "proposal",
        heading: "",
        proposal: ""
    })

    const [complain, setComplain] = useState({
        type: "complain",
        heading: "",
        complain: ""
    })

    const arrayOfStates = [proposal, complain]

    // function that closes the modal
    const closeModal = (type) => {
        document.getElementById(`${type.toLowerCase()}-modal`).style.display = "none";
    }

    // function to handle submission of various data
    const handleSubmit = async (e, type) => {
        e.preventDefault()
        let obj = {}
        for(let i = 0; i < arrayOfStates.length; i++) {
            if(arrayOfStates[i].type === type.toLowerCase()){
                obj = arrayOfStates[i]
                break;
            }
        }
        switch(type) {
            case "PROPOSAL":
                try {
                    let response = await createProposal(obj)
                    if(response.status === 200) {
                        // clear text fields
                        document.getElementById("proposal-heading").value = ""
                        document.getElementById("proposal").value = ""
                        setTimeout(() => {
                            document.getElementById(`${type.toLowerCase()}-modal`).style.display = "none"
                        }, 1000)
                        // success toast
                        document.getElementById("toast-text").innerHTML = "Proposal created successfully"
                        document.getElementById("toast").style.display = "block"
                        setTimeout(() => {
                            document.getElementById("toast").style.display = "none"
                        }, 3000);
                    } else {
                        // error toast
                    }
                } catch (error) {
                    // error toast
                }
                break
            case "COMPLAIN":
                try {
                    let response = await makeComplain(obj)
                    if(response.status === 200) {
                        // clear text fields
                        document.getElementById("complain-heading").value = ""
                        document.getElementById("complain").value = ""
                        setTimeout(() => {
                            document.getElementById(`${type.toLowerCase()}-modal`).style.display = "none"
                        }, 1000)
                        // success toast
                        document.getElementById("toast-text").innerHTML = "Complain registered successfully"
                        document.getElementById("toast").style.display = "block"
                        setTimeout(() => {
                            document.getElementById("toast").style.display = "none"
                        }, 3000);
                    } else {
                        // error toast
                    }
                } catch (error) {
                    // error toast
                }
                break
            case "ANNOUNCEMENT":
                try {
                    let response = await createAnnounce(obj)
                    if(response.status === 200) {
                        // success toast
                        console.log(response)
                    } else {
                        // error toast
                    }
                } catch (error) {
                    // error toast
                }
                break
            case "NEWS":    
        }
    }

    switch (props.type) {
        case "PROPOSAL":
            return (
                <div>
                    <div className="flex p-4">
                        <X color="white" className="cursor-pointer" onClick={() => closeModal("PROPOSAL")}/>
                    </div>
                    <div className="md:px-16 px-4">
                        <h5 className="text-2xl font-bold text-white">New Proposal</h5>
                        <form className="my-4 flex flex-col">
                            <input id="proposal-heading" className="input-trans text-white w-full h-12 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="Subject" onChange={(e) => { setProposal({ ...proposal, heading: e.target.value }) }}></input>
                            <textarea
                                id="proposal" 
                                maxLength={200} 
                                style={{ minHeight: 100, maxHeight: 300 }} 
                                className="input-trans text-white w-full h-48 my-2 rounded-lg bg-transparent border-white border-2 p-5 focus:outline-none" 
                                placeholder="What is your proposal?" 
                                onChange={(e) => { setProposal({ ...proposal, proposal: e.target.value }) }}
                            ></textarea>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg ml-auto my-2" onClick={(e) => handleSubmit(e, "PROPOSAL")}>Submit</button>
                        </form>
                    </div>
                </div>
            )
        case "COMPLAIN":
            return (
                <div>
                    <div className="flex p-4">
                        <X color="white" className="cursor-pointer" onClick={() => closeModal("COMPLAIN")}/>
                    </div>
                    <div className="md:px-16 px-4">
                        <h5 className="text-2xl font-bold text-white">Register Complain</h5>
                        <form className="my-4 flex flex-col">
                            <input id="complain-heading" className="input-trans text-white w-full h-12 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="Subject" onChange={(e) => { setComplain({ ...complain, heading: e.target.value }) }}></input>
                            <textarea 
                                id="complain" 
                                maxLength={200} 
                                style={{ minHeight: 100, maxHeight: 300 }} 
                                className="input-trans text-white w-full h-48 my-2 rounded-lg bg-transparent border-white border-2 p-5 focus:outline-none" 
                                placeholder="What is your complain?" 
                                onChange={(e) => { setComplain({ ...complain, complain: e.target.value }) }}
                            ></textarea>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg ml-auto my-2" onClick={(e) => handleSubmit(e, "COMPLAIN")}>Submit</button>
                        </form>
                    </div>
                </div>
            )
        case "ANNOUNCEMENT":
            return (
                <div>
                    <div className="flex p-4">
                        <X color="white" className="cursor-pointer" onClick={() => closeModal("ANNOUNCEMENT")}/>
                    </div>
                    <div className="md:px-16 px-4">
                        <h5 className="text-2xl font-bold text-white">Create Announcement</h5>
                        <form className="my-4 flex flex-col">
                            <input className="input-trans text-white w-full h-12 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="Announcement Title"></input>
                            <textarea maxLength={200} style={{ minHeight: 100, maxHeight: 300 }} className="input-trans text-white w-full h-48 my-2 rounded-lg bg-transparent border-white border-2 p-5 focus:outline-none" placeholder="Announcement Details"></textarea>
                            <div className="flex md:flex-row flex-col my-1">
                                <input className="input-trans md:w-1/4 py-4 px-2 md:mr-4 md:my-0 my-2 text-white rounded-lg bg-transparent border-white border-2 focus:outline-none" type="date"></input>
                                <input className="input-trans md:w-1/4 py-4 px-2 md:mx-4 md:my-0 my-2 text-white rounded-lg bg-transparent border-white border-2 focus:outline-none" placeholder="Link"></input>
                            </div>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg ml-auto my-2" onClick={(e) => handleSubmit(e, "ANNOUNCEMENT")}>Create</button>
                        </form>
                    </div>
                </div>
            )
        case "NEWS":
            return (
                <div>
                    <div className="flex p-4">
                        <X color="white" className="cursor-pointer" onClick={() => closeModal("NEWS")}/>
                    </div>
                    <div className="md:px-16 px-4">
                        <h5 className="text-2xl font-bold text-white">Add News Article</h5>
                        <form className="my-4 flex flex-col">
                            <input className="input-trans text-white w-full h-12 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="News Heading"></input>
                            <div className="flex md:flex-row flex-col my-1">
                                <input className="input-trans text-white w-full h-12 md:mr-1 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="Username of Writer"></input>
                                <input className="input-trans text-white w-full h-12 md:ml-1 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="Image URL"></input>
                            </div>
                            <textarea maxLength={200} style={{ minHeight: 100, maxHeight: 300 }} className="text-white w-full h-48 my-2 rounded-lg bg-transparent border-white border-2 p-5 focus:outline-none" placeholder="What is the news article?"></textarea>
                            <div className="flex md:flex-row flex-col my-1">
                                <input className="input-trans text-white w-full h-12 md:mr-1 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="Name of news source"></input>
                                <input className="input-trans text-white w-full h-12 md:mx-1 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" placeholder="News source URL"></input>
                                <input className="input-trans text-white w-full h-12 md:ml-1 my-2 rounded-lg bg-transparent border-white border-2 px-5 focus:outline-none" type="date" placeholder="Date of article"></input>
                            </div>
                            <button className="bg-gray-100 px-4 py-2 rounded-lg ml-auto my-2" onClick={(e) => handleSubmit(e, "NEWS")}>Add to CyberManipal</button>
                        </form>
                    </div>
                </div>
            )
        default: 
            return <></> 
    }
}

export default ModalFunction