import { useState } from "react"

const Comment = ({ comment, onEditComment, onAddComment, onDeleteComment }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="comment-card">
      {comment?.replies?.length > 0 && <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Open'}</button>}
      <button onClick={() => onEditComment(comment.id)}>Edit</button>
      <button onClick={() => onAddComment(comment.id)}>Add</button>
      <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
      <div className="comment-details">
        <span>{comment.text}</span>
        <span>By - {comment.author}</span>
      </div>
      {isOpen && comment?.replies?.length > 0 && comment?.replies?.map((child) =>
        <Comment comment={child} onEditComment={onEditComment} onAddComment={onAddComment} onDeleteComment={onDeleteComment} />)}
    </div>
  )
}

export default Comment