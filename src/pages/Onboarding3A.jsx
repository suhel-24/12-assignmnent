import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Illustration from "../assets/Illustration.png";

const Onboarding3A = () => {
  return (
    <div className="w-full h-[1387px] relative rounded-xl bg-background-primary overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[0.4px] box-border gap-[124px] leading-[normal] tracking-[normal] mq450:gap-[31px] mq800:h-auto mq800:gap-[62px]">
      <div className="mt-[-127px] self-stretch h-px relative bg-gainsboro-100 shrink-0 [debug_commit:f6aba90]" />
      <main className="self-stretch h-[1202.6px] flex flex-col items-start justify-start gap-[46px] shrink-0 [debug_commit:f6aba90] mq800:h-auto mq800:gap-[23px]">
        <div className="w-full">
          <Navbar />
        </div>
        
        <section className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full shrink-0 text-left text-lg text-typography-grey-dark font-lato">
          <div className="w-[785px] flex flex-col items-center justify-start gap-[30px] shrink-0 [debug_commit:f6aba90]">
            <div className="self-stretch rounded-xl bg-background-base flex flex-row items-center justify-between py-[30px] px-10 box-border max-w-full gap-[20px] text-[28px] mq800:flex-wrap">
              <div className="flex flex-col items-start justify-center gap-[30px] max-w-full">
                <div className="flex flex-col items-start justify-center gap-[6px]">
                  <h2 className="m-0 relative text-inherit leading-[100%] font-inherit mq450:text-[22px] mq450:leading-[22px]">
                    <span>Hello</span>
                    <b> Willie</b>
                    <span className="font-semibold">{`, `}</span>
                  </h2>
                  <div className="relative text-lg leading-[24px]">
                    Get the process started in less than 10 minutes. Let us
                    handle the rest.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[20px] text-base text-typography-grey-main mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] py-2.5 px-5 bg-typography-grey-dark rounded-xl flex flex-col items-start justify-start whitespace-nowrap hover:bg-slategray">
                    <div className="relative text-sm font-medium font-lato text-background-base text-left inline-block min-w-[75px] text-white">
                      Finish setup
                    </div>
                  </button>
                  <div className="flex flex-row items-center justify-start gap-[10px]">
                    <div className="relative inline-block min-w-[113px]">
                      Having Trouble?
                    </div>
                    <div className="relative [text-decoration:underline] text-typography-grey-dark inline-block min-w-[60px]">
                      Get help
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="h-[110px] w-[110px] relative"
                loading="lazy"
                alt=""
                src={Illustration}
              />
            </div>
            <div className="self-stretch rounded-3xs bg-background-secondary overflow-hidden flex flex-col items-start justify-start p-[30px] box-border max-w-full">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
                <div className="flex flex-col items-start justify-center py-[0.5px] px-0 box-border max-w-[calc(100%_-_48px)]">
                  <b className="relative">Profile details updated</b>
                  <div className="relative text-base leading-[24px] text-typography-grey-main">
                    Starting your journey with updating your profile.
                  </div>
                </div>
                <img
                  className="h-7 w-7 relative"
                  loading="lazy"
                  alt=""
                  src="https://cdn.hugeicons.com/icons/checkmark-circle-02-stroke-rounded.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-background-base overflow-hidden flex flex-col items-start justify-start p-[30px] box-border gap-[30px] max-w-full mq675:pt-5 mq675:pb-5 mq675:box-border">
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
                <div className="flex flex-col items-start justify-center py-[0.5px] px-0 box-border max-w-[calc(100%_-_48px)]">
                  <b className="relative">Update your experience</b>
                  <div className="relative text-base leading-[24px] text-typography-grey-main">
                    Starting your journey with updating your corporate and
                    coaching experience.
                  </div>
                </div>
                <img
                  className="h-7 w-7 relative"
                  loading="lazy"
                  alt=""
                  src="https://cdn.hugeicons.com/icons/checkmark-circle-02-stroke-rounded.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-base">
                <div className="self-stretch rounded-xl bg-background-secondary flex flex-row items-center justify-between py-3.5 px-5 box-border max-w-full gap-[20px] text-lg mq800:flex-wrap">
                  <div className="flex flex-col items-start justify-center max-w-full">
                    <div className="relative font-medium">
                      Corporate experience
                    </div>
                    <div className="relative text-base leading-[24px] text-typography-grey-main">
                      Quis autem vel eum iure reprehenderit qui in ea voluptate.
                    </div>
                  </div>
                  <div className="w-[126px] rounded-3xs bg-background-base box-border flex flex-row items-center justify-between py-3 px-[15px] whitespace-nowrap text-base text-gray border-[1px] border-solid border-typography-grey-light">
                    <div className="relative leading-[100%] font-medium inline-block min-w-[61px]">
                      12 Years
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      alt=""
                      src="https://cdn.hugeicons.com/icons/circle-stroke-rounded.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <div className="relative leading-[150%] font-medium inline-block min-w-[85px]">
                    Designation
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border max-w-full">
                    <div className="self-stretch rounded-md bg-background-base box-border flex flex-row items-center justify-center py-[17px] px-4 max-w-full border-[1px] border-solid border-typography-grey-light mq450:gap-[95px] mq800:gap-[190px]">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-lato text-lg bg-[transparent] h-[18px] flex-1 relative leading-[100%] text-gray text-left inline-block min-w-[250px] max-w-full p-0"
                        placeholder="Head of Operations"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
                  <div className="relative leading-[150%]">
                    <span className="font-medium">
                      <span>{`Industry `}</span>
                    </span>
                    <span className="text-sm text-typography-grey-main">
                      <span className="font-medium">(</span>
                      <span>You can select max 6 functional areas)</span>
                    </span>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="self-stretch rounded-md bg-background-base box-border flex flex-row items-center justify-between py-3 px-[17px] max-w-full gap-[20px] border-[1px] border-solid border-typography-grey-light">
                      <div className="flex flex-row flex-wrap items-center justify-start py-0 pr-[1.5px] pl-0 box-border gap-[15px] max-w-[calc(100%_-_44px)]">
                        <button className="cursor-pointer [border:none] p-1.5 bg-background-secondary rounded-md flex flex-row items-center justify-start hover:bg-gainsboro-200">
                          <div className="relative text-base leading-[100%] font-medium font-lato text-gray text-left inline-block min-w-[83px]">
                            Automobile
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] py-1.5 px-[5px] bg-background-secondary rounded-md flex flex-row items-center justify-start hover:bg-gainsboro-200">
                          <div className="relative text-base leading-[100%] font-medium font-lato text-gray text-left inline-block min-w-[105px]">
                            Manufacturing
                          </div>
                        </button>
                        <button className="cursor-pointer [border:none] p-1.5 bg-background-secondary rounded-md flex flex-row items-center justify-start whitespace-nowrap hover:bg-gainsboro-200">
                          <div className="relative text-base leading-[100%] font-medium font-lato text-gray text-left inline-block min-w-[124px]">
                            Automotive Parts
                          </div>
                        </button>
                      </div>
                      <img
                        className="h-6 w-6 relative"
                        loading="lazy"
                        alt=""
                        src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
                    <div className="relative leading-[150%] inline-block max-w-full">
                      <span className="font-medium">
                        <span>{`Functional areas `}</span>
                      </span>
                      <span className="text-sm text-typography-grey-main">
                        <span className="font-medium">(</span>
                        <span>You can select max 6 functional areas)</span>
                      </span>
                      <span className="font-medium">{` `}</span>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                      <div className="self-stretch rounded-md bg-background-base box-border flex flex-row items-center justify-between py-3 px-[17px] max-w-full gap-[20px] border-[1px] border-solid border-typography-grey-light">
                        <div className="flex flex-row flex-wrap items-center justify-start py-0 pr-[92.5px] pl-0 box-border gap-[15px] max-w-[calc(100%_-_44px)] mq450:pr-5 mq450:box-border">
                          <button className="cursor-pointer [border:none] py-1.5 px-[5px] bg-background-secondary w-12 rounded-md flex flex-row items-center justify-start box-border hover:bg-gainsboro-200">
                            <div className="relative text-base leading-[100%] font-medium font-lato text-gray text-left inline-block min-w-[37px]">
                              Sales
                            </div>
                          </button>
                          <button className="cursor-pointer [border:none] py-1.5 px-[5px] bg-background-secondary rounded-md flex flex-row items-center justify-start hover:bg-gainsboro-200">
                            <div className="relative text-base leading-[100%] font-medium font-lato text-gray text-left inline-block min-w-[80px]">
                              Operations
                            </div>
                          </button>
                          <button className="cursor-pointer [border:none] py-1.5 px-[5px] bg-background-secondary rounded-md flex flex-row items-center justify-start hover:bg-gainsboro-200">
                            <div className="relative text-base leading-[100%] font-medium font-lato text-gray text-left inline-block min-w-[106px]">
                              Administration
                            </div>
                          </button>
                        </div>
                        <img
                          className="h-6 w-6 relative"
                          loading="lazy"
                          alt=""
                          src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-sm text-typography-grey-main mq800:flex-wrap">
                <div className="rounded flex flex-row items-center justify-start py-3 px-4 box-border gap-[8px] max-w-full">
                  <img
                    className="h-[21.6px] w-[14.4px] relative"
                    loading="lazy"
                    alt=""
                    src="/icon-1.svg"
                  />
                  <div className="relative leading-[18px]">
                    You complete career details later in profile section.
                  </div>
                </div>
                <div className="flex flex-row items-center justify-end gap-[20px] font-inter">
                  <div className="flex flex-row items-center justify-start">
                    <div className="relative inline-block min-w-[73px]">
                      Setup later
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-[9px] px-6 bg-typography-grey-dark rounded-xl flex flex-row items-center justify-center hover:bg-slategray">
                    <div className="relative text-sm font-medium font-poppins text-background-base text-left inline-block min-w-[65px] text-white">
                      Continue
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-3xs bg-background-base overflow-hidden flex flex-row items-start justify-between p-[30px] gap-[20px] text-typography-grey-main">
              <div className="flex flex-col items-start justify-start gap-[1px]">
                <b className="relative">Setup your calendar</b>
                <div className="relative text-base leading-[24px]">
                  Start your journey with setting your calendar
                </div>
              </div>
              <img
                className="h-7 w-7 relative"
                loading="lazy"
                alt=""
                src="https://cdn.hugeicons.com/icons/circle-stroke-rounded.svg"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="w-full">
        <Footer />
      </div>
      
    </div>
  );
};

export default Onboarding3A;

