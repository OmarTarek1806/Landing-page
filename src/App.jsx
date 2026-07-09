import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import { SiKick } from "react-icons/si";
import "./App.css";

function App() {
  const user = {
    name: "Abdelrahman Ahmed",
    title: "Mobile Developer & Content Creator",
    subtitle: "Flutter & Android Developer",
    email: "abdelrahmana.latif.11@gmail.com",
    phone: "01507197998",
    avatar: "/avatar.png",
    background: "/background.jpg",
    github: "https://github.com/AbdelrahmanAhmad313",
    linkedin: "https://linkedin.com/in/abdelrahman-ahmed-latif/",
  };

  const socials = [
    { icon: <FaWhatsapp />, link: `https://wa.me/2${user.phone}` },
    { icon: <FaLinkedinIn />, link: user.linkedin },
    { icon: <FaGithub />, link: user.github },
  ];

  return (
    <main className="page">
      <section
        className="hero"
        style={{ backgroundImage: `url(${user.background})` }}
      >
        <div className="overlay"></div>

        <div className="card">
          <div className="avatarBox">
            <img src={user.avatar} alt={user.name} />
          </div>

          <span className="tag">Personal Website</span>

          <h1>{user.name}</h1>
          <h2>{user.title}</h2>
          <p>{user.subtitle}</p>

          <div className="buttons">
            <a className="primaryBtn" href={`https://wa.me/2${user.phone}`}>
              Contact Me
            </a>

            <a className="secondaryBtn" href={user.github} target="_blank">
              View GitHub
            </a>
          </div>

          <div className="socials">
            {socials.map((item, index) => (
              <a href={item.link} target="_blank" key={index}>
                {item.icon}
              </a>
            ))}
          </div>

          <div className="contact">
            <a href={`mailto:${user.email}`}>
              <FaEnvelope /> {user.email}
            </a>
            <a href={`https://wa.me/2${user.phone}`}>
              <FaWhatsapp /> {user.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;