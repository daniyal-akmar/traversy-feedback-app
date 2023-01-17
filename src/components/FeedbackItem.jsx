import React from "react";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";

// Components
import Card from "./Card";

const FeedbackItem = ({ item, handleDelete, editFeedback }) => {
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes size={18} color="purple" />
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit size={18} color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
};

FeedbackItem.propTypes = {
    id: PropTypes.string,
    rating: PropTypes.number,
    text: PropTypes.string,
};

export default FeedbackItem;
