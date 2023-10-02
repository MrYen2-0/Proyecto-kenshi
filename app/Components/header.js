function Header(){
    return(
<div className="contenedor-imagen-header">
                <img src="/img/Site-logo.png" alt="Kenshi" className="imagen-header" />

                    <div className="titulo">
                        <a href="https://kenshi.fandom.com/" class="titulo-header">
                            Kenshi Wiki
                        </a>
                    </div>
                    <nav className="navegador">
                        <ul className="nav-navegador">
                            <li className="nav-navegador-horizontal">
                                <span>H</span>
                            </li>
                            <li className="nav-navegador-horizontal">
                                <span>Guides</span>
                            </li>
                            <li className="nav-navegador-horizontal">
                                <span>Characters</span>
                            </li>
                            <li className="nav-navegador-horizontal">
                                <span>World</span>
                            </li>
                            <li className="nav-navegador-horizontal">
                                <span>Items</span>
                            </li>
                        </ul>
                    </nav>
                </div>

    );
}

export default Header;
