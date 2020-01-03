import React, { Component } from 'react'
import { Dialog, AppBar, Button, ButtonGroup, List, ListItem, ListItemText } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} /> 
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} /> 
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary="Bio" 
                  secondary={bio} divider={true} /> 
              </ListItem>
            </List>
            <br />
            <ButtonGroup 
              size="large" 
              aria-label="large outlined button group"
              style={{ padding: 8, justifyContent: 'center' }}
              >
              <Button
                color="secondary"
                onClick={this.back}
                style={{ width: '50%' }}>Back</Button>

              <Button
                color="primary"
                onClick={this.continue}
                style={{ width: '50%' }}>Confirm & Continue</Button>
              </ButtonGroup>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Confirm
