import './globals.css';
import Custom from './Components/custom.js';
import Carrusel from './Components/carrusel-img';
import Footer from './Components/footer';
import Header from './Components/header';



function page() {
  return (
    <div>
        <div className="header-invisible">
      <Custom/>
    </div>
    <div className="cuadro-vertical">
        <div className="contenedor-vertical">
            <nav className="nav-vertical" aria-label="Fandom navigation">
            <img src="/img/Screenshot_46.png" alt="Kenshi" className="imagen-navertical" />
            </nav>
        </div>
    </div>
    <div className="contendor-global">
        <div className="contenido-menu">
            <div className="inicio-sesion-header">
                <a className="sesion">Sign in</a>
                <a className="registro">Register</a>
            </div>
            <div className="container-header">
                <Header/>
            </div>
            <div className="contenido-globalmenu">

                <div className="cuadro">
                    <div className="cuadro-header">
                        <div className="titulo-cuadro">
                            <h1>Home</h1>
                        </div>
                        <div className="centro-cuadro">
                            <div className="centro-imagen">
                            <img src="/img/Banner.png" alt="Kenshi" className="imagen-izquierda" />

                            </div>
                        </div>
                        <div className="bienvenida-cuadro">
                            <div className="bienvenida-texto">
                                <div className="bienvenida-welcome">
                                    <h1>Welcome to the</h1>
                                    <img src="/img/Site-logo.png" alt="Kenshi" className="imagen-header" />

                                </div>
                                <div className="welcome-texto">
                                    The Kenshi Wiki is a place for discussing, researching, and cataloging everything about Kenshi. If you're new to the game, check out our guides. If you're already a Kenshi expert, tell us about your travels in the comments or on the forum.
                                </div>
                            </div>
                        </div>
                        <div>
                     <Carrusel />
                   </div>
                        <p>
                        </p>
                        <div className="box-cuadro">
                            <div className="box-titulo">
                                What is Kenshi?
                            </div>
                            <div className="box-texto">
                                <p>
                                    Kenshi, created by Lofi Games, is a single player Role Playing Game set in a vast and atmospheric ‘Sword-Punk’ style open world. With a mix of squad-based control and city-building features, gameplay is completely free-roaming and open: enjoy the freedom
                                    and potential to do whatever you want.
                                </p>
                                <p>
                                    Set in an unrelenting world of bloodthirsty cannibals, starving bandits, brutal slavers and wild beasts, survival alone is a grueling struggle… You are not the chosen one. You’re not great and powerful. You don’t have more ‘hitpoints’ than everyone else.
                                    You are not the center of the universe, and you are not special. Unless you work for it.
                                </p>
                            </div>
                        </div>
                        <p>
                        </p>
                        <table className="table-cuadro">
                            <tr>
                                <td className="table-titulo" colspan="3">Reviews</td>
                            </tr>
                            <tr>
                                <th className="box-linea">
                                </th>
                            </tr>
                            <tr>
                                <td className="comillas-table">“
                                </td>
                                <td className="table-texto">... But after around 30 hours, I still feel like I’ve so much to uncover.</td>
                                <td className="comillas-table">”
                                </td>
                                <td colspan="3" style={{paddingtop: '10px'}}>
                                    <p style={{fontsize:'smaller' , textalign:'right'}}>
                                        <cite style={{fontstyle:'normal'}}>–
                                            <a target="_blank" rel="nofollow noreferrer noopener" className="external text" href="https://www.pcgamer.com/kenshi-review/">
                                            PC Gamer
                                        </a>
                                    </cite>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="comillas-table">”
                                </td>
                                <td className="table-texto">Es un videojuego muy desafiante que no perdona los errores</td>
                                <td className="comillas-table">”
                                </td>
                                <td colspan="3" style={{paddingtop: '10px'}}>
                                    <p style={{fontsize:'smaller' , textalign:'right'}}>
                                        <cite style={{fontstyle:'normal'}}>–
                                            <a target="_blank" rel="nofollow noreferrer noopener" className="external text" href="https://www.pcgamer.com/kenshi-review/">
                                                3D Juegos
                                        </a>
                                    </cite>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className="comillas-table">”
                                </td>
                                <td className="table-texto">Kenshi is everything. Kenshi is nothing. Kenshi just is.</td>
                                <td className="comillas-table">”
                                </td>
                                <td colspan="3" style={{paddingtop: '10px'}}>
                                    <p style={{fontsize:'smaller' , textalign:'right'}}>
                                        <cite style={{fontstyle:'normal'}}>–
                                            <a target="_blank" rel="nofollow noreferrer noopener" className="external text" href="https://www.pcgamer.com/kenshi-review/">
                                                Rock Paper Scissors
                                        </a>
                                    </cite>
                                    </p>
                                </td>
                            </tr>

                        </table>

                        <p>
                        </p>
                        <div className="box-cuadro">
                            <div className="box-titulo">
                                FEATURED VIDEOS
                            </div>
                            <div className="box-video">
                                <div className="box-video-cuadro">
                                <video width="550" height="360" controls>
  <source src="/videos/Kenshi.mp4" type="video/mp4" />
  Tu navegador no admite la reproducción de video.
</video>
                                </div>
                            </div>
                        </div>
                        <p>
                        </p>
                        <div className="box-cuadro ">
                            <div className="box-titulo ">
                                CONTRIBUTING
                            </div>
                            <div className="box-texto ">
                                <center>
                                    <b>Keep It Clean · Keep It Civil · Keep It Kenshi</b>
                                </center>
                                <p>
                                    Everyone is welcome to contribute to the Kenshi Wiki. Please check out our guidelines and read our Editor Reference Guide in order to get acquainted with our wiki. Here are some of the best ways to contribute to the wiki:
                                </p>
                                <ul>
                                    <li>
                                        <b>Leave comments!</b> - Tell us about your gameplay experiences or your opinion on pages.
                                    </li>
                                    <li>
                                        <b>Correct grammar</b> - While writing pages, sometimes our admins overlook the small stuff. Correcting a missing letter or changing a word can really make a big difference.
                                    </li>
                                    <li>
                                        <b>Share screenshots!</b> - Here at the Kenshi Wiki, we value screenshots of all graphics qualities. If your computer can handle playing at high resolution, sharing screenshots from your gameplay is a big help.
                                    </li>
                                    <li>
                                        <b>Update stats</b> - Sometimes the devs change things without our noticing. If you're playing unmodded Kenshi and your game doesn't quite match the numbers on our pages, please click the edit button or comment
                                        to let us know!
                                    </li>
                                </ul>
                                <p>
                                    To learn extra ways to help out visit the Things To Do section on the Community Page. If you're interested in trying out code with our templates, feel free to use the sandbox.
                                </p>
                                <center>
                                    <b>Welcome to the Kenshi Wiki and happy editing!</b>
                                </center>
                            </div>
                        </div>
                        <p>
                        </p>
                        <div className="box-cuadro ">
                            <div className="box-titulo ">
                                LANGUAGES
                            </div>
                            <div className="box-texto ">
                                ·
                                <a href="https://kenshi.huijiwiki.com/wiki/%E9%A6%96%E9%A1%B5 " class="box-idioma ">中文</a> ·
                                <a href="https://wiki3.jp/kenshijp " class="box-idioma ">日本語</a> ·
                                <a href="https://kenshi.fandom.com/ko/wiki/Kenshi_%EC%9C%84%ED%82%A4 " class="box-idioma ">한국어</a> ·
                                <a href="https://kenshi.fandom.com/ru/wiki/%D0%9A%D0%B5%D0%BD%D1%88%D0%B8%D0%BF%D0%B5%D0%B4%D0%B8%D1%8F_%D0%B2%D0%B8%D0%BA%D0%B8 " class="box-idioma ">Русский</a> ·
                                <a href="https://kenshi.fandom.com/es/wiki/Wiki_Kenshi " class="box-idioma ">Español</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-menu ">
                    <div className="container-footermenu ">
                        <div className="limited-footermenu ">
                            <h1 className="header-footermenu ">Fan Feed</h1>
                            <div className="mosaico-footermenu ">
                                <div className="columna-footer-menu ">
                                    <div className="columna-page-menu ">
                                        <header className="kenshi-wiki ">
                                            <span>More Kenshi Wiki</span>
                                        </header>
                                        <ul className="lista-wiki ">
                                            <li className="wiki-list ">
                                                <a className="wiki-article " href="http:// ">
                                                    <span className="wiki-circule ">1</span>
                                                    <span className="wiki-tittle ">World of Kenshi</span>
                                                </a>
                                            </li>
                                            <li className="wiki-list ">
                                                <a className="wiki-article " href="http:// ">
                                                    <span className="wiki-circule ">2</span>
                                                    <span className="wiki-tittle ">Meitou</span>
                                                </a>
                                            </li>
                                            <li className="wiki-list ">
                                                <a className="wiki-article " href="http:// ">
                                                    <span className="wiki-circule ">3</span>
                                                    <span className="wiki-tittle ">Kenshi</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="columna-imagen-menu">
  <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi" className="imagen-menu-contenedor2">
    <div className="texto-imagen">
      <h2>World of Kenshi</h2>
      <p>Kenshi Wiki</p>
    </div>
    <img src="/img/Kenshi_Location_Map-02.jpg" className="imagen-menu-contenedor" alt="Imagen 1" />
  </a>
</div>

<div className="columna-imagen-menu">
  <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi" className="imagen-menu-contenedor2">
    <div className="texto-imagen">
      <h2>Meitou</h2>
      <p>Kenshi Wiki</p>
    </div>
    <img src="/img/Meitou.jpg" className="imagen-menu-contenedor" alt="Imagen 2" />
  </a>
</div>
                                </div>
                                <div className="columna-footer-menu ">
                                    <div className="columna-imagen-menu ">
                                        <a href=".http://kenshi.fandom.com/wiki/World_of_Kenshi " className="imagen-menu-contenedor2 ">
                                            <div className="texto-imagen ">
                                                <h2>Kenshi 2</h2>
                                                <p>Kenshi Wiki</p>
                                            </div>
                                            <img src="/img/Flooded_Ruins.jpg" className="imagen-menu-contenedor" alt="Imagen 1" />
                                        </a>
                                    </div>
                                    <div className="columna-imagen-menu ">
                                        <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi " className="imagen-menu-contenedor2 ">
                                            <div class="texto-imagen ">
                                                <h2>Skeleton</h2>
                                                <p>Kenshi Wiki</p>
                                            </div>
                                            <img src="/img/Loading_screen5.png" className="imagen-menu-contenedor" alt="Imagen 1" />
                                        </a>
                                    </div>
                                    <div className="columna-imagen-menu ">
                                        <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi " className="imagen-menu-contenedor2 ">
                                            <div class="texto-imagen ">
                                                <h2>Bugmaster</h2>
                                                <p>Kenshi Wiki</p>
                                            </div>
                                            <img src="/img/Bugmaster.jpg" className="imagen-menu-contenedor" alt="Imagen 1" />

                                        </a>
                                    </div>
                                </div>
                                <div className="columna-footer-menu ">
                                    <div className="columna-imagen-menu ">
                                        <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi " className="imagen-menu-contenedor2 ">
                                            <div className="texto-imagen ">
                                                <h2>Tinfist</h2>
                                                <p>Kenshi Wiki</p>
                                            </div>
                                            <img src="/img/Tinfist.png" className="imagen-menu-contenedor" alt="Imagen 1" />

                                        </a>
                                    </div>
                                    <div className="columna-imagen-menu ">
                                        <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi " className="imagen-menu-contenedor2 ">
                                            <div class="texto-imagen ">
                                                <h2>United Cities</h2>
                                                <p>Kenshi Wiki</p>
                                            </div>
                                            <img src="/img/Empire_Banner.PNG.png" className="imagen-menu-contenedor" alt="Imagen 1" />
                                        </a>
                                    </div>
                                    <div className="columna-imagen-menu ">
                                        <a href="http://kenshi.fandom.com/wiki/World_of_Kenshi " className="imagen-menu-contenedor2 ">
                                            <div class="texto-imagen ">
                                                <h2>Mad Cat-Lon</h2>
                                                <p>Kenshi Wiki</p>
                                            </div>
                                            <img src="/img/Mad_Cat-Lon-0.jpg" className="imagen-menu-contenedor" alt="Imagen 1" />

                                        </a>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer-contenedor ">
        <Footer />
        </footer>
    </div>
    </div>
  )
}

export default page