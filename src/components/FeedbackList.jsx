import React from "react";
import { useContext } from "react";
import { feedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = () => {
    const { feedback, deleteFeedback: handleDelete, editFeedback } = useContext(feedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet!</p>;
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} editFeedback={editFeedback} />
            ))}
        </div>
    );
};

FeedbackList.propTypes = {
    feedback: PropTypes.array,
};

export default FeedbackList;
