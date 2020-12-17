import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const initialForm = {
  case_id: 0,
  case_status: '',
  court_type: '',
  judge_name: '',
  credibility_of_refugee: '',
  hearing_date: null,
  hearing_location: '',
  hearing_type: '',
  decision_date: null,
  protected_ground: [],
  social_group_type: [],
  judge_decision: '',
  refugee_origin: '',
};

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState(initialForm);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleChange(event) {
    const { name, value } = event.target;
    if (name !== 'protected_ground' && name !== 'social_group_type') {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  }

  useEffect(() => {}, []);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Form Upload
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Asylum Case Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out all fields if possible. If Case ID is left blank a
            random ID will be generated for reference.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="case_id"
            label="Case ID"
            type="text"
            name="case_id"
            onChange={handleChange}
            fullWidth
          />
          <Autocomplete
            id="case_status"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="case_status"
                label="Case Status"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="court_type"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="court_type"
                label="Court Type"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="judge_name"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="judge_name"
                label="Judge Name"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="credibility_of_refugee"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="credibility_of_refugee"
                label="Credibility of Client"
                variant="outlined"
              />
            )}
          />
          <TextField
            autoFocus
            margin="dense"
            id="hearing_date"
            label="Hearing Date"
            type="date"
            name="hearing_date"
            onChange={handleChange}
            fullWidth
          />
          <Autocomplete
            id="hearing_location"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="hearing_location"
                label="Hearing Location"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="hearing_type"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="hearing_type"
                label="Hearing Type"
                variant="outlined"
              />
            )}
          />
          <TextField
            autoFocus
            margin="dense"
            id="decision_date"
            label="Decision Date"
            type="date"
            name="decision_date"
            onChange={handleChange}
            fullWidth
          />
          <Autocomplete
            id="judge_decision"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="judge_decision"
                label="Judge Decision"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="refugee_origin"
            freeSolo
            options={[]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                onChange={handleChange}
                name="refugee_origin"
                label="Refugee Origin"
                variant="outlined"
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
