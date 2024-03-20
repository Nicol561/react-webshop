function Banner() {
  return (
    <div className="image-container">
      <img
        src="https://placehold.co/1300x550"
        alt="pribor za crtanje"
        title="banner"
        width="100%"
      />
      <div className="text-container">
        Welcome to MyArt
        <i className="fa-solid fa-palette" /> web-shop
        <p>
          When it comes to purchasing art supplies online, we understand that
          you want the best quality at affordable prices. That is why we pride
          ourselves on being one of the leading online art painting stores,
          offering a wide range of art supplies that are sure to bring your
          paintings to life.
        </p>
      </div>
    </div>
  );
}

export default Banner;
