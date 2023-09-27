const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  const keys = Object.keys(options);
  return (
    <>
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
