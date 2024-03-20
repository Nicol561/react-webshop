function AbtForm() {
  return (
    <form className="form1" action="#" method="get">
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
  );
}

export default AbtForm;
