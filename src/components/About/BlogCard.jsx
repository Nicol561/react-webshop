function BlogCard() {
  return (
    <aside>
      <div className="blog-card">
        <h4> Wardrobe Staples Every Woman Needs</h4>
        <p>
          Certain pieces remain stylish through the ever-changing world of
          fashion. This article highlights the timeless wardrobe staples every
          woman needs.
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
        <h4>Mastering The Art Of Fashion Layering</h4>
        <p>
          Layering can transform your outfits from simple to sophisticated,
          making it a key skill for any fashion enthusiast.
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
