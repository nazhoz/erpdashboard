import React from "react";
import JobForms from "./JobForms";
// import { TbMailOff, TbMail } from "react-icons/tb";
import TaskForms from "./TaskForms";
import AssignedStaff from "./AssignedStaff";

const CreateJobForm = () => {
  return (
    <div className="flex justify-start items-start flex-col px-3 py-3 w-[70%]">
      <div className="border-[1px] w-[100%] border-formbordercolor rounded-lg bg-formbackgroundcolor shadow-md">
        <div className="border-b-[1px] border-b-formbordercolor px-2 flex justify-between items-center  h-[50px]  ">
          <span className="text-sm font-bold">Create Job</span>
          <div className="flex items-center justify-evenly gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-10 h-6  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-4 after:w-4 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-4 peer-hover:after:scale-95"></div>
            </label>
            <span className="text-sm font-bold">
              Activate Mail Notification
            </span>
          </div>
        </div>
        <div>
          <JobForms />
          <TaskForms />
          <AssignedStaff />
        </div>
      </div>
    </div>
  );
};

export default CreateJobForm;
