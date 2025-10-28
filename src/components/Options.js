// import React from "react";  //rafce import

// const Options = ({ question }) => {
//   return (
//     <div className="options">
//       {question.options.map((option) => (
//         <button className="btn btn-option" key={option}>
//           {option}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Options;

//rfc snippit import
function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
