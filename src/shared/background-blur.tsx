export function BackgroundBlur({
  top,
  right,
  style = {},
}: {
  top: number;
  right: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute top-[${top}px] right-[${right}px] w-[1154px] h-[1154px] rounded-full pointer-events-none z-[-1]`}
      style={{
        background: `linear-gradient(87.75deg, rgba(148, 72, 252, 0.09) 5.13%, rgba(25, 251, 155, 0.09) 93.95%)`,
        filter: "blur(30px)",
        ...style,
      }}
    />
  );
}

export default BackgroundBlur;
