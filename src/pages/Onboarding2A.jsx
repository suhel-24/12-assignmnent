import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

import { useNavigate } from 'react-router-dom';

const Onboarding2A = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Onboarding3A');
  }
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div>
        <div className="w-full rounded-xl bg-background-primary overflow-hidden flex flex-col items-start justify-start gap-[193px] leading-[normal] tracking-[normal] mq450:gap-[48px] mq750:gap-[96px]">
          <main className="self-stretch flex w-screen flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[22px]">
            <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0 text-left text-[28px] text-typography-grey-dark font-lato">
              <div className="w-[785px] flex flex-col items-center justify-start gap-[30px] max-w-full">
                <div className="self-stretch rounded-xl bg-background-base flex flex-row items-center justify-between py-[30px] px-10 box-border max-w-full gap-[20px] mq1050:flex-wrap">
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
                    <div className="flex flex-row items-center justify-start gap-[20px] max-w-full text-base text-typography-grey-main mq450:flex-wrap">
                      <button className="cursor-pointer [border:none] py-2.5 px-5 bg-typography-grey-dark rounded-xl flex flex-col items-start justify-start whitespace-nowrap hover:bg-slategray">
                        <div className="text-white relative text-[14px] font-medium font-poppins text-background-base text-left inline-block min-w-[81px]">
                          Get Started
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
                    src="src/assets/Illustration.png"
                  />
                </div>
                <div className="self-stretch  rounded-3xs bg-background-secondary overflow-hidden flex flex-col items-start justify-start p-[30px] box-border max-w-full text-lg text-typography-grey-main">
                  <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px]">
                    <div className="flex flex-col items-start justify-center py-[0.5px] px-0 box-border max-w-[calc(100%_-_48px)]">
                      <b className="relative">Update your profile</b>
                      <div className="relative text-base leading-[24px]">
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
                  <div className="pt-3 w-full text-l">
                    <div className="flex flex-col ">
                      <div>
                        <div>
                          <label
                            htmlFor="fullName"
                            className=" relative leading-[150%] font-medium inline-block box-border pr-5"
                          >
                            Full Name
                          </label>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-[18px] text-gray">
                            <div className="self-stretch rounded-md bg-background-base box-border flex flex-row flex-wrap items-center justify-start py-3 px-[15px] gap-[16px] max-w-full border-[1px] border-solid border-neutral-300">
                              <input
                                id="fullName"
                                className="flex-1 bg-transparent outline-none border-none leading-[100%] min-w-[93px] max-w-full"
                                placeholder="Willie Jennings"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full flex flex-row flex-wrap items-start justify-start gap-[30px] leading-[normal] tracking-[normal] text-left text-sm text-typography-grey-dark font-lato">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[224px] max-w-full">
                          <label
                            htmlFor="emailInput"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Email ID
                          </label>
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <div className="self-stretch rounded-md bg-background-base flex flex-row items-center justify-between border border-neutral-300">
                              <input
                                id="emailInput"
                                className="flex-1 rounded-l-md p-4 text-lg font-lato bg-transparent text-gray-700 border "
                                placeholder="willie.jennings@gmail.com"
                                type="email"
                              />
                              <span className="inline-flex items-center px-3 border-l border-neutral-800">
                                <img
                                  className="h-[18px] w-[18px]"
                                  alt=""
                                  src="https://cdn.hugeicons.com/icons/checkmark-circle-01-stroke-rounded.svg"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[224px] max-w-full">
                          <label
                            htmlFor="mobileInput"
                            className="block text-lg font-medium text-gray-700"
                          >
                            Mobile Number
                          </label>
                          <div className="self-stretch rounded-md bg-background-base flex flex-row items-center justify-start border border-neutral-400">
                            <img
                              className="h-6 w-6 mx-4 rounded-full object-cover border border-neutral-400"
                              alt=""
                              src="src/assets/Ellipse1.svg"
                            />
                            <div className="flex items-center border-r border-background-divider pr-4">
                              <span className="text-lg font-lato text-gray-700">{`+91`}</span>
                            </div>
                            <input
                              id="mobileInput"
                              className="flex-1 p-4 text-lg font-lato bg-transparent text-gray-700 outline-none border-none border border-gray-800"
                              placeholder="9988776655"
                              type="tel"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="w-full flex flex-col items-start justify-start gap-[8px] leading-[normal] tracking-[normal] text-left text-[14px] text-typography-grey-dark font-lato">
                          <label
                            htmlFor="timezone"
                            className="w-[81px] relative leading-[150%] font-medium inline-block box-border pr-5"
                          >
                            Timezone
                          </label>
                          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-[18px] text-gray">
                            <div className="self-stretch rounded-md bg-background-base box-border flex flex-row items-center justify-start py-3 px-[15px] gap-[16px] max-w-full border-[1px] border-solid border-neutral-300">
                              <select
                                id="timezone"
                                className="flex-1 bg-transparent outline-none border-none leading-[100%] font-medium max-w-[calc(100%_-_40px)] appearance-none"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select your timezone
                                </option>
                                <option value="UTC-5">
                                  (UTC-05:00) Eastern Standard Time
                                </option>
                                <option value="UTC+0">
                                  (UTC+00:00) Greenwich Mean Time
                                </option>
                                <option value="UTC+5.5">
                                  (UTC+05:30) Chennai, Kolkata, Mumbai, New
                                  Delhi
                                </option>
                                <option value="UTC+9">
                                  (UTC+09:00) Japan Standard Time
                                </option>
                              </select>
                              <img
                                className="h-6 w-6 relative"
                                loading="lazy"
                                alt="Drop-down icon"
                                src="https://cdn.hugeicons.com/icons/arrow-down-01-stroke-rounded.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className='mt-3 flex justify-between text-center'>
  <div className="text-center pt-2">You can update details later in the profile section.</div>
  <div onClick={handleClick}  className='flex cursor-pointer flex-col justify-center items-center gap-2'>
    <div onClick={handleClick} className='bg-blue-500 text-white p-2 rounded'>Continue</div>
  </div>
</div>

                      </div>
                    </div>
                  </div>
                </div>
                <Card
                  chooseTheTypeComp="Update your experience"
                  creatingYourCompan="Starting your journey with updating your corporate and coaching experience."
                  checklist="https://cdn.hugeicons.com/icons/circle-stroke-rounded.svg"
                />
                <Card
                  chooseTheTypeComp="Setup your calendar"
                  creatingYourCompan="Start your journey with setting your calendar"
                  checklist="https://cdn.hugeicons.com/icons/circle-stroke-rounded.svg"
                  propPadding="unset"
                  propGap="1px"
                  propColor="#71778e"
                />
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Onboarding2A;
