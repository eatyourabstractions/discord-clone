import { DownloadIcon } from '@heroicons/react/outline'
import React from 'react'
import shroomfrog from '../images/hero-discord-1.svg'
import friends from '../images/friends.svg'

const h2_message  = `Whether you’re part of a school club, gaming group, worldwide art
                    community, or just a handful of friends that want to spend time
                    together, Discord makes it easy to talk every day and hang out more
                    often.`


const styles = {
    firstDiv: `bg-discord_blue pb-8 md:pb-0`,
    secondDiv: `p-7 py-9 h-screen md:h-[83vh] md:flex relative`,
    thirdDiv: `flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center`,
    h1:`text-5xl text-white font-bold`,
    h2:`text-white text-lg font-light tracking-wide lg:max-w-3xl w-full`,
    btnsContainer: `flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6`,
    downloadIcon: `w-6 mr-2`,
    downloadBtn: `bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 
                  text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition 
                  duration-200 ease-in-out`,
    openInBrowserbtn:`bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full 
                      p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 
                      ease-in-out`,
    shroomfrog: `absolute -left-36 mt-16 sm:-left-44 md:hidden`,
    friends: `hidden md:inline absolute`
 } 

function Hero() {
  return (
    <div className={styles.firstDiv}>
        <div className={styles.secondDiv}> 
            <div className={styles.thirdDiv}> 
                <h1 className={styles.h1}>Your place to talk</h1> 
                <h2 className={styles.h2}>{h2_message}</h2>
                <div className={styles.btnsContainer}>
                    <button className={styles.downloadBtn}>
                        <DownloadIcon className={styles.downloadIcon} />
                        Download for Mac
                    </button>
                    <button className={styles.openInBrowserbtn}>Open Discord on your browser</button>
                </div>
            </div>
            <div className="flex-grow">
                <img src={shroomfrog} alt="" className={styles.shroomfrog}/>
                <img src={friends} alt="" className={styles.friends}/>
            </div>
        </div>
    </div>
  )
}

export default Hero