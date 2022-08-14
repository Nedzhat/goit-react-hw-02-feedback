import PropTypes from 'prop-types';

import { Box } from "components/Box"
import { TitleStat, DescStat } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, onTotal, onCheckPercentage }) => {
  return <Box as="section"
          display="flex" flexDirection="column" alignItems="center">
          <TitleStat>Statistics</TitleStat>
          <DescStat>Good: {good}</DescStat>
          <DescStat>Neutral: {neutral}</DescStat>
          <DescStat>Bad: {bad}</DescStat>
          <DescStat>Total: {onTotal}</DescStat>
          <DescStat>Positive feedback: {onCheckPercentage}%</DescStat>
        </Box>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onCheckPercentage: PropTypes.number.isRequired,
};