import { Link } from 'react-router-dom'
import { problems } from '../problems/registry'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <h1>Machine Round Questions</h1>
      <p className="home-lead">Each demo is a separate route with its own code and styles.</p>
      <ul className="home-list">
        {problems.map((problem) => (
          <li key={problem.path}>
            <Link to={problem.path} className="home-link">
              <span className="home-link-title">{problem.title}</span>
              <span className="home-link-desc">{problem.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
