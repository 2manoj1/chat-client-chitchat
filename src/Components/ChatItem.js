import {
    Card,
    CardContent,
    makeStyles,
    Typography
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex"
    },
    content: {}
  }));
  
  export default function ChatItem({ msgText }) {
    const classes = useStyles();
    return (
      <>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h6">
              {msgText}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  }
  