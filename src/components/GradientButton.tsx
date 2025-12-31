import type { FC } from "react";

interface GradientButtonProps {
  text: string;
  link?: string;
  extraStyle?: string;
}

const GradientButton: FC<GradientButtonProps> = ({
  text,
  link,
  extraStyle,
}) => {
  return (
    <>
      <a
        href={link || "#"}
        className={`${
          extraStyle || ""
        } btn uppercase font-heading border-2 border-transparent text-center min-w-[205px] px-12 py-2 lg:py-3 rounded-full`}
      >
        {text}
      </a>
    </>
  );
};

export default GradientButton;
