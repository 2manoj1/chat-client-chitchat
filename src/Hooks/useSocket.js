import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { chatsState } from "../States/Atoms";
import { disconnectSocket, initSocket, onMessageSocket } from "../ws";

const useSocket = () => {
    const setChats = useSetRecoilState(chatsState);
    const socketCommincation = () => {
        onMessageSocket((msg) => {
            setChats((oldChats) => [...oldChats, msg]);
        });
    }
    useEffect(() => {
        initSocket();
        socketCommincation();
        return () => {
            disconnectSocket();
            socketCommincation();
        };
    }, []);

    return null;
};

export default useSocket;
