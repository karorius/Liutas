import React from 'react';

export default function Accordion() {

    const [activeIndex, setActiveIndex] = React.useState(null);
  
    const faqItems = [
      {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices."
      },
      {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts."
      },
      {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space."
      }
    ];
    
  
    const handleClick = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="accordion">
        {faqItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <div className="accordion-header" onClick={() => handleClick(index)}>
              <p>{item.question}</p>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    );
}
  