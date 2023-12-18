// default button

// inverted button

// google sign in button
import "./button.styles.scss";
const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      {...otherProps}
      //   button type submit er jonno otherprops neoa hoyeche. button type ja khusi hote pare
    >
      {children}
      {/* for three types of button we need to pass different name for buttons for that children have mentioned */}
    </button>
  );
};

export default Button;
