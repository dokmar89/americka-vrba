"use client"
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Jak často musím vrbu zalévat?",
      answer: "Voda, voda, voda! KAŽDÝ den během prvních několika týdnů, dokud se dobře neusadí, a od té doby vždy udržujte vlhkost. Pokud v hrnci, postavte jej do podšálku a ujistěte se, že je v něm vždy voda, nebo ještě lépe, použijte ozdobnou nádobu s integrovanou nádržkou. Pokud je zasazena do země, opět zalévejte prvních několik týdnů denně a po založení dobře každý týden první sezónu. Pak se o sebe postará, pokud nenastane sucho. Vrby není možné přelévat – dokonce milují podmáčenou půdu."
    },
    {
      question: "Jak často bych měl oříznout topiární korunku?",
      answer: "Měli byste se snažit stříhat jednou až čtyřikrát za sezónu – méně, pokud chcete efekt ledabylého růstu, a častěji, pokud chcete hustý, formální styl takzvaně „box-hedge“."
    },
    {
      question: "Jak hluboko zasadit?",
      answer: "Hrubým pravidlem je, aby pod povrchem bylo minimálně 15 % celkové délky. Nejdůležitější je však velmi tvrdé zpevnění – mnohem více než při sázení běžných rostlin."
    },
    {
      question: "Mohu pěstovat svou vrbu uvnitř?",
      answer: "V žádném případě! Vrba potřebuje být venku – má ráda chladné, vlhké podmínky a bude se potýkat s nedostatkem světla a tepla, ať už v interiéru, nebo v zimní zahradě, bude čím dál více chřadnout a po několika týdnech umírá. Na zimu je ani nemusíte nijak chránit – jsou 100% mrazuvzdorné."
    }, {
      question: "Zasadit do květináče nebo do země?",
      answer: "Oboje! Pokud do květináče, pak se ujistěte, že má adekvátní velikost – alespoň tak velkou jako koruna, kterou chcete pěstovat. Každá rostlina v nádobě musí být samozřejmě vždy dobře zalévána."
    }, {
      question: "Na listech se objevily černé skvrny, co je příčinou a je to problém?",
      answer: "Existují 3 choroby vrb – strupovitost, antraknóza a rakovina. Odrůdy, které používáme, jsou vysoce odolné vůči těmto infekcím, takže jsou zřídka infikovány, ale za určitých podmínek mohou být mladé rostliny občas napadeny. Pokud je zasaženo pouze několik listů, jednoduše je seberte a opatrně zlikvidujte."
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
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 