import Collapsible from "./Collapsible";
import '../App.css';
import imgAbout from '../img/006.png'
import '../materialize.css';

function About() {
    return (
        <div>
            <div className="About-background">
            
                <div className="About">
                    <div className="collapsible-about">
                        <div className="offres-text">
                            <h2>Nos offres</h2>
                        </div>
                        <Collapsible className="collapsible" label="Introduction">
                            <h3>introduction</h3>
                            <p>
                                The collapsible component puts long sections of the information under a
                                block enabling users to expand or collapse to access its details.
                            </p>
                        </Collapsible>
                        <Collapsible className="collapsible" label="Introduction">
                            <h3>introduction</h3>
                            <p>
                                The collapsible component puts long sections of the information under a
                                block enabling users to expand or collapse to access its details.
                            </p>
                        </Collapsible>
                        <Collapsible className="collapsible" label="Introduction">
                            <h3>introduction</h3>
                            <p>
                                The collapsible component puts long sections of the information under a
                                block enabling users to expand or collapse to access its details.
                            </p>
                        </Collapsible>
                    </div>
                
                    <div className="img-about">
                        <img className="responsive-img" src={imgAbout} alt="" />
                    </div>
                    <div className="us-text">
                        <h2>Qui sommes nous ?</h2>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
       
     
    );
  }
  
  export default About;
  