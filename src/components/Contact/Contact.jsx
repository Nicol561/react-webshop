import Form from "./Form";
import MailPhone from "./Mail&Phone";
import Newsletter from "./Newsletter";
import SocialMedia from "./SocialMedia";
function Contact() {
  return (
    <main>
      <h1 className="naslov_h1">Contact us</h1>
      <div className="contact_everybody">
        <div className="contact_all">
          <MailPhone />
          <SocialMedia />
          <Newsletter />
        </div>
        <Form />
      </div>
    </main>
  );
}

export default Contact;
