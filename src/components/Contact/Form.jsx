function Form() {
  return (
    <div className="container5">
      <form className="con-form" action="#" method="get">
        <h2>Contact Form</h2>
        <div className="input-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your First Name"
            required=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Your Last Name"
            required=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            required=""
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required=""
            defaultValue={""}
          />
        </div>
        <button className="button-con" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
