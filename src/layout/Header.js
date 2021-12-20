
export default function Header(){
    return(
        <nav>
            <div className="nav-wrapper header__nav" >
                <a href="#" className="brand-logo">AllMove</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Kino</a></li>
                    <li><a href="#">Serial</a></li>
                    <li><a href="#">Multfilm</a></li>
                </ul>
            </div>
        </nav>
    )
}