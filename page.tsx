"use client";

import NotificationCard from "../components/NotificationCard";
import { notifications } from "../data/notifications";

export default function Home() {
  return (
    <div>
      <h1>All Notifications</h1>

      {notifications.map((n) => (
        <NotificationCard
          key={n.id}
          notification={n}
        />
      ))}
    </div>
  );
}