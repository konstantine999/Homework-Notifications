import "./notification.css";

function Notification(props) {
  return (
    <div className="notification-wrapper">
      <div className="line" style={{ backgroundColor: props.color }}></div>
      <img
        className="image"
        style={{ backgroundColor: props.color }}
        src={props.src}
      />
      <div className="notification-text-wrapper">
        <h2>{props.title}</h2>
        <p>{props.info}</p>
      </div>
    </div>
  );
}

export default Notification;
