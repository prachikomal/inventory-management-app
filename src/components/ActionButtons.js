import React, { useContext } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../styles/Views.scss";
import { InventoryContext } from "../redux/Context";

function ActionButtons({ onDelete, onToggle, onEdit, check }) {
  const { view } = useContext(InventoryContext);
  const disabled = view === "user" || check;

  return (
    <div>
      <IconButton
        data-testid="edit-button"
        disabled={disabled}
        onClick={onEdit}
      >
        <EditIcon className={!disabled ? "editIcon" : ""} />
      </IconButton>
      <IconButton
        data-testid="delete-button"
        disabled={disabled}
        onClick={onDelete}
      >
        <DeleteIcon className={!disabled ? "deleteIcon" : ""} />
      </IconButton>
      <IconButton
        data-testid="toggle-button"
        disabled={disabled}
        onClick={onToggle}
      >
        <VisibilityOffIcon className={!disabled ? "visibilityIcon" : ""} />
      </IconButton>
    </div>
  );
}

ActionButtons.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
};

ActionButtons.defaultProps = {};

export default ActionButtons;
