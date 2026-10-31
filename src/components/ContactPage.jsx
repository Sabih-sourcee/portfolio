import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <main className="page">
            <h1 className="contact-title">Let&apos;s build something</h1>
            <p className="plain">Open to opportunities. AI Engineer at a company.</p>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <label className="field">
                    <span>Name</span>
                    <input type="text" name="name" autoComplete="name" />
                </label>
                <label className="field">
                    <span>Email</span>
                    <input type="email" name="email" autoComplete="email" />
                </label>
                <label className="field">
                    <span>Message</span>
                    <textarea name="message" rows={5} />
                </label>
                <button type="submit" className="submit">Send message</button>
            </form>

            <p className="plain">
                <a href="https://github.com/sabih-source/" target="_blank" rel="noopener noreferrer">GitHub</a>
                {' · '}
                <a href="#linkedin">LinkedIn</a>
                {' · '}
                <a href="#twitter">Twitter</a>
                {' · '}
                <a href="#email">Email</a>
            </p>
            <p className="plain"><Link to="/">Home</Link></p>
        </main>
    );
}
