// import React from 'react';
import { useState } from 'react';
import ContactRow from './ContactRow';
import PropTypes from 'prop-types';
const ContactTable = () => {

  function getRandomDate() {
    const now = new Date();
    const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    const randomTimestamp = Math.random() * (now.getTime() - oneYearAgo.getTime()) + oneYearAgo.getTime();
    const randomDate = new Date(randomTimestamp);

    const year = randomDate.getFullYear().toString().slice(-2); // Get the last two digits of the year
    const day = randomDate.getDate().toString().padStart(2, '0'); // Ensure day is two digits with leading zero if needed
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1 and ensure two digits

    return `${year}- ${day} -${month}`;
  }

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
            creationDate: getRandomDate(),
          };
          dummyData.push(lead);
        }
        
        return dummyData;
      }
      
      const dummyData = generateDummyData(40);
      
    const [contacts, setContacts] = useState(dummyData);


    const sortByName = () => {
      const sortedContacts = [...contacts].sort((a, b) =>
        a.leadName.localeCompare(b.leadName)
      );
      setContacts(sortedContacts);
      // setSortBy('name');
    };
    const sortByDate = () => {
      const sortedContacts = [...contacts].sort((a, b) =>
        a.creationDate.localeCompare(b.creationDate)
      );
      setContacts(sortedContacts);
      // setSortBy('name');
    };

    
  return (
    <>
    <button className='sort-buttons' onClick={sortByName}>Sort by Name</button>
    <button onClick={sortByDate}>Sort by Date</button>
    <table className="contact-table">
      <thead>
        <tr>
          <th className='fsd'>Lead Name</th>
          <th className='fsd'>Company</th>
          <th className='fsd'> Email</th>
          <th className='fsd'>Phone</th>
          <th className='fsd'>Website</th>
          <th className='fsd'>CreationDate</th>
        </tr>
      </thead>
      <tbody>

        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
    </>
  );
  
};

ContactTable.propTypes = {
    contactData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// console.log(ContactTable.propTypes.contactData);
export default ContactTable;