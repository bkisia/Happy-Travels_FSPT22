import React, { useState } from 'react';
import FAQ from './FAQ';
import womantraveler from "../assets/woman-booking-travel-plans.png";


const About = () => {

    const faqs = [
        {
            question: 'How can I start planning my trip with Happy-Travels.io?',
            answer: 'Begin by deciding on your destination and travel dates. Once you have that information, use our Happy-Travels.io platform to search for flights, read destination guides, and get personalised travel recommendations. Create an account to save your preferences and bookings.',
        },
        {
            question: 'How does the Happy-Travels.io flight search engine work?',
            answer: 'Our search engine connects you to a wide range of airlines and booking options. Enter your departure city, destination, and travel dates to see a list of available flights. You can filter results by price, duration, number of stops, and airline to find the perfect match for your needs.',
        },
        {
            question: 'What are the top safety tips for traveling?',
            answer: 'Stay aware of your surroundings, keep your valuables secure, and be cautious when using public Wi-Fi. Research local customs and safety advice for your destination. Additionally, always have a copy of important documents like your passport, and consider purchasing travel insurance.',
        },
        {
            question: 'How can I budget effectively for my travels?',
            answer: 'Determine your total travel budget and divide it into categories such as flights, accommodation, food, and activities. Use Happy-Travels.io to compare flight prices and set up alerts for deals. Consider traveling during the off-season or flying with budget airlines to save money.',
        },
        {
            question: 'Do you have any pro tips for having the best vacation experience?',
            answer: 'Absolutely! Be flexible with your travel plans to take advantage of deals and less crowded destinations. Mix popular tourist spots with local hidden gems for a balanced experience. Pack smart with essentials and always have backups for electronics. Most importantly, immerse yourself in the local culture and enjoy the moment.',
        },
        
    ];
  return (

  <div className="aboutPageMain">
     <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#333' }}>About Happy-Travels.io</h1>
                <div className = "aboutPageGif">
                {/* <img src={happytravelsgif} alt="happytravels-gif"/> */}
                <img src={womantraveler} alt="woman-traveler"/>
                </div>
              
                <center>
                <h1 className="aboutUsHeading">  About Us </h1>
                <h2 className="aboutUsInfo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, dolorum qui, possimus tenetur optio esse atque velit nihil incidunt laudantium voluptate voluptas aperiam, inventore magni. Dicta similique quisquam at quibusdam.</h2>
                </center>
  
                <h2 className="aboutGuideHeading">Getting started!</h2>
                <p className="aboutGuideBody">
                    <b className="howToHeading">How to Search for best prices!</b>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem veniam repudiandae tenetur voluptatum deleniti qui ad magni rerum laboriosam! Quisquam repudiandae doloribus vel quis aperiam recusandae mollitia perferendis, corrupti eligendi.
                </p>
  
  <FAQ faqs={faqs} />; 
  
  <p style={{ textAlign: 'center', marginTop: '40px', fontSize: '16px', color: '#666' }}>
          For more detailed information, don't hesitate to reach out to our support team or visit our comprehensive guide section on Happy-Travels.io.
        </p>
  </div>
    );
};


export default About;
