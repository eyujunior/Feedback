import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    setFeedback((prev) => {
      if (window.confirm('Are you sure you want to delete this feedback')) {
        setFeedback(
          feedback.filter((item) => {
            return item.id !== id
          })
        )
      }
    })
  }
  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList handleDelete={deleteFeedback} feedback={feedback} />
      </div>
    </>
  )
}

export default App
