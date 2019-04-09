import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0747991459266!2d44.174966949480535!3d15.372434861766104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603db8caf19811d%3A0x2b2f0a8526a7be64!2z2KzYp9mF2LnYqSDYp9mE2LnZhNmI2YUg2YjYp9mE2KrZg9mG2YjZhNmI2KzZitin!5e0!3m2!1sen!2s!4v1554810651453!5m2!1sen!2s"
                width="100%" 
                height="500px" 
                title="مكان فعالية لاب توكس"
                frameBorder="0" 
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>موقع الفعالية</div>
            </div>

        </div>
    );
};

export default Location;