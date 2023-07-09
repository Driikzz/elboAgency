import '../HomePage.css';
import '../App.css';
import '../materialize.css';
function Forms() {
    return (
      <div className="Forms">
         <div className="contact">
            <div className="contact-text">
                <div className="center-align">
                    <h2>Contactez nous pour une mission</h2>
                    <p>Contact us with the specifics of your project and one of our astronauts will get back to you.</p>
                </div>
            </div>
            <div className="">
                <form action="" className="container">
                  <div className="form container">
                        <div className="surname">
                            <label htmlFor="surname">Nom de famille* </label>
                            <input type="text" name="surname" id="surname" required></input>
                        </div>
                        <div className="name">
                            <label htmlFor="name">Prénom* </label>
                            <input type="text" name="name" id="name" required></input>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email* </label>
                            <input type="email" name="email" id="email" required></input>
                        </div>
                        <div className="tel">
                            <label htmlFor="tel">Numéro de tel* </label>
                            <input type="tel" name="tel" id="tel" required></input>
                        </div>
                        <div className="entreprises">
                            <label htmlFor="entreprises">Entreprises </label>
                            <input type="text" name="entreprises" id="entreprises" required></input>
                        </div>
                        <div className="web">
                            <label htmlFor="web">Site Web </label>
                            <input type="text" name="web" id="web" required></input>
                        </div>
                        <div className="message">
                            <label htmlFor="email">Message </label>
                            <input type="text" name="message" id="message" required></input>
                            <a className="waves-effect waves-light btn-large">Envoyer le formulaire</a>
                        </div>
                  </div>   
                </form>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Forms;
  