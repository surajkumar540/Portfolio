import './Menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && 'active')}>
            <ul>
                <li onClick={() => { setMenuOpen(false) }}>
                    <a href='#intro'>Home</a>
                </li>

                <li onClick={() => { setMenuOpen(false) }}>
                    <a href='#portfolio'>Project</a>
                </li>

                <li onClick={() => { setMenuOpen(false) }}>
                    <a href='#works'>Works</a>
                </li>

                <li onClick={() => { setMenuOpen(false) }}>
                    <a href='#skills'>Skills</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu