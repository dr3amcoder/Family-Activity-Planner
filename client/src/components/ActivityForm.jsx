import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

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
    <Box component="form" className="planner-form" onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Location"
          name="location"
          value={formState.location}
          onChange={onChange}
          placeholder="City or postcode"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PlaceOutlinedIcon color="primary" fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <FormControl fullWidth>
          <InputLabel id="age-group-label">Children's age group</InputLabel>
          <Select
            labelId="age-group-label"
            label="Children's age group"
            name="ageGroup"
            value={formState.ageGroup}
            onChange={onChange}
          >
            {ageGroups.map((age) => (
              <MenuItem key={age} value={age}>
                {age}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="activity-type-label">Activity type</InputLabel>
          <Select
            labelId="activity-type-label"
            label="Activity type"
            name="activityType"
            value={formState.activityType}
            onChange={onChange}
          >
            {activityTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="budget-label">Budget</InputLabel>
          <Select
            labelId="budget-label"
            label="Budget"
            name="budget"
            value={formState.budget}
            onChange={onChange}
            startAdornment={
              <InputAdornment position="start">
                <AttachMoneyOutlinedIcon color="primary" fontSize="small" />
              </InputAdornment>
            }
          >
            {budgets.map((budget) => (
              <MenuItem key={budget} value={budget}>
                {budget}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="time-label">Time available</InputLabel>
          <Select
            labelId="time-label"
            label="Time available"
            name="timeAvailable"
            value={formState.timeAvailable}
            onChange={onChange}
            startAdornment={
              <InputAdornment position="start">
                <AccessTimeOutlinedIcon color="primary" fontSize="small" />
              </InputAdornment>
            }
          >
            {times.map((time) => (
              <MenuItem key={time} value={time}>
                {time}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Box component="fieldset" sx={{ border: 0, m: 0, p: 0 }}>
        <Typography
          component="legend"
          sx={{ alignItems: "center", display: "flex", fontWeight: 800, gap: 1, mb: 1.25 }}
        >
          <TuneRoundedIcon color="primary" fontSize="small" />
          Preferences
        </Typography>
        <Box className="preference-grid">
          {preferences.map((preference) => {
            const checked = formState.preferences.includes(preference);
            return (
              <FormControlLabel
                className="preference-option"
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => onTogglePreference(preference)}
                    color="primary"
                  />
                }
                key={preference}
                label={preference}
              />
            );
          })}
        </Box>
      </Box>

      <Button fullWidth startIcon={<SearchRoundedIcon />} type="submit" variant="contained">
        Find activities
      </Button>
    </Box>
  );
}
