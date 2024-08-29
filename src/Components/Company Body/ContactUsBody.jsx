import React, { useEffect, useState } from 'react'
import '../../assets/scss/contact-us.scss'
import { Link, useNavigate } from 'react-router-dom';
import img1 from   '../../assets/Images/c-icon.png'
import img2 from   '../../assets/Images/c-icon-2.png'
import img3 from   '../../assets/Images/c-icon-3.png'

const ContactUsBody = () => {
  return (
    <div className="contact-us">
    <div className='ContactBody'>
    <div className="contactBodyText row">
      <div className="contactBodyTextParent col-lg-12">
          <div className="contactBodyTextChild">
              <h1>Do you have any query, contact us</h1>
              <p>Him have deep brought life darkness firmament unto move</p>
          </div>
      </div>
    </div>
    <div className="contactBodyAdress row">
      <div className="contactBodyAdressParent col-lg-4 col-md-12">
          <div className="contactBodyAdressParentChild">
              <div className="contactBodyAdressParentChildTop">
                  <h1>Get in tourch </h1>
                  <p>Lights under light thing doesn't sixth set made blessed make.</p>
              </div>
              <div className="contactBodyAdressParentChildButtom">
                  <ul>
                  <li>
                      <div className="listRight">
                      <img src={img1} alt="" />
                      </div>
                      <div className="listLeft">
                      <h3>Office Adress</h3>
                      <p>Buffelo city W 38th Street New York, NY 10018</p>
                      </div>
                  </li>
                  <li>
                      <div className="listRight">
                      <img src={img2} alt="" />
                      </div>
                      <div className="listLeft">
                      <h3>Email</h3>
                      <p>nfosaas@xisen.com</p>
                      </div>
                  </li>
                  <li>
                      <div className="listRight">
                      <img src={img3} alt="" />
                      </div>
                      <div className="listLeft">
                      <h3>Phone</h3>
                      <p>+02 - (256) 3265 235</p>
                      </div>
                  </li>
                  </ul>
              </div>
          </div>
      </div>
      <div className="contactBodyMailParent col-lg-8 col-md-12">
          <div className="contactBodyMailParentChild">
              <form action="">
                  <input type="text" name='name' placeholder='FULL NAME' />
                  <input type="email" name='email' placeholder='EMAiL' />
                  <input type="Subject" name='Subject' placeholder='SUBJECT' />
              <textarea name="message" cols="30" rows="10" placeholder="write message"></textarea>
              <button type="submit" class="x-btn btn-black">send message</button>
              </form>
          </div>
      </div>
    </div>
  </div>
  <div className="googleMap">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d64928336.573608555!2d57.2460996697573!3d-6.657931376757788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1724922506208!5m2!1sen!2sng"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  </div>
  )
}

export default ContactUsBody

