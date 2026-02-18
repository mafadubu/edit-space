import { info } from '../data';

const Info = () => {
    return (
        <div className="info-page">
            <div className="info-content">
                <section className="info-section">
                    <span className="info-label mono">Name</span>
                    <p className="info-value">{info.name}</p>
                </section>

                <section className="info-section">
                    <span className="info-label mono">Bio</span>
                    <p className="info-value">{info.bio}</p>
                </section>

                <section className="info-section">
                    <span className="info-label mono">Company</span>
                    <p className="info-value">{info.company}</p>
                </section>

                <section className="info-section">
                    <span className="info-label mono">EMAIL</span>
                    <p className="info-value">
                        <a href={`mailto:${info.email}`}>{info.email}</a>
                    </p>
                </section>

                <section className="info-section">
                    <span className="info-label mono">X</span>
                    <p className="info-value">
                        <a href={`https://x.com/${info.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                            {info.twitter}
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Info;
