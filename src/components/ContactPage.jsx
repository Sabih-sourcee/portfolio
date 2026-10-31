import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <main className="contact-page">
            <p className="section-label">contact</p>
            <h1 className="contact-title">Let&apos;s build something</h1>
            <p className="lede">Open to opportunities. AI Engineer at a company.</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <label className="field">
                    <span>name</span>
                    <input type="text" name="name" autoComplete="name" />
                </label>
                <label className="field">
                    <span>email</span>
                    <input type="email" name="email" autoComplete="email" />
                </label>
                <label className="field">
                    <span>message</span>
                    <textarea name="message" rows={5} />
                </label>
                <button type="submit" className="submit">send message</button>
            </form>

            <p className="inline-links">
                <a href="https://github.com/sabih-source/" target="_blank" rel="noopener noreferrer">github</a>
                <a href="#linkedin">linkedin</a>
                <a href="#twitter">twitter</a>
                <a href="#email">email</a>
            </p>

            <p className="back-link">
                <Link to="/">back home</Link>
            </p>
        </main>
    );
}
