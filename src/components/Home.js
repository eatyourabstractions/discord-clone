import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from 'react-firebase-hooks/firestore';
import { auth, db  } from "../firebase";
import {Navigate } from "react-router-dom";
import DiscordFace from '../images/face_discord.png'
import serverIcon1 from '../images/server_icon_1.png'
import serverIcon2 from '../images/server_icon_2.png'

import { collection, addDoc } from "firebase/firestore"; 

import ServerIcon from './ServerIcon';
import Channel from './Channel';
import { ChevronDownIcon, CogIcon, MicrophoneIcon, PhoneIcon, PlusIcon } from '@heroicons/react/outline';
import Chat from './Chat';


const styles = { 
    h2Title: `flex text-white font-bold text-sm items-center justify-between
              border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer`
}

function Home() {
    const [user] = useAuthState(auth);
    const [channels] = useCollection(collection(db, 'channels'))
    const ChannelsJsx = channels?.docs.map(doc => <Channel key={doc.id} id={doc.id} channelName={doc.data().channelName} />)

    const handleAddChannel = async () => {
        const channelName = prompt("Enter a new channel name");
    
        if (channelName) {
    
          try {
            const docRef = await addDoc(collection(db, "channels"), {
                channelName: channelName,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }

      };
        
  return (
    <>
    {!user && <Navigate to="/" replace={true} />}
    <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
            <div className="server-default hover:bg-discord_purple">
                <img src={DiscordFace} alt="" className="h-5"/>
            </div>
            <hr className=" border-gray-700 border w-8 mx-auto" />
            <ServerIcon image={serverIcon1}/>
            <ServerIcon image={serverIcon2}/>
            <ServerIcon image={serverIcon1}/>
            <ServerIcon image={serverIcon2}/>

            <div className="server-default hover:bg-discord_green group">
                <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
            </div>
        </div>

        <div className="bg-[#2f3136] flex flex-col min-w-max">
            <h2 className={styles.h2Title}>
                Official PAPA Server...
                <ChevronDownIcon className="h-5 ml-2" />
            </h2>
            <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
                <div className="flex items-center p-2 mb-2">
                    <ChevronDownIcon className="h-3  mr-2"  />
                    <h4 className="font-semibold ">channels</h4>
                    <PlusIcon
                         className="h-6 ml-auto cursor-pointer hover:text-white"
                         onClick={handleAddChannel}
                     />
                </div>
                <div className="flex flex-col space-y-2 px-2 mb-4">
                    {ChannelsJsx}
                </div>
            </div>
            <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
                <div className="flex items-center space-x-1">
                <img
                    src={user?.photoURL}
                    alt=""
                    className="h-10 rounded-full"
                    onClick={() => auth.signOut()}
                />
                <h4 className="text-white text-xs font-medium">
                {user?.displayName}{" "}
                    <span className="text-[#b9bbbe] block">
                        #{user?.uid.substring(0, 4)}
                    </span>
                </h4>
                </div>
                <div className="text-gray-400 flex items-center">
                    <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                        <MicrophoneIcon className="h-5 icon" />
                    </div>
                    <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                        <PhoneIcon className="h-5 icon" />
                    </div>
                    <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                        <CogIcon className="h-5 icon" />
                    </div>
            </div>
            </div>
        </div>

            <div className="bg-[#36393f] flex-grow">
                <Chat />
            </div>
    </div>
    </>
  )
}

export default Home