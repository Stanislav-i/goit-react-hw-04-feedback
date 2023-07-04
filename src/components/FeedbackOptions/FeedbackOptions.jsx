import css from './Buttons.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        type="button"
        id="good"
        className={css.btnstyle}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        id="neutral"
        className={css.btnstyle}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        id="bad"
        className={css.btnstyle}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};