import logo from "../assets/images/l.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-details">
        <h1 className="about-title">Lakshay Bisht aka lakshaybxt</h1>

        <h2>About Me</h2>
        <p>
          Hey! I'm Lakshay, a Software Developer from Delhi, India, currently
          working with Java and building scalable backend and full-stack
          applications. I have around 3 years of professional experience working
          with{" "}
          <strong>
            Java, Spring Boot, Microservices, React, AWS, Kafka, SQL, and Docker
          </strong>
          .
        </p>

        <h2>What I Do</h2>
        <p>
          I enjoy designing and building backend systems, developing REST APIs,
          working with event-driven architectures, and solving performance and
          scalability problems. I've worked across different parts of the stack,
          from backend services and databases to cloud deployments and frontend
          applications.
        </p>

        <p>
          I like understanding how systems work under the hood — from a simple
          API request to distributed services communicating through Kafka.
        </p>

        <p>One cup of Java, is all it takes.</p>

        <p>
          I'm always open to interesting engineering opportunities,
          collaborations, and building things that solve real problems.{" "}
          <a href="#">Let's connect.</a>
        </p>
      </div>

      <div className="about-picture">
        <div className="bg"></div>
        <img src={logo} alt="Lakshay profile picture" />
      </div>
    </section>
  );
}
