import React from "react";
import { useContext } from "react";
import { feedbackContext } from "../context/FeedbackContext";

const FeedbackStats = () => {
    const { feedback } = useContext(feedbackContext);

    let average =
        feedback.reduce((acu, cur) => {
            return acu + cur.rating;
        }, 0) / feedback.length;

    average = average.toFixed(1);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
};

export default FeedbackStats;
