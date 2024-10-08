import { useContext, useEffect, useState } from "react";
import { Switch, Group } from "@mantine/core";
import classes from "../../../css/customToogle.module.css";
import { NotificationContext } from "../../../context/NotificationContext";

function NotificationCard({ title, description, id, details, setDetails }) {
  const [state, setState] = useState();

  useEffect(() => {
    console.log(details[id])
    if(state){
      setDetails({ ...details, [id]: state });
    }

    setState(details[id] === 1 || details[id] ? true : false);
  }, [state]);

  return (
    <div className="flex gap-[30px] border-b py-2 ">
      <div className="flex flex-col min-w-[25%] max-w-[25%] gap-[10px]">
        <h3 className="text-gray-700 text-sm font-semibold">{title}</h3>
        <span className="text-little text-gray-400">{description}</span>
      </div>

      <div className="flex gap-[15px] items-center">
        <Group justify="center" p="md">
          <Switch
            onChange={(e) => {
              setState(!state);
            }}
            label={state ? "Enabled" : "Disabled"}
            checked={state}
            defaultValue={state}
            value={state}
            classNames={classes}
          />
        </Group>
      </div>
    </div>
  );
}

export default NotificationCard;
