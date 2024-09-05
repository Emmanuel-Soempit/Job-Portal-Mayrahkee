import { useContext, useEffect } from "react";
import { NotificationContext } from "../../../context/NotificationContext";
import NotificationCard from "./NotificationCard";
import FormButton from "../../../components/FormButton";
import { onSuccess } from "../../../utils/notifications/OnSuccess";

const notificatioTypes = [
  {
    id: "application_notifications",
    name: "Application Notification",
    description: "Subscribe to recieving applicants-based notifications",
  },
  {
    id: "message_notifications",
    name: "Message Notification",
    description: "Get notified when a new message is sent to you",
  },
  {
    id: "email_notifications",
    name: "Email Notification",
    description: "Subscribe to recieving email notifications",
  },
];

function Notification() {
  const { updateNotificationSetting, loading, getNotificationSetting } =
    useContext(NotificationContext);

  useEffect(() => {
    getNotificationSetting();
  }, []);

  return (
    <div className="flex w-full flex-col p-2">
      {notificatioTypes.map((current) => (
        <NotificationCard
          key={current.id}
          id={current.id}
          title={current.name}
          description={current.description}
        />
      ))}

      <FormButton
        loading={loading}
        onClick={() =>
          updateNotificationSetting(() => {
            onSuccess({
              message: "Notifications",
              success: "Updated Succesfully",
            });
          })
        }
        width="w-[20%] mt-[10px] text-sm"
      >
        Save Changes
      </FormButton>
    </div>
  );
}

export default Notification;
