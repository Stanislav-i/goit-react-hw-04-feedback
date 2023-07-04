import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  total,
  percentage,
}) => {
  return (
      <div className={css.statdiv}>
      <h1 className={css.title}>Statistics</h1>

      {total > 0 ? (
        <>
          <p className={css.pstat}>Good: {goodValue}</p>
          <p className={css.pstat}>Neutral: {neutralValue}</p>
          <p className={css.pstat}>Bad: {badValue}</p>
          <p className={css.pstat}>Total: {total}</p>
          <p className={css.pstat}>Positive feedback: {percentage}%</p>
        </>
      ) : (
        <p className={css.pstat}>There is no feedback</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  goodValue: PropTypes.number,
  neutralValue: PropTypes.number,
  badValue: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.string,
};
