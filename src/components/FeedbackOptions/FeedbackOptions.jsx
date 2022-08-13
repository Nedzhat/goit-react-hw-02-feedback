import { Box } from "components/Box";
import { Btn } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const arrBtn = Object.keys(options);

    return <Box p={3}
    display="flex" justifyContent="space-evenly" >{arrBtn.map((value, idx) => {
        return <Btn onClick={onLeaveFeedback} key={idx}>{value}</Btn>
    })}
    </Box>
}