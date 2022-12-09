import { useEffect, useState } from 'react';
import '../../styles/nav.css';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import pfp from '../../images/icons/pfp.avif';

const Nav = ({
    userLoggedIn,
    auth,
    grow,
    sticky,
}) => {

    const [navClass, setNavClass] = useState(grow ? "nav-container grow" : "nav-container");

    useEffect(() => {
        if (grow !== true) {
            window.addEventListener("scroll", () => {
                setNavClass("nav-container grow");

                if (window.scrollY === 0) {
                    setNavClass("nav-container");
                }
            })
        }else {
            if(sticky) {
                setNavClass("nav-container not-sticky")
            }
        }
    }, [])

    return (
        <nav className={navClass}>
            <Link className="nav-logo" to="/">
                Fundlify
            </Link>
            <div className="nav-info">
                <Link 
                    to="/discover"
                    className="nav-links"
                >
                    Discover
                </Link>
                <div className="nav-links">
                    How It Works
                </div>
                {
                    userLoggedIn ?
                        <Link to="/profile" className="profile-icon">
                            <img
                                src={pfp}
                                alt="profile icon"
                                className="user-icon"
                            />
                        </Link>
                        :
                        <Link to="/sign-in">
                            Log In
                        </Link>

                }
            </div>
        </nav>
    );
}

export default Nav;