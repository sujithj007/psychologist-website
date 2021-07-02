import logo from "./logo.png";
import { BiPhoneCall } from "react-icons/bi";
import "./Profile.scss";
import image6 from "./image6.jpg";
import image2 from "./image2.jpg";

function App() {
  return (
    <div className="profile-cont">
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
            <div className="item-1">Phobia</div>
            <div className="item-2">
              A phobia is a type of anxiety disorder that causes an individual
              to experience extreme, irrational fear about a situation, living
              creature, place, or object.
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Addiction</div>
            <div className="item-2">
              Addiction is an inability to stop using a substance or engaging in
              a behavior even though it is causing psychological and physical
              harm.
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Deppression</div>
            <div className="item-2">
              Depression causes feelings of sadness and/or a loss of interest in
              activities you once enjoyed. It can lead to a variety of emotional
              and physical problems and can decrease your ability to function at
              work and at home.
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">Eating Disorders</div>
            <div className="item-2">
              Eating disorders—including anorexia nervosa, bulimia nervosa, and
              binge eating disorder—have the highest mortality rate of any
              mental illness.
            </div>
          </div>
          <div className="topics-list-items">
            <div className="item-1">False Memory</div>
            <div className="item-2">
              A false memory is a fabricated or distorted recollection of an
              event. Such memories may be entirely false and imaginary
            </div>
          </div>
        </div>
      </div>

      <div className="cooperation-cont">
        <div className="cooperation-first-cont">
          <div className="topic-heading">
            How cooperation <span className="highlighter">looks like?</span>{" "}
            <div className="text-2">
              You can consult a single case or we can have a long term
              relationship to dive into more complicated cases
            </div>
          </div>

          <img src={image2} className="doctor-image"></img>
        </div>
        <div></div>
      </div>

      <div className="experience-cont">
        <div className="items">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
