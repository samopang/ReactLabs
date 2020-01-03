import React, { Component } from 'react'
import { Dialog, AppBar, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { MuiThemeProvider } from '@material-ui/core/styles'

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } = this.props
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Enter User Details" />
            <TextField
              label="First Name"
              variant="outlined"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              label="Last Name"
              variant="outlined"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              label="Email"
              variant="outlined"
              onChange={handleChange('email')}
              defaultValue={values.email}
              style={{ margin: 8 }}
            />
            <br />
            <Button
              color="primary"
              variant="outlined"
              size="large"
              onClick={this.continue}
              style={{ margin: 8 }}>Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
