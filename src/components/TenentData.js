import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TenentData = ({ toolicon, paira ,bg ,text , width="w-50" , col=" " , border="border border-primary" , otherclass=""}) => {
  return (
    <div className={` ${border}  ${width} py-0 rounded m-auto d-flex flex-column my-3 align-items-center ${bg} ${col} ${otherclass}`}>
      <FontAwesomeIcon className={`fa-2x ${text} p-3`} icon={toolicon} />
      <p className={`${text} py-md-2 m-0 fw-bold`}>{paira}</p>
    </div>
  );
};

export default TenentData;
