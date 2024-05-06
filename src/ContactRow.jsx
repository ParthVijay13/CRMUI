import PropTypes from 'prop-types';
const ContactRow = ({ contact }) => {
  return (
    <tr>
      <td>{contact.leadName}</td>
      <td>{contact.company}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>{contact.website}</td>
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
    //   isHot: PropTypes.bool,
    //   isAppZone: PropTypes.bool,
    }).isRequired,
  };

export default ContactRow;