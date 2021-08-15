import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const goodHandleIncrement = () => {
    setGoodFeedback((prevState) => prevState + 1);
  };

  const neutralHandleIncrement = () => {
    setNeutralFeedback((prevState) => prevState + 1);
  };

  const badHandleIncrement = () => {
    setBadFeedback((prevState) => prevState + 1);
  };

  const countTotalFeedback = () => {
    return goodFeedback + neutralFeedback + badFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (goodFeedback * 100) / (goodFeedback + neutralFeedback + badFeedback)
    );
  };

  return (
    <div>
      <Section text="Please leave feedback">
        <FeedbackOptions
          goodHandleIncrement={goodHandleIncrement}
          neutralHandleIncrement={neutralHandleIncrement}
          badHandleIncrement={badHandleIncrement}
        />
      </Section>

      <Section>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

// countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100)/(this.state.good + this.state.neutral + this.state.bad))
// }

// render(){
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

// }
