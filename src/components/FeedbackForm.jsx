import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { feedbackContext } from "../context/FeedbackContext";

// Components
import Card from "./Card";
import Button from "./Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = () => {
    const { handleAdd, feedbackToEdit, updateFeedback } = useContext(feedbackContext);

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (feedbackToEdit.edit) {
            setText(feedbackToEdit.item.text);
            setRating(feedbackToEdit.item.rating);
        }
    }, [feedbackToEdit]);

    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true);
            setMsg("");
        } else if (text !== "" && text.trim().length < 10) {
            setBtnDisabled(true);
            setMsg("Input is less than 10 characters");
        } else {
            setBtnDisabled(false);
            setMsg("");
        }

        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                rating,
                text,
            };

            if (feedbackToEdit.edit) {
                updateFeedback(newFeedback);
            } else {
                handleAdd(newFeedback);
            }
            setText("");
        }
    };

    return (
        <Card>
            <h2>How would you rate your service with us?</h2>
            <form onSubmit={handleSubmit}>
                <RatingSelect selected={rating} changeSelected={setRating} />
                <div className="input-group">
                    <input type="text" value={text} onChange={handleTextChange} placeholder="Write a review" />
                    {feedbackToEdit.edit ? (
                        <Button type="submit">Edit</Button>
                    ) : (
                        <Button type="submit" isDisabled={btnDisabled}>
                            Send
                        </Button>
                    )}
                </div>
            </form>
            {msg && <p className="message">{msg}</p>}
        </Card>
    );
};

export default FeedbackForm;
