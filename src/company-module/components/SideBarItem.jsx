import React from "react";
import { useNavigate } from "react-router-dom";

function SideBarItem({ data, dispatch, state }) {
  const navigate = useNavigate();

  const navigateToPage = () => {
    navigate(data.route);
    dispatch({ ...data });
  };

  return (
    <li
      onClick={navigateToPage}
      className={`cursor-pointer flex gap-[10px] items-center z-10  p-[5px] ${
        state?.type === data?.type ? "bg-primaryColor" : "bg-none"
      }`}
    >
      <img className="h-[20px] w-[20px]" src={ state?.type === data?.type ? data.iconActive : data.icon} />
      <span className={`${ state?.type === data?.type ? "text-white" : "text-primary"} text-sm`}>{data.title}</span>
    </li>
  );
}

export default React.memo(SideBarItem);
