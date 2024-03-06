/*new*/
import "./../../assets/css/project.css";
import { Card } from "../Card";
import { Link } from "react-router-dom";
import { setBadges } from "../Badge";

export const Project = () => {
  const projectImg = "/img/projects/";

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    width: "35vh",
    height: "6vh",
    margin: "10px auto",
  };

  return (
    <section className="projects section" id="projects">
      <h2 className="section__title-1">
        <span>Projects.</span>
      </h2>

      <div className="projects__container container grid">
        {/* Movie */}
        <Card
          Image={projectImg + "movie.PNG"}
          Type="App"
          Title="Movie Recommendation App"
          Description="A website that displays a list of Movies and plays the trailer of the movies and series. build using react vite and  various frameworks"
          LinkSourceCode="https://github.com/vmeghna/movie-marvelView-react-frontend"
          LinkDemoApp="https://voluble-peony-2fff88.netlify.app"
          Badges={setBadges(["HTML", "CSS", "REACT", "TAILWIND CSS", "VITE"])}
        />

        {/* Recipe App */}
        <Card
          Image={projectImg + "epiceatery.PNG"}
          Type="App"
          Title="Recipe Recommendation App"
          Description="It is a recipe app where you can add foods to favourite , view the ingredients list and with user authentication"
          LinkSourceCode="https://github.com/vmeghna/epiceatery-recipe-react-frontend"
          LinkDemoApp="https://magenta-travesseiro-211abf.netlify.app/"
          Badges={setBadges(["HTML", "CSS", "REACT", "FIREBASE"])}
        />

        {/* Blog App */}
        <Card
          Image={projectImg + "blog.PNG"}
          Type="App"
          Title="Full stack Blog App"
          Description="Blog app with user authentication , you can create blog , post and delete it."
          LinkSourceCode="https://github.com/vmeghna/fullstack-blog-application-final"
          LinkDemoApp="https://spiffy-stardust-8c63b8.netlify.app/"
          Badges={setBadges(["HTML", "CSS", "REACT", "FIREBASE"])}
        />
      </div>
      <Link to="/projects" className="button" style={buttonStyle}>
        <i className="ri-arrow-right-up-fill"></i> Show more...
      </Link>
    </section>
  );
};
