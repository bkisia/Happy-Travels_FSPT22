import React, { useState } from 'react';


const FAQ = ({ faqs }) => {
    return (
      <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
        
        <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    );
  };
  
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div style={{ marginBottom: '15px' }}>
        <button
          onClick={toggle}
          style={{
            width: '100%',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            borderBottom: '1px solid #ccc',
            padding: '10px 0',
            fontSize: '18px',
            cursor: 'pointer',
            outline: 'none',
          }}
          aria-expanded={isOpen}
        >
          {question}
        </button>
        {isOpen && (
          <div style={{ padding: '10px 0', fontSize: '16px', lineHeight: '1.5' }}>
            {answer}
          </div>
        )}
        
      </div>
      
    );
  };
  


// About = () => {
//     // A array of FAQs  
  
  
//     // FAQItem representing each FAQ entry
//     const FAQItem = ({ faq }) => {
//       const [isOpen, setIsOpen] = useState(false);
  
//       return (
//         <div style={{ marginBottom: '20px', borderBottom: '1px solid #DDD' }}>
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             style={{
//               width: '100%',
//               textAlign: 'left',
//               background: 'none',
//               border: 'none',
//               padding: '15px',
//               fontSize: '18px',
//               color: '#333',
//               cursor: 'pointer',
//               outline: 'none',
//             }}
//             aria-expanded={isOpen}
//           >
//             {faq.question}
//           </button>
//           <div style={{ maxHeight: isOpen ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
//             <p style={{ padding: '0 15px 15px', margin: '0', fontSize: '16px', color: '#666' }}>
//               {faq.answer}
//             </p>
//           </div>
//         </div>
//       );
//     };
  
//     return (
//       <div style={{ maxWidth: '800px', margin: 'auto', padding: '40px 20px' }}>
//         <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#333' }}>About Happy-Travels.io</h1>
//         <section>
//           {faqs.map((faq, index) => (
//             <FAQItem key={index} faq={faq} />
//           ))}
//         </section>
//         <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '16px', color: '#666' }}>
//           For more detailed information, don't hesitate to reach out to our support team or visit our comprehensive guide section on Happy-Travels.io.
//         </p>
//       </div>
//     );
//   };

export default FAQ;