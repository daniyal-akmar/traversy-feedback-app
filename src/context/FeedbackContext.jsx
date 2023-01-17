import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";

const feedbackContext = createContext();

const FeedbackContextProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackToEdit, setFeedbackToEdit] = useState({
        item: {},
        edit: false,
    });

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback((prev) => prev.filter((item) => item.id !== id));
        }
    };

    const handleAdd = (newFeedback) => {
        console.log("Adding");
        // let uniqueId = uuidv4();
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const updateFeedback = (feedbackToUpdate) => {
        setFeedback((prev) =>
            prev.map((item) =>
                item.id === feedbackToEdit.item.id
                    ? {
                          ...item,
                          ...feedbackToUpdate,
                      }
                    : item
            )
        );
        setFeedbackToEdit({
            item: {},
            edit: false,
        });
    };

    const editFeedback = (item) => {
        console.log("Item: ", item);
        setFeedbackToEdit({
            item: item,
            edit: true,
        });
    };

    return <feedbackContext.Provider value={{ feedback, deleteFeedback, handleAdd, feedbackToEdit, editFeedback, updateFeedback }}>{children}</feedbackContext.Provider>;
};

export { FeedbackContextProvider, feedbackContext };
