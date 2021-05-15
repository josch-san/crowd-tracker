import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
} from '@material-ui/core'

import useStyles from './styles'


const Header: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            TraficTracker
          </Typography>
          <Button 
            color="inherit"
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Header