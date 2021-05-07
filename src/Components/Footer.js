import { useState } from "react";

import { Box, Button, Icon, makeStyles, TextField } from "@material-ui/core";
import { useSetRecoilState } from "recoil";
import { chatsSelectorFamily } from "../States/Selectors";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  textfield: {
    flex: 1
  },
  container: {
    display: "flex"
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [msg, setMsg] = useState("");
  const sendChat = useSetRecoilState(chatsSelectorFamily);

  const changeMsg = ({ target: { value } }) => {
    setMsg(value);
  };

  return (
    <>
      <Box className={classes.container}>
        <TextField
          id="standard-multiline-flexible"
          placeholder="Enter Message"
          variant="outlined"
          value={msg}
          onChange={changeMsg}
          className={classes.textfield}
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              ev.preventDefault();
              sendChat(msg);
                setMsg("");
            }
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          onClick={() => {
            sendChat(msg);
            setMsg("");
          }}
        >
          Send
        </Button>
      </Box>
    </>
  );
}
