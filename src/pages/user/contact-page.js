import React from 'react'
import UserTemplate from '../../templates/user-template'
import PageHeader from '../../components/user/common/page-header/page-header'
import Spacer from '../../components/common/spacer/spacer'
import ContactForm from '../../components/user/contact/contact-form/contact-form'
import Map from '../../components/user/contact/map/map'

const ContactPage = () => {
  return (
    <UserTemplate>
      <PageHeader title={"Contact us"}/>
      <Spacer/>
      <ContactForm/>
      <Spacer/>
      <Map/>
    </UserTemplate>
  )
}

export default ContactPage