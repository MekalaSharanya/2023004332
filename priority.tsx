"use client";

import NotificationCard from "../../components/NotificationCard";
import { notifications } from "../../data/notifications";

const priorityWeight: any = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export default function PriorityPage() {
  const topNotifications = [...notifications]
    .sort((a, b) => {
      const p =
        priorityWeight[b.type] -
        priorityWeight[a.type];

      if (p !== 0) return p;

      return (
        new Date(b.timestamp).getTime() -
        new Date(a.timestamp).getTime()
      );
    })
    .slice(0, 10);

  return (
    <div>
      <h1>Priority Inbox</h1>

      {topNotifications.map((n) => (
        <NotificationCard
          key={n.id}
          notification={n}
        />
      ))}
    </div>
  );
}