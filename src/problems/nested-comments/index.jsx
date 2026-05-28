import { useState } from "react";
import Comment from "./components/Comment";
import { commentsData } from "./constants";
import './nested-comments.css';

const NestedCommentsPage = () => {
  const [commentsTree, setCommentsTree] = useState(commentsData);

  const editComment = (tree, targetId, newText) => {
    return tree.map((comment) => {
      if (comment.id === targetId) {
        return {
          ...comment,
          text: newText
        }
      }
      if (comment.replies?.length > 0) {
        return {
          ...comment,
          replies: editComment(comment.replies, targetId, newText)
        }
      }
      return comment;
    });
  }

  const addComment = (tree, parentId, newComment) => {
    return tree.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [comment.replies, newComment]
        }
      }
      if (comment.replies) {
        return {
          ...comment,
          replies: addComment(comment.replies, parentId, newComment)
        }
      }
      return comment;
    })
  }

  const deleteComment = (tree, targetId) => {
    return tree.filter((comment) => comment.id !== targetId).map((child) => {
      if (child.replies?.length > 0) {
        return {
          ...child,
          replies: deleteComment(child.replies, targetId)
        }
      }
      return child;
    })
  }

  const handleCommentEdit = (id) => {
    const newText = prompt('Enter');
    if (!newText) return;

    setCommentsTree((prev) => editComment(prev, id, newText));
  };

  const handleCommentAdd = (id) => {
    const newCommentText = prompt('Enter');
    if (!newCommentText) return;

    const newCommentBy = prompt('By');
    if (!newCommentBy) return;

    const newComment = {
      id: Date.now(),
      text: newCommentText,
      author: newCommentBy,
      replies: [],
    }

    setCommentsTree((prev) => addComment(prev, id, newComment))
  }

  const handleCommentDelete = (id) => {
    setCommentsTree((prev) => deleteComment(prev, id));
  }

  return (
    <div>
      {commentsTree?.map((comment) =>
        <Comment comment={comment} onEditComment={handleCommentEdit} onAddComment={handleCommentAdd} onDeleteComment={handleCommentDelete} />)}
    </div>
  )
};

export default NestedCommentsPage;