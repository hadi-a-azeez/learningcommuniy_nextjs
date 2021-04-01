import "tailwindcss/tailwind.css";
import ClipLoader from "react-spinners/ClipLoader";
//import PropTypes from "prop-types";

const Button = ({ label, classValues, onClick, isLoading, loadingText }) => {
  return (
    <>
      {!isLoading ? (
        <button
          className={`${classValues} flex justify-center items center`}
          onClick={(event) => onClick(event)}
        >
          {label}
        </button>
      ) : (
        <button
          className={`${classValues} opacity-75 flex justify-center items center`}
          disabled
        >
          {loadingText}
          <ClipLoader
            color="#ffffff"
            loading={isLoading}
            css="margin-left: 6px"
            size={20}
          />
        </button>
      )}
    </>
  );
};

Button.defaultProps = {
  isLoading: false,
  loadingText: "Loading",
};

export default Button;
