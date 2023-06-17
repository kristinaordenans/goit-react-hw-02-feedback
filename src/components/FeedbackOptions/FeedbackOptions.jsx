import React from "react";

// options={} onLeaveFeedback={}

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return <div>
            {options.map(option=> {
               return <button
                           type="button"
                           name={option}
                           onClick={onLeaveFeedback}>{ option}</button>
                  })
               }
          </div>
}