function BlogCard() {
  return (
    <aside>
      <div className="blog-card">
        <h2>Which Is The Whitest White Pencil?</h2>
        <p>
          I don't know about you but as a mixed media artist I'm continually on
          the search for the best white pens, acrylic markers and pencils
        </p>
        <div className="author">
          <img
            src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1701734400&semt=ais"
            alt="Author picture"
            title="Cherry"
          />
          <span>Cherry Ferris</span>
          <a href="blog-detail.html">
            {" "}
            <button className="blog-button">Read More</button>
          </a>
        </div>
      </div>
      <div className="blog-card">
        <h2>Colour Theory to Improve Your Paintings</h2>
        <p>
          Colour theory is an almost endless area of research that can feel a
          little daunting, especially if you are only beginning on your creative
          journey
        </p>
        <div className="author">
          <img
            src="https://www.cityheadshots.com/uploads/5/1/2/1/5121840/editor/img-4440.jpeg?1614112290"
            alt="Author picture"
            title="Tracey"
          />
          <span>Tracey Eastham</span>
          <a href="blog-detail2.html">
            {" "}
            <button className="blog-button">Read More</button>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default BlogCard;
