// import React from "react";
// import womantraveler from "../assets/woman-booking-travel-plans.png"


// export default function Contact(){
//     return(
//         <div className="contactPageImg">
//         <div class="contact-us-form">
//         <h2>Contact Us</h2>
//         <form id="contactForm">
//             <div class="form-group">
//                 <label for="name">Name</label>
//                 <input type="text" id="name" name="name" required></input>
//             </div>

//             <div class="form-group">
//                 <label for="email">Email</label>
//                 <input type="email" id="email" name="email" required></input>
//             </div>

//             <div class="form-group">
//                 <label for="message">Message</label>
//                 <textarea id="message" name="message" rows="4" required></textarea>
//             </div>

//             <button type="submit">Submit</button>
//         </form>
//         </div>

//         <div>
            
//             <img src={womantraveler} alt="woman-traveler"/>

//         </div>
//         </div>
//       );
//     };
  
  
    import React, { useRef } from "react";
    import womantraveler from "../assets/woman-booking-travel-plans.png";
    import emailjs from 'emailjs-com';
    
    export default function Contact() {
        const form = useRef();
    
        const sendEmail = (e) => {
            e.preventDefault();
    
            emailjs.sendForm('service_zo3rjlb', 'template_lqqp5pd', form.current, 'RvrFaInC-Br4m9VYo')
                .then((result) => {
                    console.log(result.text);
                    // Show a success message to the user
                }, (error) => {
                    console.log(error.text);
                    // Show an error message to the user
                });
        };
    
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
                <div style={{ maxWidth: '500px', width: '100%', marginBottom: '20px' }}>
                    <h2>Contact Us</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required style={{ width: '100%', padding: '10px', margin: '6px 0' }}/>
                        </div>
    
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required style={{ width: '100%', padding: '10px', margin: '6px 0' }}/>
                        </div>
    
                        <div style={{ marginBottom: '10px' }}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required style={{ width: '100%', padding: '10px', margin: '6px 0' }}></textarea>
                        </div>
    
                        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Submit
                        </button>
                    </form>
                </div>
    
                <div>
                    <img src={womantraveler} alt="woman-traveler" style={{ maxWidth: '500px', width: '100%' }}/>
                </div>
            </div>
        );
    }
    

