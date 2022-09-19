import "./mailList.css";

export default function MailList() {
  return (
    <div className="mail">
      <div className="mailTitle">
        <div className="mailDesc">
          <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
