import React from "react";
import { useMemo, useState } from "react";
import ActivityForm from "./components/ActivityForm.jsx";
import ActivityList from "./components/ActivityList.jsx";
import { activities } from "./data/activities.js";
import { filterActivities } from "./utils/filterActivities.js";

const initialFormState = {
  location: "",
  ageGroup: "6-8",
  activityType: "Outdoor",
  budget: "Low cost",
  timeAvailable: "Under 2 hours",
  preferences: ["No booking required"],
};

export default function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [submittedPreferences, setSubmittedPreferences] = useState(null);

  const suggestedActivities = useMemo(() => {
    if (!submittedPreferences) return [];
    return filterActivities(activities, submittedPreferences);
  }, [submittedPreferences]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function handleTogglePreference(preference) {
    setFormState((current) => {
      const hasPreference = current.preferences.includes(preference);
      return {
        ...current,
        preferences: hasPreference
          ? current.preferences.filter((item) => item !== preference)
          : [...current.preferences, preference],
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedPreferences(formState);
  }

  return (
    <main>
      <section className="intro-band">
        <div className="intro-copy">
          <p className="eyebrow">Family Activity Planner</p>
          <h1>Find a plan that fits the kids, the day, and the budget.</h1>
          <p>
            Answer a few quick questions and get practical family-friendly activity ideas with
            clear costs, timings, age ranges, and match reasons.
          </p>
        </div>
      </section>

      <section className="planner-shell" aria-label="Activity planner">
        <div className="form-panel">
          <h2>Plan preferences</h2>
          <ActivityForm
            formState={formState}
            onChange={handleChange}
            onTogglePreference={handleTogglePreference}
            onSubmit={handleSubmit}
          />
        </div>
        <ActivityList activities={suggestedActivities} hasSearched={Boolean(submittedPreferences)} />
      </section>
    </main>
  );
}
