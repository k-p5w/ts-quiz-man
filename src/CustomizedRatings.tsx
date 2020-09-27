import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);



export default function CustomizedRatings(props: any) {
  return (
    <div>

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Cost</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={props.cost}
          getLabelText={(value: number) => `${value} Heart${value !== 1 ? 's' : ''}`}
          precision={1}
          readOnly={true}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>

    </div>
  );
}
