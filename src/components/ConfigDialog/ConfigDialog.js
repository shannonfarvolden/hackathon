import React from "react";

import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from "@material-ui/core/DialogTitle";

import { withStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import blue from "@material-ui/core/colors/blue";

import SelectConfig from "../SelectConfig";

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
};


const ConfigDialog = ({fieldId, field, dialogCancel, dialogConfirm}) => {

  const fields = [
    { label: "Field 1" },
    { label: "Field 2" },
    { label: "Field 3" },
    { label: "Field 4" },
    { label: "Field 5" },
    { label: "Field 6" },
    { label: "Field 7" },
    { label: "Field 8" }
  ].map(field => ({
    value: field.label,
    label: field.label
  }));
  const configOptions = [
    { label: "mandatory" },
    { label: "disabled" },
    { label: "populate" },
    { label: "mask" },
    { label: "newForm" }
  ].map(field => ({
    value: field.label,
    label: field.label
  }));

  const newField = {...field}

  const handleConfirm = () => {
    dialogCancel(newField)
  }

  return (
    
      <Dialog
        fullWidth
        aria-labelledby="simple-dialog-title"
        open={!!fieldId} 
      >
        <DialogTitle id="simple-dialog-title">Add Config To Field {fieldId ? fieldId : ''}</DialogTitle>
        <div>
          <SelectConfig
            fields={configOptions}
            placeholder="Config"
            title="Config type"
          />
          <SelectConfig
            fields={fields}
            placeholder="Select Field(s)"
            title="On Field"
          />
          {/* <List>
            {configOptions.map(config => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(config)}
                key={config}
              >
                <ListItemText primary={config} />
              </ListItem>
            ))}
          </List> */}
        </div>
        <DialogActions>
          <Button onClick={dialogCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );

}

export default withStyles(styles)(ConfigDialog);
