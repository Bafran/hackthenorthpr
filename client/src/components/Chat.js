import React, { Component } from "react";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageInputSmall,
  VirtualizedMessageList,
  Window,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import "stream-chat-react/dist/css/index.css";

const chatClient = StreamChat.getInstance("dz5f4d5kzrue");
const userToken =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoibXV0ZS1sZWFmLTQiLCJleHAiOjE2MzE5OTc5NDZ9.xYpdDx49ou1SHnjaZMbhSz0Ryee9yma8Fx4vYWjGYr8";

chatClient.connectUser(
  {
    id: "mute-leaf-4",
    name: "mute",
    image: "https://getstream.io/random_png/?id=mute-leaf-4&name=mute",
  },
  userToken
);

const channel = chatClient.channel("team", "teacherchannel1iujeiof", {
  name: "Something Else discussion",
});

const state = channel.watch()
channel.on("message.new", event => {
  console.log("new message");
  let message = channel.lastMessage();
  console.log(message.text);
  scheduleEvent(message);
})

function scheduleEvent(message)
{
  let text = message.text;
  if ((text.startsWith("$schedule"))){
    let event = text.substring(9);
    console.log("scheduled!");
    splitMessage(event);
  }
}

function splitMessage(text)
{
  var split = text.split(',');
  console.log(split);
  var name = split[0];
  var start = split[1];
  var end = split[2];
  // code to make calendar events using name, start, end - maybe pass to function?
}

class ChatComponent extends Component {
  render() {
    return (
      <Chat client={chatClient} theme="light">
        <Channel channel={channel}>
          <Window>
            <ChannelHeader live />
            <VirtualizedMessageList />
            <MessageInput Input={MessageInputSmall} focus />
          </Window>
        </Channel>
      </Chat>
    );
  }
}

export default ChatComponent;
