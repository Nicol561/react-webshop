function Newsletter() {
  return (
    <div className="newsletter-form3">
      <form className="form3" action="#" method="get">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest news and updates!</p>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required=""
        />
        <button type="submit" className="form-button">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
