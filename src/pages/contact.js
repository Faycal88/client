import { toast } from "react-toastify";

function Contact() {
  function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    var body =
      "Name: " + name + "\n" + "Email: " + email + "\n" + "Message: " + message;
    var link =
      "mailto:contact@eternelle.plantes.shop" +
      "?subject=" +
      subject +
      "&body=" +
      body;
    window.location.href = link;
    toast.success("Continue to send your message");
  }

  return (
    <div
      style={{
        margin: "4em 2em 0em 2em",
      }}
    >
      <div className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contactez nous ou prendre un devis
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Avez-vous des questions? N'hésitez pas à nous contacter directement.{" "}
          <br />
          Notre équipe reviendra vers vous en quelques heures.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="name" className="">
                      Nom et Prénom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <label htmlFor="email" className="">
                      Adresse mail
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <label htmlFor="subject" className="">
                      Objet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <label htmlFor="message">Votre message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="text-center text-md-left mt-2">
              <a
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  sendMail();
                }}
              >
                Envoyer
              </a>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Garidi 1, Kouba 16054, Alger</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 213 555 130 756</p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>eternelle.plantes@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
