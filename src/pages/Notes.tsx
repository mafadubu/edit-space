import { notes } from '../data';
import { Link } from 'react-router-dom';

const Notes = () => {
    // Group notes by year
    const years = Array.from(new Set(notes.map(n => n.year))).sort((a, b) => b - a);

    return (
        <div className="main-page-container">
            <div className="main-page">
                {years.map(year => (
                    <section key={year} className="year-section">
                        <h2 className="year-title">{year}</h2>
                        <ul className="book-list">
                            {notes
                                .filter(n => n.year === year)
                                .map(note => (
                                    <li key={note.id} className="book-item">
                                        <span className="month-tag">
                                            [{note.month}]
                                        </span>
                                        <div className="book-title-group">
                                            {note.link.startsWith('http') ? (
                                                <a href={note.link} target="_blank" rel="noopener noreferrer">
                                                    📝 {note.title}
                                                </a>
                                            ) : (
                                                <Link to={note.link}>
                                                    📝 {note.title}
                                                </Link>
                                            )}
                                            {note.tags && (
                                                <div className="tag-group">
                                                    {note.tags.map(tag => (
                                                        <span key={tag} className="tag-box">{tag}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Notes;
