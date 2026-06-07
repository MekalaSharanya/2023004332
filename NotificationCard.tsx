export default function NotificationCard({
  notification,
}: any) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h3>{notification.type}</h3>
      <p>{notification.message}</p>
      <small>{notification.timestamp}</small>
    </div>
  );
}