export default function Contact() {
  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-container">
        <div className="contact-info">
          <h3>Kontaktujte nás</h3>
          <p>Máte dotaz nebo zájem o naše vrby? Neváhejte nás kontaktovat!</p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <span>+420 602 668 085</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <span>mifran.oil@seznam.cz</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span>Pačlavice 212, 768 34 Pačlavice</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Jméno</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Zpráva</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Odeslat zprávu</button>
          </form>
        </div>
      </div>
    </section>
  );
} 