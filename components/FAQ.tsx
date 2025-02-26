"use client"
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Jak často musím vrbu zalévat?",
      answer: "Každý den během prvních několika týdnů, dokud se dobře neusadí. Od té doby vždy udržujte vlhkost. Vrba se o sebe postará, pokud nenastane sucho. Milují podmáčenou půdu, takže nehrozí, že je přelijete."
    },
    {
      question: "Jak často bych měl zastřihávat korunku?",
      answer: "Měli byste se snažit stříhat alespoň jednou za sezónu – méně, pokud chcete aby rostla víc přirozeně, a častěji, pokud chcete hustý, formální styl takzvaný „box-hedge“."
    },
    {
      question: "Jak hluboko zasadit?",
      answer: "Hrubým pravidlem je, aby pod povrchem bylo minimálně 15 % celkové délky. Nejdůležitější je však velmi tvrdé zpevnění – mnohem více než při sázení běžných rostlin."
    },
    {
      question: "Mohu pěstovat svou vrbu uvnitř?",
      answer: "Vrba potřebuje být venku – má ráda chladné, vlhké podmínky a bude se potýkat s nedostatkem světla a tepla, ať už v interiéru, nebo v zahradě. Zchřadne a může umřít. Na zimu je ani nijak nemusíte chránit – odolávají mrazu."
    }, {
      question: "Zasadit do květináče nebo do země?",
      answer: "Můžete oboje. Pokud do květináče, pak se ujistěte, že má adekvátní velikost – alespoň tak velkou jako koruna, kterou chcete pěstovat. Každá rostlina v nádobě musí být samozřejmě vždy dobře zalévána."
    }, {
      question: "Na listech se objevily černé skvrny, co je příčinou a je to problém?",
      answer: "Existují 3 choroby vrb – strupovitost, antraknóza a rakovina. Odrůdy, které používáme, jsou vysoce odolné vůči těmto infekcím, takže jsou zřídka infikovány."
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <h2 className="section-title">ČASTO KLADENÉ OTÁZKY</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="faq-question"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <h3>{faq.question}</h3>
              <span className="faq-toggle">+</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 