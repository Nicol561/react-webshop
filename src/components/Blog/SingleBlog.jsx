function SingleBlog() {
  return (
    <div className="blog-card2">
      <div className="blog-img2">
        <img
          src="images/picture_products/blog-white-pencils.jpg"
          alt="Slika bloga"
        />
      </div>
      <div className="blog-content2">
        <h2>Which Is The Whitest White Pencil?</h2>
        <p>
          I don't know about you but as a mixed media artist I'm continually on
          the search for the best white pens, acrylic markers and pencils to use
          as highlights on a variety of surfaces. I'm always on the look out for
          that strong bright whitest of white! In this article I will share with
          you some of the pencils that I have tested on different surfaces to
          find my favourite.{" "}
        </p>
        <div className="author-info2">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1701734400&semt=ais"
            alt="Author picture"
            title="Cherry"
          />
          <span>Cherry Ferris</span>
          <a href="blog-detail.html" className="read-more">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
