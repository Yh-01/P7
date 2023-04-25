import Logo from "./logo";

function Header () {
    return (
        <header>
            <Logo />
            <div>
                <ul>
                    <li>ACCUEIL</li>
                    <li>A PROPOS</li>
                </ul>
            </div>
        </header>
    )
}

export default Header