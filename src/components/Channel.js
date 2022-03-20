import React from 'react'
import { HashtagIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setChannelInfo} from '../features/channelSlice'


const styles = {
    mainDiv: `font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white`
}

function Channel({id, channelName}) {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const setChannel = () => {
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        );
    
        navigate(`/channels/${id}`);
      };

  return (
    <div className={styles.mainDiv} onClick={setChannel}>
    {/* <div className={styles.mainDiv} > */}
        <HashtagIcon className="h-5 mr-2" />
        {channelName}
    </div>
  )
}

export default Channel