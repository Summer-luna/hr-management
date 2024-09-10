import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface SideListItemProps {
  path: string;
  icon?: ReactNode;
  text: string;
  open?: boolean;
}

export const SideListItem: FC<SideListItemProps> = ({ path, icon, text }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={path}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
