import "./App.css";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import Kenvorisa from "./assets/Kenvorisa.png";
import Ready from "./assets/Ready.png";
import Moodz from "./assets/Moodz.png";
import Medicentral from "./assets/Medicentral.png";
import Headshot from "./assets/headshot.jpg";
import Email from "./assets/email.png";
import Github from "./assets/github2.png";
import LinkedIn from "./assets/linkedin.png";

function App() {
  return (
    <div className="app">
      <section className="greeting-container">
        <h1 className="greeting-left">HOLA, HEI, HELLO</h1>
        <div className="greeting-right">
          <hr className="greeting-divider" />
          <p className="greeting-text">
            Welcome! My name is Sergio, and I am a front-end developer based in
            Oslo.
            <br />
            <br /> I have a keen interest in people and tech, always trying to
            learn something new wherever I go 😊
          </p>
        </div>
      </section>
      <section className="project-container">
        <h2 className="project-heading">
          A collection of projects I have worked on
        </h2>
        <div className="project-cards">
          <ProjectCard
            url="https://kevingarciamartin.github.io/e-commerce/"
            github="https://github.com/kevingarciamartin/e-commerce"
            image={Kenvorisa}
            description={[
              <b>Kenvorisa</b>,
              " is an intuitive e-commerce site built on vanilla JavaScript, fetching data from the Fake Store API, where buyers are able to filter products by category, add them to a cart, and simulate completing their purchase through a checkout form. We were a team of six developers using agile methodology, where I took on the role of Scrum Master.",
            ]}
          />
          <ProjectCard
            url="https://astounding-marshmallow-db06c6.netlify.app/"
            github="https://github.com/prinsergioprin/quiz-game"
            image={Ready}
            description={[
              <b>Are you ready?</b>,
              " is an interactive quiz game built on vanilla JavaScript, fetching data from the Open Trivia API. The quiz features 10 randomized multiple-choice questions from different categories, gives players immediate feedback on their answers, and displays the final score at the end.",
            ]}
          />
          <ProjectCard
            url="https://moodzz.netlify.app/"
            github="https://github.com/vijayanatarajan-coder/moodz"
            image={Moodz}
            description={[
              <b>Moodz</b>,
              " is a fun React-based CRUD web application which gives users the possibility to collect music playlists according to different moods in their everyday lives. Through a search bar, users are able to look up songs fetched from the AudioDB API, create a playlist with a title of their choosing and save the song to said list. They can also rename or delete the playlist, as well as remove tracks from it.",
            ]}
          />
          <ProjectCard
            url="https://www.figma.com/design/ZcDi7Ny7CShInMmTKIEWtk/Medicentral-(Team-7)?node-id=0-1&t=EiofjKUfdAs5vRow-1"
            github="https://github.com/azilinskaite/medicentral-app"
            image={Medicentral}
            description={[
              <b>Medicentral (WIP)</b>,
              " is a web application that makes patient data easily accessible to medical professionals by gathering all information in one place. We were a team of four developers that designed the prototype in Figma and gathered user feedback from people in the healthcare industry to improve the user experience. This application is currently being developed in React.",
            ]}
          />
        </div>
      </section>
      <section className="contact-container">
        <div className="contact-left">
          <h1 className="contact-heading">CONTACT</h1>
          <div className="email-flex">
            <a href="mailto:sergioprin24@gmail.com" target="blank">
              <img src={Email} alt="Send me an email" />
            </a>
            <p className="email">sergioprin24@gmail.com</p>
          </div>
          <div className="socials-flex">
            <a href="https://github.com/prinsergioprin" target="blank">
              <img src={Github} alt="My Github profile" />
            </a>
            <a href="https://www.linkedin.com/in/sergioprin/" target="blank">
              <img src={LinkedIn} alt="My LinkedIn profile" />
            </a>
          </div>
          <hr className="contact-divider" />
        </div>
        <div className="contact-right">
          <img src={Headshot} className="headshot" alt="headshot" />
        </div>
      </section>
    </div>
  );
}

export default App;
