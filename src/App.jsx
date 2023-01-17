// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FeedbackData from "./data/FeedbackData";
import { FeedbackContextProvider } from "./context/FeedbackContext";

// Components
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

// Pages
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
    // const deleteFeedback = (id) => {
    //     if (window.confirm("Are you sure you want to delete?")) {
    //         setFeedback((prev) => prev.filter((item) => item.id !== id));
    //     }
    // };

    // const handleAdd = (newFeedback) => {
    //     newFeedback.id = +uuidv4();
    //     setFeedback([newFeedback, ...feedback]);
    // };

    return (
        <FeedbackContextProvider>
            <Router>
                <Header />
                <div className="container main-body">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackContextProvider>
    );
}

export default App;
