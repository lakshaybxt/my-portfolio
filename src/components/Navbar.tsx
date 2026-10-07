import logo from "../assets/images/l.png"

const navigationItems = [
  { label: "Home", className: "home", href: "#home" },
  { label: "Projects", className: "projects", href: "#projects" },
  { label: "Blog", className: "blog", href: "#blog" },
]

export default function Navbar() {
  return (
    <header className="header" id="home">
      <div className="header-left">
        <img src={logo} alt="portfolio-image" />
      </div>
      <nav className="header-right">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li className={item.className} key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
