import { useState, useEffect, React } from "react";
import { Button, Popover, Typography } from "@mui/material";

const Interview = ({ getInterviews, shortListed }) => {
  const [newInterview, setNewInterview] = useState();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    getInterviews(shortListed?.interview_id, setNewInterview);
  }, []);
  console.log(newInterview);
  const date = new Date(newInterview?.interview_date);
  return (
    <>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          <div className="h-fit flex flex-col gap-2 w-fit p-2 rounded-[15px]">
            <strong className="border-b">Interview Details</strong>
            
            <span >Interviewer: {newInterview?.interviewer_name}</span>
            <span>Date: {(new Date(newInterview?.interview_date)).toLocaleDateString()}</span>
            
            <span>Time: {newInterview?.interview_time}</span>
            <span>Meeting Id: {newInterview?.meeting_id}</span>
            <span>Notes: {newInterview?.notes}</span>
            </div>
        </Typography>
      </Popover>
      <div
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className="border-b cursor-pointer"
      >
        <div className="px-3 my-3 flex items-center">
          <p className="w-1/6 font-medium">{date.toLocaleTimeString()}</p>
          <div className="bg-[#47AA4933] rounded w-5/6 p-3">
            <div className="flex items-center">
              <div className="size-12 mr-3 rounded-full bg-gray-100"></div>
              <div className="w-80 divide-y-1 divide-inherit">
                <p className="prime_text border-b border-4 font-medium">
                  {newInterview?.interviewer_name}
                </p>
                <p className="font-bold">{shortListed?.employer_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interview;
