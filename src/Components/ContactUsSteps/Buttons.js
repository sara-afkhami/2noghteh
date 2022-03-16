import { Button } from "react-bootstrap";

const Buttons = ({ prevStep }) => {
  return (
    <div className="btns">
      <Button onClick={prevStep}>
        <span>&#10229;</span>
      </Button>

      <Button className="btn1" type="submit" >
        <span>&#10230;</span>
      </Button>
    </div>
  );
};
export default Buttons;
