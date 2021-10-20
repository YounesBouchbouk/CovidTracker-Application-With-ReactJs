import React from 'react'
import {Card , CardContent , Typography ,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards = ( { data : {confirmed  , recovered , deaths , lastUpdate}}) =>{

    if(!confirmed){
        return(
            <div>

            </div>
        )
    } else
    // console.log(lastUpdate);
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justifyContent="center">
            <Grid item component={Card} md={3} xs={12}  className={cx(styles.card , styles.active)}>
                <CardContent> 
                    <Typography color ="textSecondary" gutterBottom >Infected</Typography>
                    <Typography variant="h5"><CountUp start="0" end = {confirmed.value} duration="2.2" separator=","/></Typography>
                    <Typography color ="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>    
                    <Typography variant="body2">Nomber of active cases of Covid 19</Typography> 
                </CardContent>
            </Grid>

            <Grid item component={Card} md={3} xs={12}  className={cx(styles.card , styles.recovry)}>
                <CardContent> 
                    <Typography color ="textSecondary" gutterBottom >Recovred</Typography>
                    <Typography variant="h5"><CountUp start="0" end = {recovered.value} duration="2.2" separator=","/></Typography>
                    <Typography color ="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>    
                    <Typography variant="body2">Nomber of recovrie cases of Covid 19</Typography> 
                </CardContent>
            </Grid>

            <Grid item component={Card} md={3} xs={12}  className={cx(styles.card , styles.deaths)}>
                <CardContent> 
                    <Typography color ="textSecondary" gutterBottom >Deaths</Typography>
                    <Typography variant="h5"><CountUp start="0" end = {deaths.value} duration="2.2" separator=","/></Typography>
                    <Typography color ="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>    
                    <Typography variant="body2">Nomber of deaths cases of Covid 19</Typography> 
                </CardContent>
            </Grid>
        </Grid>
        </div>
        
    )
}

export default Cards