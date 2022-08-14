import PropTypes from 'prop-types';

import { Box } from 'components/Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return <Box width="600px"
        height="400px"
        m="100px auto 30px"
        padding="50px"
        border="normal"
        borderColor="text"
        borderRadius="15px"
        boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)"
        backgroundColor="bgTable">
        <Title>{title}</Title>{children}
        </Box>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};