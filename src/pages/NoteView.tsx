import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const NoteView = () => {
    const { id } = useParams<{ id: string }>();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!id) return;

        const fetchNote = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}notes/${id}/content.md`);
                if (!response.ok) throw new Error('Note not found');
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error("Error fetching note:", error);
                setContent('# Error loading note\n\nSorry, the requested note could not be found or failed to load.');
            } finally {
                setLoading(false);
            }
        };

        fetchNote();
    }, [id]);

    return (
        <div className="main-page-container">
            <div className="main-page note-view">
                <div>
                    <Link to="/notes" className="back-link">← Back to Notes</Link>
                </div>
                {loading ? (
                    <div className="loading-state">Loading...</div>
                ) : (
                    <div className="markdown-content">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NoteView;
