import { selector } from "recoil";
import { sendMsg } from "../ws";
import { chatsState } from "./Atoms";
export const chatsSelectorFamily = selector({
  key: "ChatsSelector",
  get: ({get}) => get(chatsState),
  set: ({ get }, msg) => {
    sendMsg(msg);
  }
});
