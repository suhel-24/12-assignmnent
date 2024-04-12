import { useMemo } from "react";

const Card = ({
  chooseTheTypeComp,
  creatingYourCompan,
  checklist,
  propPadding,
  propGap,
  propColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const chooseTheTypeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="bg-white self-stretch rounded-3xs bg-background-base overflow-hidden flex flex-row items-start justify-between p-[30px] box-border max-w-full gap-[20px] text-left text-lg text-lightslategray font-lato">
      <div
        className="flex flex-col items-start justify-center py-[0.5px] px-0 box-border max-w-[calc(100%_-_48px)]"
        style={frameDivStyle}
      >
        <b className="relative" style={chooseTheTypeStyle}>
          {chooseTheTypeComp}
        </b>
        <div className="relative text-base leading-[24px] text-typography-grey-main">
          {creatingYourCompan}
        </div>
      </div>
      <img className="h-7 w-7 relative" loading="lazy" alt="" src={checklist} />
    </div>
  );
};

export default Card;