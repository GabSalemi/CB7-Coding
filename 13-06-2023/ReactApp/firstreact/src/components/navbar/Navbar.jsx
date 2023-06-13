import "./index.css"

const Navbar = () => {
    const navbarItems = [{
        name: "Home",
        url: "/"
    }, {
        name: "About",
        url: "/"
    }, {
        name: "List",
        url: "/"
    }]


    return (
        <div className="Navbar">
            <ul className="navbar__list">
                {navbarItems.map((element) => (
                    <li className="navbar__item">
                        <a href={element.url}>{element.name}</a>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Navbar