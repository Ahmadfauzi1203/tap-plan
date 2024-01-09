import React from "react";

const DnaPage = () => {
  return (
    <div id="dna-page">
      <div className="hero">
        <img src="/img/dna/dna-hero.png" alt="" />
        <span>
          <div className="line"></div>
          <h1>Triputra DNA</h1>
        </span>
      </div>

      <div className="title">
        <div className="wrapper">
          <p>
            Triputra DNA is a Guiding Values for Insan Triputra/ Triputra
            Individuals to manifest Triputra Group’s reason for being, which is
            “We exist because of Indonesia, by Indonesia and for Indonesia”.
            <br /> As Guiding Values, Triputra DNA is declaring as the unifier
            of diversity in the Triputra Group, so that whatever the position;
            wherever the company is; and until whenever Triputra Individuals
            shall have the same values.
          </p>
          <img src="/img/dna/dna-hero.png" alt="" />
        </div>
      </div>

      <ul>
        <li className="integrity">
          <div>
            <img src="/img/dna/ICON_INTEGRITY.png" alt="" />
            <h1>Integrity and Ethics</h1>
            <h5>“To live a life in honesty and transparency”</h5>
            <ul>
              <li>&#8226; Walk the Talk.</li>
              <li>&#8226; Do not Blame Others.</li>
              <li>&#8226; Do what you have to do, not what you want to do.</li>
              <li>&#8226; Speak by data.</li>
            </ul>
          </div>
        </li>
        <li className="excellence">
          <div>
            <img src="/img/dna/ICON_EXCELLENCE.png" alt="" />
            <h1>Excellence</h1>
            <h5>"To give more than expected under any circumstances”</h5>
            <ul>
              <li>&#8226; Never give up and play to win.</li>
              <li>
                &#8226; Disciplined execution, continuous improvement and
                innovation.
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li className="compassion">
          <div>
            <img src="/img/dna/ICON_COMPASSION.png" alt="" />
            <h1>Compassion</h1>
            <h5>"To give humanity a nobler cause than one’s own”</h5>
            <ul>
              <li>&#8226; Care with truthful act.</li>
              <li>&#8226; Nurturing for greater good.</li>
            </ul>
          </div>
        </li>
        <li className="humility">
          <div>
            <img src="/img/dna/ICON_HUMILITY.png" alt="" />
            <h1>Humility</h1>
            <h5>
              "To be a person with humility, openness, and in constant
              improvement"
            </h5>
            <ul>
              <li>&#8226; Egoless and open-minded.</li>
              <li>&#8226; Express gratitude and appreciations.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DnaPage;
