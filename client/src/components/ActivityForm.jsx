import React from "react";
import { Clock, MapPin, Search, SlidersHorizontal, Wallet } from "lucide-react";

const activityTypes = [
  "Outdoor",
  "Indoor",
  "Educational",
  "Creative",
  "Sports",
  "Nature",
  "Food-related",
  "Free or low-cost",
];

const ageGroups = ["Baby/toddler", "3-5", "6-8", "9-12", "Teenagers"];

const preferences = [
  "Free activities only",
  "Indoor only",
  "Outdoor only",
  "Accessible by public transport",
  "Suitable for rainy weather",
  "No booking required",
  "Short activity under 2 hours",
  "Full day activity",
];

const budgets = ["Free", "Low cost", "Flexible"];
const times = ["Under 2 hours", "1-2 hours", "Half day", "Full day"];

export default function ActivityForm({ formState, onChange, onTogglePreference, onSubmit }) {
  return (
    <form className="planner-form" onSubmit={onSubmit}>
      <div className="form-grid">
        <label>
          <span>Location</span>
          <div className="input-with-icon">
            <MapPin aria-hidden="true" size={18} />
            <input
              name="location"
              value={formState.location}
              onChange={onChange}
              placeholder="City or postcode"
            />
          </div>
        </label>

        <label>
          <span>Children's age group</span>
          <select name="ageGroup" value={formState.ageGroup} onChange={onChange}>
            {ageGroups.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Activity type</span>
          <select name="activityType" value={formState.activityType} onChange={onChange}>
            {activityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Budget</span>
          <div className="input-with-icon">
            <Wallet aria-hidden="true" size={18} />
            <select name="budget" value={formState.budget} onChange={onChange}>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </div>
        </label>

        <label>
          <span>Time available</span>
          <div className="input-with-icon">
            <Clock aria-hidden="true" size={18} />
            <select name="timeAvailable" value={formState.timeAvailable} onChange={onChange}>
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>

      <fieldset>
        <legend>
          <SlidersHorizontal aria-hidden="true" size={18} />
          Preferences
        </legend>
        <div className="preference-grid">
          {preferences.map((preference) => (
            <label className="check-option" key={preference}>
              <input
                type="checkbox"
                checked={formState.preferences.includes(preference)}
                onChange={() => onTogglePreference(preference)}
              />
              <span>{preference}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button className="primary-button" type="submit">
        <Search aria-hidden="true" size={18} />
        Find activities
      </button>
    </form>
  );
}
