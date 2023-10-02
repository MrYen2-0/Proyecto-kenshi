import Appsfoot from '../Components/appsfoot';
import Community from '../Components/comunity';
import Follow from './follow';
import Overview from './overview';
import Properties from './properties';




function Footer() {
    return (
<footer className="footer-contenedor ">
            <div className="footer-cont-global ">
                <div className="container-footer ">
                    <div className="footer-copyright ">
                        <div className="copy ">
                            <h2 className="fandom-icon ">
                                <a href="https://www.fandom.com " className="icon-footer ">
                                </a>
                            </h2>
                            <Properties/>
                            <section className="follow">
                            <Follow/>
                                </section>

                        </div>

                        <div>
                            <Overview/>
                        </div>
                        <div>
                            <Community/>
                        </div>
                        <div>
                        <Appsfoot/>
                        </div>
                    </div>
                    <div className="contenedor ">
                        <div className="div-izquierdo ">
                            <p>Kenshi Wiki is a FANDOM Games Community.</p>
                        </div>
                        <div className="div-derecho ">
                            <p>VIEW MOBILE SITE</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }
export default Footer;
