import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";
import { Colors } from "@constants/colors";

interface PrimaryButtonProps extends ButtonProps {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export const PrimaryButton = ({
  icon,
  children,
  sx,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      sx={{
        backgroundColor: Colors.BACKGROUND,
        borderRadius: 2,
        "&:hover": { backgroundColor: Colors.HOVER_BACKGROUND },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
