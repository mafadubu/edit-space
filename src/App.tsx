import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Main from './pages/Main';
import Info from './pages/Info';
import Library from './pages/Library';
import Notes from './pages/Notes';
import './index.css';

function App() {
  return (
    <Router basename="/edit-space">
      <div className="layout-container">
        <header className="header">
          <div className="header-logo-group">
            <img src="/edit-space/goat.png" alt="Goat Logo" className="goat-logo" />
            <h1 className="header-title">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                EDIT SPACE
              </NavLink>
            </h1>
          </div>
          <nav className="nav-links">
            <NavLink to="/info" className={({ isActive }) => isActive ? 'active' : ''}>INFO</NavLink>
            <NavLink to="/notes" className={({ isActive }) => isActive ? 'active' : ''}>NOTES</NavLink>
            <NavLink to="/library" className={({ isActive }) => isActive ? 'active' : ''}>LIBRARY</NavLink>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>

        <footer className="mono">
          <p>© {new Date().getFullYear()} EDIT SPACE / ANTIGRAVITY. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
