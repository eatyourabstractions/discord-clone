import React from 'react'
import moment from 'moment'
import { useAuthState } from "react-firebase-hooks/auth";
import { TrashIcon } from "@heroicons/react/solid";
import { auth, db } from '../firebase';
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";
import { doc, deleteDoc } from "firebase/firestore";
const styles = {
    container: `flex items-center p-1 pl-5 my-5 mr-2 hover:bg-[#32353B] group`,
    avatarImg: `h-10 rounded-full cursor-pointer mr-3 hover:shadow-2xl`,
    username: `hover:underline text-white text-sm cursor-pointer`,
    trashIconContainer: `hover:bg-[#ed4245] p-1 ml-auto rounded-sm text-[#ed4245] hover:text-white cursor-pointer`
}

function Message({ id, message, timestamp, name, email, photoURL }) {
    const channelId = useSelector(selectChannelId);
    const [user] = useAuthState(auth);

    const deleteMessage = async (e) => { 
        e.preventDefault()
       await deleteDoc(doc(db, `channels/${channelId}/messages/${id}`))
    }

  return (
    <div className={styles.container}>
        <img
            src={photoURL}
            alt=""
            className={styles.avatarImg}
      />
      <div className="flex flex-col">
          <h4 className="flex items-center space-x-2 font-medium">
              <span className={styles.username}>
                    {name}
              </span>
              <span className="text-[#72767d] text-xs">
                {moment(timestamp?.toDate().getTime()).format("lll")}
              </span>
          </h4>
          <p className="text-sm text-[#dcddde]">
                {message}
          </p>
      </div>
          {
            user?.email === email && (
            <div
              className={styles.trashIconContainer}
              onClick={deleteMessage} >
              <TrashIcon className="h-5 hidden group-hover:inline" />
            </div>
          )
          }

    </div>
  )
}

export default Message