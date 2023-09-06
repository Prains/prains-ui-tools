interface ProgressBarProps {
  progress: number;
  className?: string;
  backgroundBarColor: string;
  progressBarColor: string;
  progressBarStyles?: string;
}

const ProgressBar = ({
  progress,
  className,
  backgroundBarColor,
  progressBarColor,
  porogressBarStyles,
}: ProgressBarProps) => {
  return (
    <div className={`${backgroundBarColor} rounded-[4px] h-1 ` + className}>
      <div
        className={`rounded-[4px] ${progressBarColor} h-1 ${progressBarStyles}}`}
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
