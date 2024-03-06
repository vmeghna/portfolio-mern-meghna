import "../../assets/css/about.css";

export const About = () => {
  const imagePath = "/img/";

  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <h2 className="section__title-1">
          <span>About Me.</span>
        </h2>

        <div className="about__perfil">
          <div className="about__image">
            <img
              src={imagePath + "About Profile.jpg"}
              alt="image"
              className="about__img"
            />

            <div className="about__shadow"></div>

            <div className="geometric-box"></div>
            <img
              src={imagePath + "random-lines.svg"}
              alt=""
              className="about__line"
            />
            <div className="about__box"></div>
          </div>
        </div>

        <div className="about__info">
          <p className="about__description">
            Hi everyone, I'm<b> Meghna</b>. a Full Stack Developer who is
            passionate about building robust and user-friendly web applications
          </p>
          <p className="about__description">
            I'm on a mission to create responsive, awe-inspiring web experiences
            that leave a lasting impression. Let's turn your vision into a
            digital masterpiece!
          </p>

          <ul className="about__list">
            <li className="about__item">
              <b>Tools :</b> HTML, CSS, JavaScript.
            </li>
            <li className="about__item">
              <b>Framework :</b> React JS,Vite,Cra, Bootstrap, Tailwind CSS,Redux
              SCSS.
            </li>
            <li className="about__item">
              <b>Other :</b> Firebase,Styled-component.
            </li>
          </ul>

          <div className="about__buttons">
            <a
              href=".\components\resume.pdf"
              download="resume.pdf"
              target="blank"
              className="button__ghost"
            >
              Resume
            </a>

            <a
              href="http://linkedin.com/in/shri-meghna-v"
              target="_blank"
              className="button__ghost"
            >
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
