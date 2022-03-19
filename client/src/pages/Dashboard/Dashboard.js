import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { getProfile, useTorState } from "../../context";
import { GitHub, Mail, Instagram } from "react-feather"
import Modal from "../../components/Modal/Modal";
import ButtonArea from "../../components/ButtonArea/ButtonArea";

const Dashboard = () => {
    
    const user = useTorState();

    const history = useHistory();

    const [data, setData] = useState({})

    useEffect(() => {
        if(!user.token || !user.position || !user.clearance) {            
            history.replace("/")
        }

        const getProfileData = async () => {
            let response = await getProfile();
            setData(response.data)
        }

        getProfileData();
    }, [])

    return (
        <div className="w-screen">
            <div id="news-modal" style={{ display: "none" }}>
                <Modal type="NEWS" />
            </div>
            <div id="announcement-modal" style={{ display: "none" }}>
                <Modal type="ANNOUNCEMENT" />
            </div>
            <div id="proposal-modal" style={{ display: "none" }}>
                <Modal type="PROPOSAL" />
            </div>
            <div id="complain-modal" style={{ display: "none" }}>
                <Modal type="COMPLAIN" />
            </div>
            <div className="h-screen w-full">
                <div className="flex w-full py-32 items-center"  style={{ zIndex: -10, backgroundColor: "#59316B" }}>
                    <div className="px-16 flex flex-col">
                        <p className="md:text-5xl text-4xl reem text-white">the</p>
                        <p className="md:text-9xl text-8xl reem text-white">MIST</p>
                        <p className="md:text-6xl text-4xl reem text-white">tor network</p>
                        <div className="h-1 w-full bg-gray-100 my-7"></div>
                    </div>
                </div>
                <div className="w-full bg-transparent px-16" style={{ zIndex: 100 }}>
                    <div className="-mt-28 flex md:justify-end justify-center">
                        <div className="md:h-96 md:w-96 h-48 w-48 rounded-full ring-4 ring-white" style={{ backgroundColor: "#59316B" }}></div>
                    </div>
                </div>
                <div className="w-screen md:px-20 py-16 px-6 md:text-left text-center">
                    <h5 className="md:text-5xl text-3xl my-4 md:my-1">{user.position}</h5>
                    <div className="my-4 text-xl flex md:flex-row justify-between flex-col-reverse">
                        <div className="md:w-3/5">
                            <p>
                                {data.bio}
                            </p>
                        </div>
                        <div className="flex flex-col md:w-1/5 md:my-0 my-3">
                            <div className="rounded-xl flex justify-between bg-gray-200 p-5 my-1">
                                <GitHub />
                                Github
                            </div>
                            <div className="rounded-xl flex justify-between bg-gray-200 p-5 my-1">
                                <Mail />
                                Email ID
                            </div>
                            <div className="rounded-xl flex justify-between bg-gray-200 p-5 my-1">
                                <Instagram />
                                Instagram
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonArea clearance={user.clearance} position={user.position} />
                <div className="fixed flex justify-center items-center bottom-0 h-24 w-screen">
                    <div id="toast" style={{ display: "none" }} className="py-6 md:w-2/5 w-4/5 flex justify-center items-center bg-gray-100 rounded-xl bg-gray-200 shadow-xl">
                        <p className="text-gray-900 text-xl text-center" id="toast-text"></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard