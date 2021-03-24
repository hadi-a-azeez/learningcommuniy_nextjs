import InputField from "../../components/InputField";
import "tailwindcss/tailwind.css";
import { connect } from "react-redux";
import { setInfo } from "../../redux/actions/main";

const Join = (props) => {
  const { userInfo, setInfo } = props;

  const onChangeHandler = (value) => {
    setInfo(value);
  };

  const handleClick = () => {
    console.log(userInfo.mobileNumber);
  };

  return (
    <div className="md:container md:mx-auto flex flex-col items-center">
      <img src="input.jpg" className="w-full" alt="s" />
      <h1 className="mt-3 text-xl font-bold text-gray-600 font-sans">
        Be a community member
      </h1>
      <InputField
        label="Mobile Number"
        helperText="Please enter your 10 digit mobile number"
        value={userInfo.mobileNumber}
        onChange={onChangeHandler}
      />
      <button
        className="mt-3 pl-7 pr-7 p-2 bg-blue-600 text-white rounded-lg font-semibold w-4/5"
        onClick={handleClick}
      >
        Get OTP
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  setInfo: setInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Join);
