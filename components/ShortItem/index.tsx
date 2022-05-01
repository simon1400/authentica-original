import { Button, Container, Grid, Typography } from "@mui/material"
import { FC } from "react"
import ImageSquare from "styles/ImageSquare"

const ShortItem: FC = () => {
  return (
    <Container>
      <Grid container spacing={16} alignItems="center" marginBottom={12}>
        <Grid item xs={4}>
          <ImageSquare>
            <img src="/assets/short.jpeg" />
          </ImageSquare>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" component="h2" marginBottom={8}>People & Culture Manager</Typography>
          <Typography variant="body2" marginBottom={6}>Hledáme nadšeného HR, který nám pomůže budovat firemní kulturu! Hledáme nového kolegu, který nám pomůže posílit, nastavit a zlepšit personální procesy a celkově tím i péči o zaměstnance.</Typography>
          <Button disableRipple>Zjistěte  více</Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ShortItem