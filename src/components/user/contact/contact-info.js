import React from 'react'
import {
    BsHeadset,
    BsFillTelephoneFill,
    BsEnvelopeFill
  } from "react-icons/bs";
import {BiMap} from "react-icons/bi";
import { settings } from '../../../helpers/settings';
const Contact = () => {
  return (
   <ul>
    <li><a href={`${settings.phone1}`}><BsHeadset/>{settings.phone1}</a></li>
    <li><BsFillTelephoneFill/><a href={`${settings.phone2}`}>{settings.phone2}</a></li>
    <li><BsEnvelopeFill/><a href={`${settings.email}`}>{settings.email}</a></li>
    <li><BiMap/><a href={`${settings.adress}`}>{settings.adress}</a></li>
   </ul>
  )
}

export default Contact