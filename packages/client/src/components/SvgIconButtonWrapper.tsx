import { IconButton, Tooltip } from "@mui/material";
import { ReactNode } from "react";

interface SvgIconButtonProps {
  title: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const SvgIconButtonWrapper = ({
  title,
  children,
  onClick,
}: SvgIconButtonProps) => {
  console.log(onClick);
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </Tooltip>
  );
};
