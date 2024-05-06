// import React from 'react';
import { useState } from 'react';
import ContactRow from './ContactRow';
import PropTypes from 'prop-types';
const ContactTable = () => {

    function generateDummyData(length) {
        const dummyData = [];
        const leadNames = ['John Doe', 'Alice Smith', 'Bob Johnson', 'Emma Brown', 'Michael Lee'];
        const companies = ['ABC Corp', 'XYZ Inc', '123 Company', 'Acme Co', 'Tech Solutions'];
        const domains = ['example.com', 'test.org', 'dummy.net', 'sample.io', 'demo.co'];
        
        for (let i = 1; i <= length; i++) {
          const lead = {
            id: i,
            leadName: leadNames[Math.floor(Math.random() * leadNames.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            email: `user${i}@${domains[Math.floor(Math.random() * domains.length)]}`,
            phone: `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 10000)}`,
            website: `www.${domains[Math.floor(Math.random() * domains.length)]}`,
            isHot: Math.random() < 0.5, // Randomly assign true or false
            isAppZone: Math.random() < 0.5, // Randomly assign true or false
          };
          dummyData.push(lead);
        }
        
        return dummyData;
      }
      
      const dummyData = generateDummyData(15);
      
    const [contacts, setContacts] = useState(dummyData);
  return (
    <table className="contact-table">
      <thead>
        <tr>
          <th>Lead Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
    
  );
  
};

ContactTable.propTypes = {
    contactData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ContactTable;