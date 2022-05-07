import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='footer'>
            <div className='footer-bg p-5 text-white ' >
                <div className="row">
                    <div className="col-md-3">
                        <img className='img-fluid w-50 mb-3' src="https://cdn.shopify.com/s/files/1/0309/2968/2571/files/Obrien-Logo_125x@2x.png?v=1595923730" alt="" />
                        <p className='text-white'>Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. Fruits also provide a wide range of health-boosting antioxidants, including flavonoids.</p>

                    </div>
                    <div className="col-md-3">
                        <div className='footer-child'>
                            <h2 className='text-center'>Information</h2>
                            <ul>
                                <li>Our company</li>
                                <li>Contact Us</li>
                                <li>Our services</li>
                                <li>Why we?</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='footer-child'>
                            <h2 >Quicklink</h2>
                            <ul>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Shop</li>
                                <li>Conatct</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">

                        <div className='footer-child'>
                            <h2 className='text-center'>Support</h2>
                            <ul>
                                <li>Online support</li>
                                <li>Shipping policy</li>
                                <li>Privecy policy</li>
                                <li>Terms of service</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom p-3 text-white'>
                <p>copyright &copy; {year}</p>
            </div>
        </div>

    );
};

export default Footer;