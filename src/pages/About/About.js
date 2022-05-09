import React from 'react';

const About = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-6 p-5">
                    <h2 className='fw-bold'>This is why you need to eat fruit</h2>
                    <p>Fresh fruits are a great option for breakfast, snack or dessert. Most fruits are sweet and ready for you to eat without cooking or preparing a recipe. Take an apple, a peach, or a banana and just enjoy. Remember to always have fresh fruit available at home. If you have good choices available, you will make good choices.</p>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src="https://www.creativehealthyfamily.com/wp-content/uploads/2016/06/REASONS-TO-EAT-FRUIT-EVERY-DAY-fb-2.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;