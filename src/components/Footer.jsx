import React from 'react'

const Footer = () => {
  return (
    <div>
           <footer className=" self-stretch bg-white shadow-[0px_-8px_16px_rgba(196,_196,_196,_0.08)] flex flex-row items-start justify-between py-[18px] px-[50px] gap-[20px] text-center text-xs text-typography-grey-main font-lato mq725:flex-wrap mq725:justify-center mq725:pl-[25px] mq725:pr-[25px] mq725:box-border">
        <div className=" w-[258px] flex flex-row items-start justify-start gap-[9.5px]">
          <div className="h-[26px] w-[51px] relative flex items-center justify-center shrink-0">
            Contact
          </div>
          <div className="h-[25px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="w-px h-[25px] relative box-border border-r-[1px] border-solid border-background-divider" />
          </div>
          <div className="h-[26px] flex-1 relative flex items-center justify-center">
            Privacy Policy
          </div>
          <div className="h-[25px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="w-px h-[25px] relative box-border border-r-[1px] border-solid border-background-divider" />
          </div>
          <div className="h-[26px] flex-1 relative flex items-center justify-center">
            Terms of use
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 text-left">
          <div className="relative">
            © 2024 UEX Learning Technology Pvt Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer