import "./loader.scss";
import loader from "../../img/loader.gif";

export const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};
