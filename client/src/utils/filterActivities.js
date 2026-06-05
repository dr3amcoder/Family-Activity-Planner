const budgetRank = {
  Free: 0,
  "Low cost": 1,
  Flexible: 2,
};

export function filterActivities(activities, userPreferences) {
  return activities
    .map((activity) => {
      const matchReasons = getMatchReasons(activity, userPreferences);
      return { ...activity, matchReasons, score: matchReasons.length };
    })
    .filter((activity) => activity.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function getMatchReasons(activity, userPreferences) {
  const reasons = [];
  const selectedPreferences = userPreferences.preferences ?? [];

  if (activity.type === userPreferences.activityType) {
    reasons.push(`Matches your ${activity.type.toLowerCase()} interest`);
  }

  if (activity.ageGroups.includes(userPreferences.ageGroup)) {
    reasons.push(`Suitable for ages ${userPreferences.ageGroup}`);
  }

  if (budgetRank[activity.cost] <= budgetRank[userPreferences.budget]) {
    reasons.push(`${activity.cost} option`);
  }

  if (userPreferences.timeAvailable === "Under 2 hours" && activity.duration === "Under 2 hours") {
    reasons.push("Fits your short time window");
  }

  if (userPreferences.timeAvailable === "Half day" && activity.duration !== "Full day") {
    reasons.push("Fits a half-day plan");
  }

  selectedPreferences.forEach((preference) => {
    if (activity.preferences.includes(preference)) {
      reasons.push(preference);
    }
  });

  return [...new Set(reasons)];
}
