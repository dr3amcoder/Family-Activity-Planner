import React from "react";
import { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ActivityForm from "./components/ActivityForm.jsx";
import ActivityList from "./components/ActivityList.jsx";
import { activities } from "./data/activities.js";
import { palette } from "./theme.js";
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
    <Box component="main" sx={{ minHeight: "100vh" }}>
      <Box className="intro-band">
        <Container maxWidth="lg">
          <Box className="intro-copy">
            <Typography className="eyebrow" component="p">
              Family Activity Planner
            </Typography>
            <Typography component="h1" variant="h1">
              Find a plan that fits the kids, the day, and the budget.
            </Typography>
            <Typography component="p" variant="h6" sx={{ color: "rgba(255,255,255,0.86)" }}>
            Answer a few quick questions and get practical family-friendly activity ideas with
            clear costs, timings, age ranges, and match reasons.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Box className="planner-shell" aria-label="Activity planner">
          <Paper
            elevation={0}
            sx={{
              border: `1px solid ${palette.sage}`,
              p: { xs: 2, md: 3 },
            }}
          >
            <Typography component="h2" variant="h5" sx={{ mb: 2 }}>
              Plan preferences
            </Typography>
          <ActivityForm
            formState={formState}
            onChange={handleChange}
            onTogglePreference={handleTogglePreference}
            onSubmit={handleSubmit}
          />
          </Paper>
        <ActivityList activities={suggestedActivities} hasSearched={Boolean(submittedPreferences)} />
        </Box>
      </Container>
    </Box>
  );
}
