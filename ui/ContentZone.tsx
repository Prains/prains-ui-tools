interface IUi {
  children: React.ReactNode;
  className?: string;
  zoneWidth: string;
  maximumZoneWidth: string;
}

const ContentZone = ({
  children,
  className,
  zoneWidth,
  maximumZoneWidth,
}: IUi) => {
  return (
    <div
      className={`${zoneWidth} mx-auto ${maximumZoneWidth}` + ` ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentZone;
