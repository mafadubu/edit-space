import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { books } from '../data';

const Main = () => {
    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    const [selectedMobileImage, setSelectedMobileImage] = useState<string | null>(null);

    // Group books by year
    const years = Array.from(new Set(books.map(b => b.year))).sort((a, b) => b - a);

    const handleBookClick = (e: React.MouseEvent, book: any) => {
        // Only show modal on mobile/touch (if window width is small)
        if (window.innerWidth <= 768 && book.image) {
            e.preventDefault();
            setSelectedMobileImage(book.image);
        }
    };

    return (
        <div className="main-page-container">
            <div className="main-page">
                {years.map(year => (
                    <section key={year} className="year-section">
                        <h2 className="year-title">{year}</h2>
                        <ul className="book-list">
                            {books
                                .filter(b => b.year === year)
                                .map(book => (
                                    <li
                                        key={book.id}
                                        className={`book-item ${book.isWIP ? 'wip-item' : ''}`}
                                        onMouseEnter={() => book.image && setHoveredImage(book.image)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                        onClick={(e) => handleBookClick(e, book)}
                                    >
                                        <span className="month-tag">
                                            {book.month ? `[${book.month}]` : `[---]`}
                                        </span>
                                        {book.isWIP ? (
                                            <span className="wip-title">{book.title}</span>
                                        ) : book.isMilestone ? (
                                            <div className="milestone-item">
                                                <span className="milestone-title">🔖 {book.title}</span>
                                            </div>
                                        ) : (
                                            <div className="book-title-group">
                                                <a href={book.link || '#'} onClick={(e) => !book.link && e.preventDefault()}>
                                                    📚 {book.title}
                                                </a>
                                                {book.tags && (
                                                    <div className="tag-group">
                                                        {book.tags.map(tag => (
                                                            <span key={tag} className="tag-box">{tag}</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                ))}
                        </ul>
                    </section>
                ))}
            </div>

            <div className="book-preview-side">
                <AnimatePresence>
                    {hoveredImage && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="book-preview-container"
                        >
                            <img
                                src={hoveredImage}
                                alt="Book Preview"
                                style={hoveredImage.includes('comfyui.png') ? {
                                    maxWidth: '300px', /* Matches the ~400px height of book5 */
                                    margin: '0 auto',
                                    display: 'block'
                                } : {}}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Preview Modal */}
            <AnimatePresence>
                {selectedMobileImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="preview-modal-overlay"
                        onClick={() => setSelectedMobileImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="preview-modal-content"
                        >
                            <span className="preview-modal-close" onClick={() => setSelectedMobileImage(null)}>×</span>
                            <img src={selectedMobileImage} alt="Mobile Book Preview" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Main;
