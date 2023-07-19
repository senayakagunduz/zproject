import React from 'react'
import {
    BsHeadset,
    BsEnvelopeFill
  } from "react-icons/bs";
import {BiMap} from "react-icons/bi";
import {MdPhonelinkRing} from "react-icons/md";
import { settings } from '../../../../helpers/settings';
const Contact = () => {
  return (
   <ul className='contact-info'>
    <li><a href={`${settings.phone1}`}><BsHeadset/>{settings.phone1}</a></li>
    <li><a href={`${settings.phone2}`}><MdPhonelinkRing/>{settings.phone2}</a></li>
    <li><a href={`${settings.email}`}><BsEnvelopeFill/>{settings.email}</a></li>
    <li><a href={`${settings.adress}`}><BiMap/>{settings.adress}</a></li>
   </ul>
  )
}

export default Contact