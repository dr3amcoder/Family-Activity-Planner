import React from "react";
import { Clock, MapPin, PiggyBank, Sparkles } from "lucide-react";

export default function ActivityCard({ activity }) {
  return (
    <article className="activity-card">
      <div className="card-heading">
        <div>
          <p className="activity-type">{activity.type}</p>
          <h3>{activity.name}</h3>
        </div>
        <span className="cost-badge">{activity.cost}</span>
      </div>
      <p>{activity.description}</p>
      <dl className="activity-meta">
        <div>
          <Clock aria-hidden="true" size={16} />
          <dt>Duration</dt>
          <dd>{activity.duration}</dd>
        </div>
        <div>
          <PiggyBank aria-hidden="true" size={16} />
          <dt>Cost</dt>
          <dd>{activity.cost}</dd>
        </div>
        <div>
          <MapPin aria-hidden="true" size={16} />
          <dt>Location</dt>
          <dd>{activity.locationType}</dd>
        </div>
      </dl>
      <div className="match-box">
        <Sparkles aria-hidden="true" size={16} />
        <div>
          <strong>Why it matches</strong>
          <p>{activity.matchReasons.slice(0, 3).join(", ")}</p>
        </div>
      </div>
      <p className="age-range">Suitable for: {activity.ageGroups.join(", ")}</p>
    </article>
  );
}
