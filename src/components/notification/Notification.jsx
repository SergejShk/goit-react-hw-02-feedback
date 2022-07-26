import PropTypes from 'prop-types';
import { MessageElStyled } from './Notification.styled';

const Notification = ({ message }) => {
  return <MessageElStyled>{message}</MessageElStyled>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
