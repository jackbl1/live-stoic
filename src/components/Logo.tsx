import Image from "next/image";

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span className={`text-gray-900 inline-flex items-left ${fontStyle}`}>
      <Image
        src="/assets/images/livestoic-logo.png"
        alt="Logo"
        width={276}
        height={82}
      />
    </span>
  );
};

export { Logo };
