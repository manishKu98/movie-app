import './form.css';

function Form() {
  return (
    <div>
      <form className="form">
        <h3 className="form-heading">Get Annual MemberShip for just 6.5$...</h3>
        <lable className="">Name</lable>
        <input type="text" className="text-area" />
        <lable className="">Contact Number</lable>
        <input type="text" className="text-area" />
        <lable className="">Email</lable>
        <input type="email" className="text-area" />
        <lable className="">Password</lable>
        <input type="text" className="text-area" />
        <input type="submit" className="submit-btn" />
      </form>
      <h4 className="mobile-apps">Get Our Mobile Apps..</h4>
      <div className="download-btns">
        <div className="apple button">

          <img alt="apple-logo" className="icon" src="https://w7.pngwing.com/pngs/640/461/png-transparent-apple-logo-company-apple-logo-company-service-computer.png" />
          <div className="content-wrapper">
            <span className="download">Download on the</span>
            <span className="app">App Store</span>
          </div>
        </div>

        <div className="play button">
          <img alt="andriod-logo" className="icon" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Google_Play_Prism.max-1100x1100.png" />
          <div className="content-wrapper">
            <span className="get">GET IT ON</span>
            <span className="google">Google Play</span>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Form;
