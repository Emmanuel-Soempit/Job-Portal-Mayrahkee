import { Helmet } from "react-helmet";
import MessagedList from "./MessagesList";
import { chat_dummies } from "../../../utils/dummies";
import ChatComponent from "./ChatComponent";
import { useState } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { useContext } from "react";
import { useEffect } from "react";
import { ChatContext } from "../../../context/ChatContext";

function Messages() {
  const applicationUtils = useContext(ApplicationContext);
  const [selectedChat, setSelectedChat] = useState(null);
  const { loading, messages, sendMessage, getMessages } =
    useContext(ChatContext);

  const byCompany = () => {
    const newList = [];

    applicationUtils?.jobApplications?.map((current) => {
      if (newList.length !== 0) {
        const doesExist = newList.filter(
          (currentApp) => current.employer_id === currentApp.employer_id
        );
        if (doesExist.length === 0) {
          newList.push(current);
        } else {
          return;
        }
      } else {
        newList.push(current);
      }
    });

    return newList;
  };

  useEffect(() => {
    applicationUtils.getJobApplications();
  }, []);

  return (
    <>
      <Helmet>
        <title>Company Dashboard | Messages</title>
      </Helmet>
      <div className="h-full w-full flex p-2 justify-between  flex-col">
        <h1 className="font-semibold text-md">Messages</h1>

        <div className="flex border-2 h-[95%] w-full">
          <MessagedList
            chats={chat_dummies}
            data={byCompany()}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
          <ChatComponent
            chats={chat_dummies}
            applicationUtils={applicationUtils}
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
        </div>
      </div>
    </>
  );
}

export default Messages;
