type ExperienceEntry = {
  title: string
  duration: string
  location: string
  markerColor: "sky" | "fuchsia"
}

const experience: ExperienceEntry[] = [
  {
    title: "Software Engineer - Cognivinta",
    duration: "Aug 2025 - Present",
    location: "Mohali, India",
    markerColor: "sky",
  },
  {
    title: "Back-end Developer - GSEES",
    duration: "Jul 2024 - Aug 2025",
    location: "Delhi, India",
    markerColor: "fuchsia",
  },
  {
    title: "Back-end Developer - GSEES (Intern)",
    duration: "Jan 2024 - Mar 2025",
    location: "Delhi, India",
    markerColor: "sky",
  },
]

export default function Experience() {
  return (
    <section className="experience-section">
      <h2>Experience</h2>

      <div className="timeline-container">
        <div className="timeline-line" aria-hidden="true"></div>
        <div className="timeline-items">
          {experience.map((entry) => (
            <div className="timeline-item" key={entry.title}>
              <span className={`timeline-dot ${entry.markerColor}`}></span>
              <h3 className="job-title">{entry.title}</h3>
              <p className="job-duration">
                {entry.duration} <strong>({entry.location})</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
