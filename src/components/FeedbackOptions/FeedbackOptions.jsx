import React from "react";
import {FeedbackBtn, BtnContainer} from './FeedbackOptions.styled'

// options={} onLeaveFeedback={}

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return <BtnContainer>
            {options.map(option=> {
               return <FeedbackBtn
                           type="button"
                           name={option}
                           onClick={onLeaveFeedback}>{ option}</FeedbackBtn>
                  })
               }
          </BtnContainer>
}