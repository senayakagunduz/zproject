import React from 'react'
import AdminTemplate from '../../templates/admin-template'
import ContactMessageEdit from '../../components/admin/contact-messages/contact-message-edit';

const AdminContactMessageEditPage = () => {
  return (
    <div>
        <AdminTemplate>
          <ContactMessageEdit/>
        </AdminTemplate>
    </div>
  )
}

export default  AdminContactMessageEditPage;
