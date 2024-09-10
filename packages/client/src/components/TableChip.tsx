import { Chip } from "@mui/material";

interface TableChipProps {
  label: string;
  backgroundColor: string;
  color: string;
}

export const TableChip = ({
  label,
  backgroundColor,
  color,
}: TableChipProps) => {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "0 10px",
        borderRadius: "8px",
        fontWeight: "medium",
      }}
    />
  );
};
