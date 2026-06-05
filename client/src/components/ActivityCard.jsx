import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import { palette } from "../theme.js";
import { formatCostLabel } from "../utils/formatCost.js";

export default function ActivityCard({ activity }) {
  return (
    <Card component="article" elevation={0} sx={{ height: "100%" }}>
      <CardContent sx={{ display: "grid", gap: 2, height: "100%" }}>
        <Stack direction="row" gap={2} justifyContent="space-between">
          <Box>
            <Typography
              component="p"
              sx={{ color: palette.coral, fontSize: 12, fontWeight: 900, textTransform: "uppercase" }}
            >
              {activity.type}
            </Typography>
            <Typography component="h3" variant="h6">
              {activity.name}
            </Typography>
          </Box>
          <Chip
            color={activity.cost === "Free" ? "primary" : "secondary"}
            label={formatCostLabel(activity.cost)}
            size="small"
            sx={{
              bgcolor: activity.cost === "Free" ? palette.sage : palette.peach,
              color: activity.cost === "Free" ? palette.ink : "#7A331E",
              flexShrink: 0,
            }}
          />
        </Stack>

        <Typography color="text.secondary">{activity.description}</Typography>

        <Box className="activity-meta">
          <MetaItem icon={<AccessTimeOutlinedIcon />} label="Duration" value={activity.duration} />
          <MetaItem icon={<SavingsOutlinedIcon />} label="Cost" value={formatCostLabel(activity.cost)} />
          <MetaItem icon={<PlaceOutlinedIcon />} label="Location" value={activity.locationType} />
        </Box>

        <Box
          sx={{
            alignItems: "flex-start",
            bgcolor: "rgba(152, 193, 187, 0.2)",
            border: `1px solid rgba(53, 102, 106, 0.16)`,
            borderRadius: 2,
            display: "flex",
            gap: 1.25,
            p: 1.5,
          }}
        >
          <AutoAwesomeOutlinedIcon color="primary" fontSize="small" />
          <Box>
            <Typography component="strong" sx={{ display: "block", fontWeight: 900 }}>
              Why it matches
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {activity.matchReasons.slice(0, 3).join(", ")}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mt: "auto" }} />
        <Typography color="text.secondary" variant="body2">
          Suitable for: {activity.ageGroups.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}

function MetaItem({ icon, label, value }) {
  return (
    <Box className="meta-item">
      {React.cloneElement(icon, { color: "primary", fontSize: "small" })}
      <Typography component="span" sx={{ color: "text.secondary", fontSize: 11, fontWeight: 900 }}>
        {label}
      </Typography>
      <Typography component="strong" sx={{ fontSize: 14, lineHeight: 1.25 }}>
        {value}
      </Typography>
    </Box>
  );
}
