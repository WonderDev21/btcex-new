import React from 'react';
import {
  BsLayoutTextSidebar,
  BsBell,
  BsWallet,
} from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { IoIosHelpCircleOutline } from 'react-icons/io';
const header4 = ({ onLeftSidebar, onRightSidebar }) => {
  return (
    <div class="header4">
      <div class="container-fluid">
        <div class="row justify-content-between">
          <div className="col border-right text-center">
            <BsLayoutTextSidebar size={18} onClick={onLeftSidebar} />
          </div>
          <div className="col border-right">
            <IoIosHelpCircleOutline size={22} />
          </div>
          <div className="col border-right">
            <BsBell size={18} />
          </div>
          <div className="col border-right">
            <BsWallet size={18} />
          </div>
          <div className="col">
            <BiMenu size={22} onClick={onRightSidebar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header4;
