import { Link } from "react-router-dom";
import "../../assets/css/skill.css";
import { Item } from "../Item";

export const Skill = () => {
  const imagePath = "img/skills/";

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    width: "35vh",
    height: "6vh",
    margin: "10px auto",
  };

  return (
    <section className="skill container section" id="skill">
      <h2 className="section__title-2">
        <span>Skills.</span>
      </h2>

      {/* Frontend */}
      <div className="skill-containers">
        <div className="details-container">
          <h2 className="skill-sub-title">Frontend Development</h2>
          <div className="article-container">
            <Item
              Name="HTML"
              Icon={imagePath + "HTML.png"}
              Experience="Experienced"
            />
            <Item
              Name="CSS"
              Icon={imagePath + "CSS.png"}
              Experience="Experienced"
            />
            <Item
              Name="Javascript"
              Icon={imagePath + "Javascript.png"}
              Experience="Experienced"
            />
            <Item
              Name="React JS"
              Icon={imagePath + "React.png"}
              Experience="Experienced"
            />
            <Item
              Name="Tailwind Css"
              Icon={imagePath + "Tailwind.png"}
              Experience="Experienced"
            />
          </div>
        </div>
        {/* Backend */}
        <div className="details-container">
          <h2 className="skill-sub-title">Backend Development</h2>
          <div className="article-container">
            <Item
              Name="Node JS"
              Icon={imagePath + "NodeJS.png"}
              Experience="Beginner"
            />

            <Item
              Name="Firebase"
              Icon={imagePath + "Firebase.png"}
              Experience="Experienced"
            />
            <Item
              Name="Express JS"
              Icon={imagePath + "ExpressJS.png"}
              Experience="Beginner"
            />
            <article className="ex__article">
              <div>
                <h3></h3>
                <p></p>
              </div>
            </article>
          </div>
        </div>
        {/* Other */}
        <div className="details-container">
          <h2 className="skill-sub-title">Other</h2>
          <div className="article-container">
            <Item
              Name="Github"
              Icon={imagePath + "Github.png"}
              Experience="Experienced"
            />
            <Item
              Name="Netlify"
              Icon={imagePath + "Netlify.png"}
              Experience="Experienced"
            />
            <Item
              Name="Vercel"
              Icon={imagePath + "Vercel.png"}
              Experience="Intermediate"
            />
          </div>
        </div>
      </div>
      <Link to="/skills" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show details...
      </Link>
    </section>
  );
};
