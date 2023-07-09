import '../HomePage.css';
import '../materialize.css';
import test1 from "../img/test1.png";
import test2 from "../img/test2.png";

function Test() {
    return (
        <div>
            <div className='html'>
                <div className="container">
                    <div className="title">
                        <h1>
                            <span>buy</span> and <span>own</span> <br></br> digital art
                        </h1>
                    </div>
                    <div className="section-adh">
                            <div className="section-img">
                                <img className="responsive-img hide-on-med-and-down" src={test1}></img>
                            </div>
                            <div className="section-texte">
                                <p>Create and self, if tou are an artis. Find and pick-up <br></br> rahe digitals items, if you into collecting.</p>
                                <div className="center-align bouton">
                                    <a className="waves-effect waves-light btn-large">Become a créator</a>
                                </div>
                            </div>
                            
                            <div className="section-img">
                                <img  className="responsive-img"src={test2} alt=""></img>
                            </div>
                    </div>
                    <div className="section-links">
                        <div className="flex">
                                <i className="material-icons">ac_unit</i><p>Take part in Nft esasly</p>
                        </div>
                        <div className="separator-section-links hide-on-med-and-down"></div>
                        <div className="flex">
                            <i className="material-icons">access_time</i><p>Take part in Nft esasly</p>
                        </div>
                        <div className="separator-section-links hide-on-med-and-down"></div>
                        <div  className="flex">
                            <i className="material-icons">adjust</i><p>Take part in Nft esasly</p>
                        </div>
                    </div>

                    <div className="bouton-rouge hide-on-med-and-down">
                        <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></a>
                    </div>
                
                </div>
            </div>

        </div>
     
    );
  }
  
  export default Test;
  