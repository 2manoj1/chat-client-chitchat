import { Box, makeStyles } from "@material-ui/core";
import { useRecoilValue } from "recoil";
import Footer from "../Components/Footer";
import ChatItem from "../Components/ChatItem";
import {chatsSelectorFamily} from "../States/Selectors";
import useSocket from "../Hooks/useSocket";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default function Chat() {
  useSocket();
  const classes = useStyles();
  const chats = useRecoilValue(chatsSelectorFamily);

  return (
    <Box className={classes.container}>
      <Box className={classes.chatContainer}>
          {
              chats?.map((txt, i) => (<ChatItem key={i} msgText={txt} />))
          }
      </Box>
      <Box className={classes.chatContainer}>
        <Footer/>
      </Box>
    </Box>
  );
}
