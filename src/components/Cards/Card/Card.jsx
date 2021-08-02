import React from 'react';
import styles from './Card.module.css';
import cx from 'classnames';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Card = () => {
    return (
        <div className={styles.component}>
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                        />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2">Number of active cases of COVID-19</Typography>
                </CardContent>
            </Grid>
        </div>
    );
};

export default Card;
