export function formatCostLabel(cost) {
  if (cost === "Free") return "Free";
  if (cost === "Low cost") return "Low cost (£)";
  if (cost === "Flexible") return "Flexible (£)";
  return cost;
}
