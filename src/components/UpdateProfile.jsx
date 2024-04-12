
const UpdateProfile = () => {
    return (
      <form className="m-0 w-full rounded-[10px] bg-background-base overflow-hidden flex flex-col items-start justify-start p-[30px] box-border gap-[20px] leading-[normal] tracking-[normal]">
        <div className="self-stretch flex flex-row items-start justify-between py-[0.5px] px-0 box-border max-w-full gap-[20px]">
          <div className="flex flex-col items-start justify-start max-w-[calc(100%_-_48px)]">
            <b className="relative text-lg font-lato text-typography-grey-dark text-left">
              Update your profile
            </b>
            <div className="relative text-[16px] leading-[24px] font-lato text-typography-grey-main text-left">
              Starting your journey with updating your profile.
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="w-7 h-7 relative"
              loading="lazy"
              alt=""
              src="/checklist.svg"
            />
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="relative text-sm leading-[150%] font-medium font-lato text-typography-grey-dark text-left inline-block min-w-[62px]">
              Full Name
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="self-stretch rounded-md bg-background-base box-border flex flex-row flex-wrap items-center justify-start py-3 px-[15px] gap-[16px] max-w-full border-[1px] border-solid border-neutral-300">
                <img
                  className="h-6 w-6 relative hidden min-h-[24px]"
                  alt=""
                  src="/iconsearchsearchnormal.svg"
                />
                <input
                  className="w-[calc(100%_-_48px)] [border:none] [outline:none] font-lato text-lg bg-[transparent] h-[18px] flex-1 relative leading-[100%] text-gray text-left inline-block min-w-[300px] max-w-full p-0"
                  placeholder="Willie Jennings"
                  type="text"
                />
                <div className="flex flex-row items-center justify-start p-[3px] box-border w-6 h-6">
                  <img
                    className="h-[18px] w-[18px] relative"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
              <div className="w-[47px] relative text-xs leading-[150%] font-text-xs-regular text-neutral-500 text-left hidden">
                Caption
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[224px] max-w-full">
              <div className="relative text-sm leading-[150%] font-medium font-lato text-typography-grey-dark text-left inline-block min-w-[52px]">
                Email ID
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-md bg-background-base flex flex-row items-center justify-between py-[15px] px-4 gap-[0px] [row-gap:20px] border-[1px] border-solid border-neutral-300">
                  <input
                    className="w-[286px] [border:none] [outline:none] font-lato text-lg bg-[transparent] h-[18px] relative leading-[100%] text-gray text-left inline-block whitespace-nowrap p-0"
                    placeholder="willie.jennings@gmail.com"
                    type="text"
                  />
                  <div className="flex flex-row items-center justify-start p-[3px] box-border w-6 h-6">
                    <img
                      className="h-[18px] w-[18px] relative"
                      alt=""
                      src="/icon-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[224px] max-w-full">
              <div className="relative text-sm leading-[150%] font-medium font-lato text-typography-grey-dark text-left inline-block min-w-[97px]">
                Mobile Number
              </div>
              <div className="self-stretch rounded-md bg-background-base flex flex-row items-start justify-start py-3.5 px-4 gap-[9.7px] border-[1px] border-solid border-background-divider mq450:flex-wrap">
                <img
                  className="h-6 w-6 relative hidden min-h-[24px]"
                  alt=""
                  src="/iconsearchsearchnormal.svg"
                />
                <img
                  className="h-6 w-6 relative rounded-[50%] object-cover min-h-[24px]"
                  alt=""
                  src="/ellipse-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="relative text-lg leading-[100%] font-lato text-typography-grey-main text-left inline-block min-w-[32px] whitespace-nowrap">{`+91 `}</div>
                </div>
                <div className="h-[25px] w-px relative box-border border-r-[1px] border-solid border-background-divider mq450:w-full mq450:h-px" />
                <input
                  className="w-[105px] [border:none] [outline:none] bg-[transparent] h-[21px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border font-lato text-lg text-gray"
                  placeholder="9988776655"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px] max-w-full">
            <InputField1
              city="City"
              kolkata="Kolkata"
              icArrowDropDown="/ic-arrow-drop-down.svg"
            />
            <InputField1
              city="Country"
              kolkata="India"
              icArrowDropDown="/ic-arrow-drop-down-1.svg"
              propMinWidth="51px"
            />
          </div>
          <InputField
            timezone="Timezone"
            iconSearchsearchNormal="/iconsearchsearchnormal.svg"
            uTC0530ChennaiPlaceholder="(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"
            icArrowDropDown="/ic-arrow-drop-down-2.svg"
          />
          <InputField
            timezone="Preferred language "
            iconSearchsearchNormal="/iconsearchsearchnormal.svg"
            uTC0530ChennaiPlaceholder="English"
            icArrowDropDown="/ic-arrow-drop-down-3.svg"
            propMinWidth="118px"
          />
        </section>
        <footer className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] mq625:flex-wrap">
          <div className="rounded flex flex-row items-center justify-start py-3 px-4 box-border gap-[8px] max-w-full">
            <img
              className="h-[21.6px] w-[14.4px] relative"
              loading="lazy"
              alt=""
              src="/icon-2.svg"
            />
            <div className="relative text-sm leading-[18px] font-lato text-typography-grey-main text-left">{`You can update details later in profile section. `}</div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[20px]">
            <div className="flex flex-row items-center justify-start">
              <div className="relative text-sm font-inter text-typography-grey-main text-left inline-block min-w-[73px]">
                Setup later
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[9px] px-6 bg-typography-grey-dark rounded-xl flex flex-row items-center justify-center hover:bg-slategray">
              <div className="relative text-sm font-medium font-poppins text-background-base text-left inline-block min-w-[65px]">
                Continue
              </div>
            </button>
          </div>
        </footer>
      </form>
    );
  };
  
  export default UpdateProfile;
  
  