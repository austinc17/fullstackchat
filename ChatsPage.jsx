import {PrettyChatWindow} from "react-chat-engine-pretty"

const ChatsPage = (props) => {
  return(
 
    <div style={{height: "100vh"}}>
      <PrettyChatWindow
      projectId="662fe42d-2365-4e04-972d-d30d7b27078b"
      username={props.user.username}
      secret={props.user.secret}
      style={{height: "100%"}}
      />
    </div>
    
)
  };
export default ChatsPage;