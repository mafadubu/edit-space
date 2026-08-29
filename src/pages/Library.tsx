import { motion } from 'framer-motion';
import { books } from '../data';

const Library = () => {
    const libraryBooks = books.filter(b => !b.isWIP && !b.isMilestone);

    return (
        <div className="library-page">
            <div className="puzzle-grid">
                {libraryBooks.map((book, index) => (
                    <motion.div
                        key={book.id}
                        className={`grid-item ${book.size}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            loading="lazy"
style={
    book.id === '26-2' ? {
        width: '128px',
        height: '189px',
        objectFit: 'contain',
        margin: 'auto'
    } : book.id === '26-3' ? {
        width: '190px',
        height: '258px',
        objectFit: 'contain',
        margin: 'auto'
    } : {}
}
                        />
                        <div className="grid-item-overlay" style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            padding: '10px',
                            background: 'rgba(0,0,255,0.85)',
                            color: 'white',
                            fontSize: '0.75rem',
                            opacity: 0,
                            transition: 'opacity 0.2s ease',
                        }}>
                            <p className="mono" style={{ margin: 0 }}>{book.title}</p>
                            <p className="mono" style={{ margin: '3px 0 0 0', fontSize: '0.65rem' }}>
                                {book.year} / {book.month || '---'}
                            </p>
                        </div>
                        <style>{`
              .grid-item:hover .grid-item-overlay {
                opacity: 1;
              }
            `}</style>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Library;
