import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Avatar } from '@material-ui/core';
import CustomizedRatings from './CustomizedRatings';
import ListItem from '@material-ui/core/ListItem';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        //   display: 'inline-block',
        margin: '0 1px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        marginBottom: 12,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: red[500],
    },
});

// DrawingCard is カードの描画
export default function CreateCard(props: any) {

    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.title}>

            <Card>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    {/* ヘッダー */}
                    <CardHeader
                        title={props.name}
                        subheader={props.ctgl}

                        avatar={
                            <Avatar variant="square" aria-label="recipe" className={classes.avatar}>
                                {props.ctglL2}
                            </Avatar>
                        }
                        action={
                            <CustomizedRatings cost={props.cost}>
                                
                            </CustomizedRatings>
                        }
                    />

                    <CardContent>
                        {props.comment}
                    </CardContent>
                </ListItem>
            </Card>

        </div>
    );
}