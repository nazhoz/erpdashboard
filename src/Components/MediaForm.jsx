import React from "react";
import FormDates from "./FormDates";

const MediaForm = () => {
  return (
    <div className="flex flex-col justify-around mr-2 mt-3 w-[30%]">
    <div className="w-[100%] flex flex-col justify-start items-center py-2 bg-formbackgroundcolor  shadow-md rounded-lg">
      <div className="w-[100%] border-b-[1px] border-b-formbordercolor px-2 flex justify-between items-center  h-[43px] text-sm font-bold">
        File Upload
      </div>
      <div className=" w-[95%] px-2 py-2">
        <label
          htmlFor="file"
          className="flex flex-col justify-center w-[100%] h-[180px] border-2 border-dashed border-black items-center p-[5px] cursor-pointer "
        >
          <span>
            <svg
              viewBox="0 0 184.69 184.69"
              xmlns="http://www.w3.org/2000/svg"
              width="60px"
              height="60px"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
				C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
				C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
				c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
				c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
				c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
				c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.52,35.509H97.391
				v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                      fill="#010002"
                    ></path>
                  </g>
                  <g>
                    <path
                      d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
				c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
				L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
				c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
				C104.91,91.608,107.183,91.608,108.586,90.201z"
                      fill="#010002"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <p> drop your file here or click to select a file!</p>
        </label>
        <input className="w-max hidden" name="text" id="file" type="file" />
      </div>
      <div className='text-[15px] font-semibold w-[90%] mt-2'>
            <input className='border-[1px] px-2 h-[35px] rounded-md text-xs w-[100%]  border-inputs outline-none focus:border-inputbordercolor' type="text" placeholder="File Description"/>
        </div>
    </div>
    <div>
      <FormDates/>
    </div>
    <div className="py-4 px-4 flex justify-between bg-formbackgroundcolor  shadow-md rounded-lg mt-2 mb-2">
      <button className="w-[30%] text-[15px] font-bold -ml-3 flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-buttonhover hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 ">Create</button>
      <button className="w-[30%] text-[15px] font-bold flex justify-evenly items-center border-[1px] py-2 rounded-lg border-blackborder hover:bg-deletecolor hover:text-formbackgroundcolor hover:border-0 transition-all ease-in duration-200 ">Cancel</button>
    </div>
    </div>
  );
};

export default MediaForm;
