import "./App.css";
import ProjectCard from "./components/ProjectCard";
import Kenvorisa from "./assets/Kenvorisa.png";
import Moodz from "./assets/Moodz.png";
import Headshot from "./assets/headshot.jpg";

function App() {
  return (
    <div className="app">
      <section className="greeting-container">
        <h1 className="greeting-left">HOLA / HEI / HELLO</h1>
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
        <ProjectCard
          url="https://kevingarciamartin.github.io/e-commerce/"
          github="https://github.com/kevingarciamartin/e-commerce"
          image={Kenvorisa}
          paragraph="Kenvorisa is an intuitive e-commerce site built on vanilla JavaScript, fetching data from the Fake Store API, where buyers are able to filter products by category, add them to a cart, and simulate completing their purchase through a checkout form. We were a team of six developers using agile methodology, where I took on the role of Scrum Master."
        />
        <ProjectCard
          url="https://moodzz.netlify.app/"
          github="https://github.com/vijayanatarajan-coder/moodz"
          image={Moodz}
          paragraph="Moodz is a fun React-based CRUD web application which gives users the possibility to collect music playlists according to different moods in their everyday lives. Through a search bar, users are able to look up songs fetched from the AudioDB API, create a playlist with a title of their choosing and save the song to said list. They can also rename or delete the playlist, as well as remove tracks from it."
        />
      </section>
      <section className="contact-container">
        <div className="contact-left">
          <h1 className="contact-heading">CONTACT</h1>
          <div className="email-flex">
            <span className="email-icon"></span>
            <p className="email">sergioprin24@gmail.com</p>
          </div>
          <div className="socials-flex">
            <span className="github-icon"></span>
            <span className="linkedin-icon"></span>
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
