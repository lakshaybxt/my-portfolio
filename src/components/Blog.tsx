import { blogPosts } from "../data/blogs"

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-calendar size-3"
      aria-hidden="true"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function TimerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-timer size-3"
      aria-hidden="true"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}

export default function Blog() {
  return (
    <section className="blog-section" id="blog">
      <h2>Most recent posts</h2>

      <div className="blog-container">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.href}>
            <div className="blog-image">
              <img src={post.image} alt={post.imageAlt} />
            </div>

            <div className="blog-content">
              <a href={post.href} target="_blank" rel="noopener noreferrer">
                <h3>{post.title}</h3>
              </a>

              <div className="blog-meta">
                <div className="time">
                  <CalendarIcon />
                  <time>{post.date}</time>
                </div>

                <div className="read">
                  <TimerIcon />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <p className="description">{post.description}</p>

              <ul className="blog-tags">
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <a href="#">{tag}</a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
