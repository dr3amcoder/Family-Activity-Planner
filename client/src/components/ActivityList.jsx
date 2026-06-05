import React from "react";
import ActivityCard from "./ActivityCard.jsx";

export default function ActivityList({ activities, hasSearched }) {
  if (!hasSearched) {
    return (
      <section className="results-panel">
        <h2>Ready when you are</h2>
        <p>Choose a few preferences and the suggestions will appear here.</p>
      </section>
    );
  }

  if (activities.length === 0) {
    return (
      <section className="results-panel">
        <h2>No close matches yet</h2>
        <p>Try loosening one preference or choosing a flexible budget.</p>
      </section>
    );
  }

  return (
    <section className="results-panel">
      <div className="results-header">
        <div>
          <p className="eyebrow">Suggested activities</p>
          <h2>{activities.length} good {activities.length === 1 ? "match" : "matches"}</h2>
        </div>
      </div>
      <div className="activity-list">
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </div>
    </section>
  );
}
