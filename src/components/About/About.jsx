import BlogCard from "./BlogCard";
import TextAbout from "./TextAbout";
import AbtForm from "./AbtForm";
import Socials from "./Socials";
function About() {
  return (
    <main>
      <div className="aside_text">
        <BlogCard />
        <TextAbout />
      </div>
      <div className="newsletter-form2">
        <AbtForm />
      </div>
    </main>
  );
}

export default About;
