import Card from "./Card";

import { useNavigate } from 'react-router-dom';
import Illustration from '../assets/Illustration.png'

const Internal1A = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Onboarding2A');
  }
  return (
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
                  <button onClick={handleClick} className="cursor-pointer [border:none] py-2.5 px-5 bg-typography-grey-dark rounded-xl flex flex-col items-start justify-start whitespace-nowrap hover:bg-slategray">
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
                src={Illustration}
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
                  src="https://cdn.hugeicons.com/icons/circle-stroke-rounded.svg" 
                />
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
  );
};

export default Internal1A;

