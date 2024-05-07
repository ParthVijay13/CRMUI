import PropTypes from 'prop-types';
const ContactRow = ({ contact }) => {
  return (
    <tr>
      <td className='fsd'>{contact.leadName}</td>
      <td className='fsd'>{contact.company}</td>
      <td className='fsd'>{contact.email}</td>
      <td className='fsd'>{contact.phone}</td>
      <td className='fsd'>{contact.website}</td>
      <td className='fsd'>{contact.creationDate}</td>

      {/* Render red tags conditionally */}
      {/* {contact.isHot && <td className="red-tag">HOT</td>}
      {contact.isAppZone && <td className="red-tag">APP ZONE</td>} */}
    </tr>
  );
};
ContactRow.propTypes = {
    contact: PropTypes.shape({
      leadName: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      creationDate:PropTypes.string.isRequired,
    //   isHot: PropTypes.bool,
    //   isAppZone: PropTypes.bool,
    }).isRequired,
  };

export default ContactRow;