import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

// QuizForm is クイズのメインフォーム
export default function QuizForm() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => { });
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <div className={classes.root}>

      <div>
        <div >
          <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
        </div>
        <h1>問題文</h1>
        <Paper elevation={2} >ボクの名前は高倉稜、エムです。</Paper>
        <h2>回答を選択する</h2>
      </div>

    </div>
  );
}

