import "./App.css";
import Notification from "./Components/Notification/Notification";
import Success from "./Images/Success.png";
import Error from "./Images/Error.png";
import Warning from "./Images/Warning.png";
import Info from "./Images/Info.png";

function App() {
  const notificationArray = [
    {
      id: 1,
      color: "#00CC99",
      img: Success,
      title: "Success",
      info: "Order Placed Successfully. You can check order delivery status.",
    },
    {
      id: 2,
      color: "#EB5757",
      img: Error,
      title: "Error",
      info: "Order Placed Successfully. You can check order delivery status.",
    },
    {
      id: 3,
      color: "#F2C94C",
      img: Warning,
      title: "Warning",
      info: "Order Placed Successfully. You can check order delivery status.",
    },
    {
      id: 4,
      color: "#5458F7",
      img: Info,
      title: "Info",
      info: "Order Placed Successfully. You can check order delivery status.",
    },
  ];

  return (
    <div className="App">
      {notificationArray.map((item) => {
        return (
          <Notification
            color={item.color}
            src={item.img}
            title={item.title}
            info={item.info}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default App;
