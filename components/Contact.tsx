import React, { useRef } from 'react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        alert('Zpráva byla úspěšně odeslána!');
        formRef.current?.reset();
      } else {
        throw new Error(data.error || 'Něco se pokazilo');
      }
    } catch (error) {
      console.error('Chyba:', error);
      alert('Při odesílání zprávy došlo k chybě. Prosím zkuste to znovu.');
    }
  };

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
              <span>info@americkavrba.cz</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <span>Pačlavice 212, 768 34 Pačlavice</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Vaše jméno</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Vaše emailová adresa, na kterou Vám můžeme odpovědět</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Co nám chcete sdělit?</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Odeslat zprávu</button>
          </form>
        </div>
      </div>
    </section>
  );
} 