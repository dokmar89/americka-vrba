import Image from 'next/image';

export default function Care() {
  return (
    <section className="care-section" id="pece">
      <div className="care-section-container">
        <h2 className="section-title">JAK UDRŽOVAT NAŠE PLETENÉ VRBY</h2>
        <div className="care-content">
          <div className="care-image">
            <Image
              src="/galerie/vrba_americka_design5.jpg"
              alt="Péče o vrbu"
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
          <div className="care-steps">
            <div className="care-step">
              <div className="care-step-number">1</div>
              <div className="care-step-content">
                <h3>ZALÉVÁNÍ</h3>
                <p>Pravidelně zalévejte, zejména v prvních několika týdnech po výsadbě. Udržujte vlhkou půdu, zejména za slunečných a větrných letních dnů.</p>
              </div>
            </div>
            <div className="care-step">
              <div className="care-step-number">2</div>
              <div className="care-step-content">
                <h3>VHODNÉ MÍSTO</h3>
                <p>Nejlépe roste na slunných a na vodu bohatých místech. Vhodná pro zahrady i terasy.</p>
              </div>
            </div>
            <div className="care-step">
              <div className="care-step-number">3</div>
              <div className="care-step-content">
                <h3>PRAVIDELNÉ ÚPRAVY</h3>
                <p>Jednou ročně zastřihněte přerostlé výhonky a pravidelně zastřihávejte korunu - více zastřihávání dává lepší tvar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 