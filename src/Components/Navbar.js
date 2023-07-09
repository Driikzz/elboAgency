import '../HomePage.css';

export default function Navbar(props) {
    return <div className="html">
        <header className='header'>
                    <div className="img-logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="navbar hide-on-small-and-down">
                        <nav>
                            <ul>
                                <li><a href="">Market</a></li>
                                <li><a href="">Community</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">About Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="link-nav hide-on-small-and-down">
                        <a href=""><span>{">"}</span>Rejoins Nous</a>
                        <div className="underline"></div>
                    </div>
                </header>
    </div>;
  }
