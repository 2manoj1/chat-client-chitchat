import { RecoilRoot } from "recoil";
import Chat from "./Screen/Chat";
export default function App() {
  return (
    <>
      <RecoilRoot>
        <Chat />
      </RecoilRoot>
    </>
  );
}
