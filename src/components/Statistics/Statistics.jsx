import React from "react";
import {StatisticsContainer,StatisticsItem} from './Stratistics.styled'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <div>
        <StatisticsContainer>
            <StatisticsItem>Good:{good}</StatisticsItem>
            <StatisticsItem>Neutral:{neutral}</StatisticsItem>
            <StatisticsItem>Bad:{bad}</StatisticsItem>
            <StatisticsItem>Total:{total}</StatisticsItem>
            <StatisticsItem>PosistiveFeedback:{positivePercentage}%</StatisticsItem>
        </StatisticsContainer>
    </div>                
}

