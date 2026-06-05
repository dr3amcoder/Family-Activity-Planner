import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ActivityCard from "./ActivityCard.jsx";
import { palette } from "../theme.js";

export default function ActivityList({ activities, hasSearched }) {
  if (!hasSearched) {
    return (
      <ResultsPanel>
        <Typography component="h2" variant="h5">
          Ready when you are
        </Typography>
        <Typography color="text.secondary">
          Choose a few preferences and the suggestions will appear here.
        </Typography>
      </ResultsPanel>
    );
  }

  if (activities.length === 0) {
    return (
      <ResultsPanel>
        <Typography component="h2" variant="h5">
          No close matches yet
        </Typography>
        <Typography color="text.secondary">
          Try loosening one preference or choosing a flexible budget.
        </Typography>
      </ResultsPanel>
    );
  }

  return (
    <ResultsPanel>
      <Box sx={{ mb: 2.5 }}>
        <Typography className="eyebrow" component="p">
          Suggested activities
        </Typography>
        <Typography component="h2" variant="h5">
          {activities.length} good {activities.length === 1 ? "match" : "matches"}
        </Typography>
      </Box>
      <Box className="activity-list">
        {activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} />
        ))}
      </Box>
    </ResultsPanel>
  );
}

function ResultsPanel({ children }) {
  return (
    <Paper
      component="section"
      elevation={0}
      sx={{
        border: `1px solid rgba(53, 102, 106, 0.16)`,
        minHeight: 480,
        p: { xs: 2, md: 3 },
      }}
    >
      {children}
    </Paper>
  );
}
