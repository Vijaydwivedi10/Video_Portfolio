import React from 'react';
import '../css/Popup.css'; // Make sure to create a CSS file for the Popup styles

function Popup({ onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="popup-close-button" onClick={onClose}>
                    &times; {/* Close button */}
                </button>
                <h2 className="popup-heading">Why Me?</h2>
                <p className="popup-paragraph">
                    Here are a few reasons why you should consider me:
                </p>
                <ul className="popup-list">
                    <li className="popup-list-item">
                        I graduated from IIT Ropar with a degree in Computer Science and Engineering, which demonstrates my 
                        <b>  technical skills </b> and the ability to learn anything quickly. Check out my degree 
                        <a href="https://drive.google.com/file/d/1MlahYg7nmqXmvE_yAPc-ecVfEdAt7rOQ/view" className="popup-link"> here</a>.
                    </li>
                    <li className="popup-list-item">
                        Although I graduated from a <b>  technical field </b>, I chose designing because of my passion 
                        and creativity, which aligns with my future goals. This decision shows just how <b>  passionate  </b> 
                        I am.
                    </li>
                    <li className="popup-list-item">
    I possess a strong skill set in <b> Premiere Pro </b>, <b> Figma </b>, <b> After Effects </b>, <b> Photoshop </b>, <b> Canva </b>, <b> CapCut </b>, <b> ReactJS </b>, <b> CSS </b>, and <b> Material UI </b>. These tools empower me to transform ideas into captivating visual narratives and engaging user experiences.
</li>

                    <li className="popup-list-item">
                        I am committed to working <b> 12 hours a day, 7 days a week </b>, which shows my dedication and 
                        passion for delivering results in this field.
                    </li>
                    <li className="popup-list-item">
                        I have worked with both CIPLA (a corporate giant) and Kroop AI (a startup), demonstrating my capability 
                        to adapt and thrive in different environments while producing excellent outcomes.
                    </li>
                    <li className="popup-list-item">
                        With <b> 1 year of corporate experience </b>, I have become highly <b> disciplined </b> and a 
                        strong team player.
                    </li>
                    <li className="popup-list-item">
                        I have pitched my own startup idea on various platforms, including physically at IIT Kanpur. My 
                        <a href="https://docs.google.com/presentation/d/1s49MqMVy-ruM2vyNDAJ_Q6JdBkjnS1ZGTDqUqFQ6xZ0/edit#slide=id.g26b582913a8_0_382" className="popup-link"> pitch deck</a> (Ask permission) and 
                        <a href="https://drive.google.com/drive/folders/1McwUfLfmkx9pciBWiY6H68_TTV_AL30V" className="popup-link"> certificates</a> showcase my creativity and in-depth 
                        knowledge of the startup world.
                    </li>
                    <li className="popup-list-item">
                        I was a dancer for 3-4 years, winning many competitions along the way. You can check out my dance 
                        performances on my Instagram 
                        <a href="https://www.instagram.com/_vijaydwivedi/" className="popup-link"> here</a>, further proof of my creativity.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Popup;
