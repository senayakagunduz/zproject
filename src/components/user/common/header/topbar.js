import React from 'react'
import {
  BsFacebook,
  BsHeadset,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsEnvelopeOpen
} from "react-icons/bs";
import { settings } from '../../../../helpers/settings';

const Topbar = () => {
  return (
    <div className='topbar'>
      <ul className="contact-bar">
        <li><a href={`tel:${settings.phone1}`}><BsHeadset/>{settings.phone1}</a></li>
        <li className='d-none d-md-inline' ><a href={`tel:${settings.email}`}><BsEnvelopeOpen/>{settings.email}</a></li>
      </ul>
      <ul className="social-bar">
        <li><a href="https://instagram.com" target='_blank'  rel="noreferrer"><BsInstagram/></a></li>
        <li><a href="https://facebook.com" target='_blank'  rel="noreferrer"><BsFacebook/></a></li>
        <li><a href="https://youtube.com" target='_blank' rel="noreferrer"><BsYoutube/></a></li>
        <li><a href="https://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin/></a></li>
        <li className='d-none d-md-inline'><a href="https://twitter.com" target='_blank' rel="noreferrer"><BsTwitter/></a></li>
      </ul>
    </div>
  )
}

export default Topbar