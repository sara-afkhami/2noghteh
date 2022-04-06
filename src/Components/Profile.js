import logo from "./DONOGHTE_LOGO_Donoghte_En_Fulllogo.png";
const Profile = (props) => {
  return (
    <div className="intro">
      <div className="col-md-12 intro-text">
        <div className="row space">
          <div className="col-md-2 icon">
            <img alt=" "></img>
          </div>
          <div className="col-md-10">
            <h1 className="space">
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p className="space">
              {props.data ? props.data.underTitle : "Loading"}
            </p>
            <p className="space">
              {props.data ? props.data.underTitle : "Loading"}
            </p>
          </div>
        </div>
        <div className="space">
          <p>{props.data ? props.data.paragraph : "Loading"}</p>
        </div>
        <img
          className="space"
          alt=""
          src={props.data ? props.data.image : "Loading"}
        />
      </div>
    </div>
  );
};
export default Profile;
