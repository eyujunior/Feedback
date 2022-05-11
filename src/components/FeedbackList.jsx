import PropTypes from 'prop-types'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return 'no feedback to display'
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => {
        return (
          <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
        )
      })}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

export default FeedbackList
