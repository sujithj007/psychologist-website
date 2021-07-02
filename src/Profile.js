import logo from "./logo.png";
import { BiPhoneCall } from "react-icons/bi";
import "./Profile.scss";
import image6 from "./image6.jpg";

function App() {
  return (
    <div>
      <div className="header">
        <img src={logo} className="logo" alt="" />
        <div className="header-name">Psychologist</div>
        <div className="phone-cont">
          <BiPhoneCall /> 144-133-1222
        </div>
      </div>

      <div className="banner-cont">
        <div className="banner-left">
          <div className="heading-1">Psychotheraphy </div>
          <div className="heading-2"> for your needs </div>
          <div className="text">
            Psychologists can be seen as practicing within two general
            categories of psychology: applied psychology which includes
            practitioners or professionals, and research-orientated psychology
            which includes scientists, or scholars.
          </div>
          <div className="btn-cont">
            <button className="contact">Contact Us</button>
          </div>
        </div>
        <div className="banner-right"></div>
      </div>

      <div className="topics-cont">
        <div className="topics-first-cont">
          <div className="topic-heading">
            I can help you in <span className="highlighter">Psychoterapy</span>{" "}
            and <span className="highlighter">Psychology areas</span> . Below
            are listed only some of topics we can work on .
          </div>
          <img src={image6} className="doctor-image"></img>
        </div>

        <div className="topics-list">
          <div className="topics-list-items">
            <div className="item-1">Anxiety</div>
            <div className="item-2">
              Anxiety is an emotion characterized by an unpleasant state of
              inner Trauma
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Anxiety</div>
            <div className="item-2">
              Anxiety is an emotion characterized by an unpleasant state of
              inner Trauma
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Anxiety</div>
            <div className="item-2">
              Anxiety is an emotion characterized by an unpleasant state of
              inner Trauma
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Anxiety</div>
            <div className="item-2">
              Anxiety is an emotion characterized by an unpleasant state of
              inner Trauma
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Anxiety</div>
            <div className="item-2">
              Anxiety is an emotion characterized by an unpleasant state of
              inner Trauma
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Anxiety</div>
            <div className="item-2">
              Anxiety is an emotion characterized by an unpleasant state of
              inner Trauma
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
