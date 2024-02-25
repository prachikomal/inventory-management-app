
import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import '../styles/Views.scss'; 

function ActionButtons({ view, onDelete, onToggle, onEdit,check }) {

  const disabled = (view === 'user' || check );

  return (
    <div>
      <IconButton disabled={disabled} onClick={onEdit}>
        <EditIcon className={!disabled? "editIcon" : ""}/>
      </IconButton>
      <IconButton disabled={disabled} onClick={onDelete}>
        <DeleteIcon  className={!disabled? "deleteIcon" : ""}/>
      </IconButton>
      <IconButton disabled={disabled} onClick={onToggle}>
        <VisibilityOffIcon  className={!disabled? "visibilityIcon" : ""}/>
      </IconButton>
    </div>
  );
}

ActionButtons.propTypes = {
  view: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

ActionButtons.defaultProps = {};

export default ActionButtons;
