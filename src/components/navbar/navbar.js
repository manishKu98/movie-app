import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './navbar.css'

function NavBar() {
    const [text, setText] = useState('')
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();

    const changeSearchParams = () => {
        if(text !== search.getTitle){
            setSearch({ title: text })
        }
    }
    return (
        <>
            <nav className="navbar">
                <div className="nav-items">
                    <div className='left-side'>
                        <i  className="logo fa-thin fa-w"></i> 
                        <a onClick={() => {navigate(`/`)}} className='brand'>WebFlix</a >
                    </div>
                    <div className='search-bar'>
                        <input value={text} onChange={(e) => setText(e.target.value)} type='text' className='search-field'/> 
                        <i onClick={changeSearchParams} className="search fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="right-side">
                        <ul className="menu">
                            <li>About</li>
                            <li>Sign In</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar
{/* <i class="icon fa-solid fa-magnifying-glass fa-lg"></i>
<i class="icon fa-solid fa-user fa-lg"></i>
<i class="icon fa-solid fa-angle-down"></i> */}


