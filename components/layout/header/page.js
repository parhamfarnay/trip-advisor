import Mainlogo from "@/components/icons/MainLogo";
import WorldIcon from "@/components/icons/World";
import React from "react";
import headerPhoto from "@/assets/images/header_image.jpg";

function Header() {
  return (
    <>
      <div className="flex justify-between pt-[20px] ">
        <div className="pl-[22px]">
          <Mainlogo />
        </div>
        <div className="flex gap-6 text-center">
          <div className="hover:bg-slate-300 rounded-3xl">
            <button className="pt-[8px]">کشف کردن</button>
          </div>
          <div className="hover:bg-slate-300 rounded-3xl">
            <button className="pt-[8px]">سفرها</button>
          </div>
          <div className="hover:bg-slate-300 rounded-3xl">
            <button className="pt-[8px]">مرور</button>
          </div>
          <div className="hover:bg-slate-300 rounded-3xl">
            <button className="pt-[8px]">بیشتر</button>
          </div>
        </div>
        <div className="flex hover:bg-slate-300 rounded-2xl pt-2 justify-center">
          <div className="pt-2">
            <WorldIcon />
          </div>
          <span className="w-[2px] h-[20px] bg-black mx-[2px] mt-2"></span>
          <p className="me-3 pt-2 ">USDT</p>
          <div>
            <img
              src={headerPhoto.src}
              className="object-cover w-full max-w-10 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
