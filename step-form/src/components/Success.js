import React, { Component } from 'react'
import { Dialog, AppBar } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider > 
        <React.Fragment>
          <Dialog 
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
