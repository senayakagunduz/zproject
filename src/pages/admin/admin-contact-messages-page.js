import React from 'react'
import AdminTemplate from '../../templates/admin-template'
import ContactMessages from '../../components/admin/contact-messages/contact-messages'

const AdminContactMessagesPage = () => {
  return (
    <div>
        <AdminTemplate>
          <ContactMessages/>
        </AdminTemplate>
    </div>
  )
}

export default AdminContactMessagesPage