import DiscordLogo from  '../images/Discord-logo-white.svg'
import {MenuIcon} from '@heroicons/react/outline'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const styles = { 
    header: "flex items-center justify-between py-4 px-6 bg-discord_blue",
    logo: "h-12 w-32 object-contain",
    headerItems: "hidden lg:flex space-x-6",
    btnContainer: 'flex space-x-4',
    btn: `bg-white p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none 
          hover:shadow-2xl hover:text-discord_blurple transition duration-200 
          ease-in-out whitespace-nowrap font-medium`,
    menuIcon: 'h-9 text-white cursor-pointer lg:hidden'

}

const Header = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
          .then(() => navigate("/channels"))
          .catch((error) => alert(error.message));
      };


    return (
        <header className={styles.header}>
            <a href="/">
            <img src={DiscordLogo} alt="Discord Logo" className={styles.logo}/>
            </a>
            <div className={styles.headerItems}>
                <a className='link' href='/'>Download</a>
                <a className='link' href='/'>Why Discord?</a>
                <a className='link' href='/'>Nitro</a>
                <a className='link' href='/'>Safety</a>
                <a className='link' href='/'>Support</a>
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.btn}
                    onClick={!user ? signIn : () => navigate("/channels")}
                >
                    {!user ? "Login" : "Open Discord"}
                 </button>
                 <MenuIcon  className={styles.menuIcon}/>
            </div>
        </header>
    )
}

export default Header;
