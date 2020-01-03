import React, { Component } from 'react'
import { Dialog, AppBar, Button, ButtonGroup } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    const { values, handleChange } = this.props
    return (
      <MuiThemeProvider >
        <React.Fragment>
        <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              label="Occupation"
              variant="outlined"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              label="City"
              variant="outlined"
              onChange={handleChange('city')}
              defaultValue={values.city}
              style={{ margin: 8 }}
            />
            <br />
            <TextField
              label="Bio"
              variant="outlined"
              multiline
              rows="5"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
              style={{ margin: 8 }}
            />
            <br />

            <ButtonGroup 
              size="large" 
              aria-label="large outlined button group"
              style={{ padding: 8, justifyContent: 'center' }}
              >
              <Button
                color="secondary"
                style={{ width: '50%' }}
                onClick={this.back}>Back</Button>
              <Button
                color="primary"
                style={{ width: '50%' }}
                onClick={this.continue}>Continue</Button>
            </ButtonGroup>
            
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormPersonalDetails
