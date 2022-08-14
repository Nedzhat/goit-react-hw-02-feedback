import PropTypes from 'prop-types';

import { DescNotify } from "./Notification.styled"

export const Notification = ({ message }) => {
    return <DescNotify>{message}</DescNotify>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};