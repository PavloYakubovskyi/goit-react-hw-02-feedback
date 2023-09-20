import { OptionsItem } from "./Statistics.styled";

const Statistics = ({
  options: { good, neutral, bad },
  total,
  positivePercentage,
}) => {
  return (
    <ListOptions>
      <OptionsItem>Good: {good}</OptionsItem>
      <OptionsItem>Neutral: {neutral}</OptionsItem>
      <OptionsItem>Bad: {bad}</OptionsItem>
      <OptionsItem>Total: {total}</OptionsItem>
      <OptionsItem>Positive feedback: {positivePercentage}%</OptionsItem>
    </ListOptions>
  );
};

export default Statistics;
