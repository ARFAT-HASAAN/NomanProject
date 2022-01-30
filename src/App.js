import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const lecture = [
    {
      id: 1,
      title: "How We Lose Our Iman",
      src: "https://i.ytimg.com/vi/iPx4VcM91V4/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=DNC3y9rJI9c",
    },
    {
      id: 2,
      title: "Understanding Our History ",
      src: "https://i0.wp.com/muslimgirl.com/wp-content/uploads/2017/09/accused1.jpg?fit=960%2C640&ssl=1",
      link: "https://www.youtube.com/watch?v=iPx4VcM91V4",
    },
    {
      id: 3,
      title: "Essentials of Islam",
      src: "https://i.ytimg.com/vi/kktXOxEqYJc/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=kktXOxEqYJc",
    },
  ];

  return (
    <div className="App">
      <FavSchooler />
      <About
        about="Nouman Ali Khan is a Pakistani-American Islamic speaker and Arabic instructor who 
      founded the Bayyinah Institute for Arabic and Qur’anic Studies after serving as an instructor of 
      Arabic at Nassau Community College."
      />
      {/* <Lecture /> */}
      <div className="LectureContainer">
        {lecture.map((lecture) => (
          <Lecture
            title={lecture.title}
            src={lecture.src}
            href={lecture.link}
            key={lecture.id}
          />
        ))}
      </div>
      <Nomanage />
      <NomansStudent></NomansStudent>
    </div>
  );
}

function FavSchooler() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        padding: "10px",
        fontWeight: "bold",
        fontSize: "2rem",
      }}
    >
      <p> Noman Ali Khan </p>
    </div>
  );
}

function About(props) {
  return (
    <div
      style={{
        marging: "20px",
        padding: "25px",
        textAling: "left",
        fontWeight: "bold",
        fontSize: "3rem",
        color: "gray",
      }}
    >
      <img src="https://i0.wp.com/muslimgirl.com/wp-content/uploads/2017/09/accused1.jpg?fit=960%2C640&ssl=1"></img>
      <p>{props.about}</p>
    </div>
  );
}

function Lecture(props) {
  const { title, src, href } = props;
  return (
    <div className="lectureCard">
      <img src={src} alt="orator" />
      <h1>{title}</h1>
      <a href={href}>
        <button> see from youtube</button>{" "}
      </a>
    </div>
  );
}

function Nomanage() {
  const [age, setAge] = useState("");

  const SeeTheAge = () => {
    setAge("43");
  };
  return (
    <div>
      <h2> Noman age :{age}</h2>
      <button className="btn" onClick={SeeTheAge}>
        {" "}
        see
      </button>
    </div>
  );
}

function NomansStudent() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div>
      <h1>Graduate Student of Noman Ali Khan</h1>
      <div className="container">
        {students.map((st) => (
          <Students
            name={st.name}
            key={st.id}
            email={st.email}
            phone={st.phone}
          />
        ))}
      </div>
    </div>
  );
}

function Students(props) {
  console.log(props);
  const { name, phone, email } = props;
  return (
    <div className="card">
      <h5>{name}</h5>
      <h5>{email}</h5>
      <h5>{phone}</h5>
    </div>
  );
}

export default App;
