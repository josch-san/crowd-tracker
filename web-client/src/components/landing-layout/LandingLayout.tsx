import React from 'react'

import {
  Container
} from '@material-ui/core'

import useStyles from './styles'
import Header from './LandingHeader'

const Layout: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          Alguien con <strong>el don de la palabra</strong> le dará vida a esta página...
          <br/>
          algun día ¯\_(ツ)_/¯
        </Container>
      </main>
    </div>
  )
}

export default Layout