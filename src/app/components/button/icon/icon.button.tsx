import Image from "next/image";

export interface ImageIconProps {
  image: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string
}

export const ImageIcon = ({ image, alt, height, width, className = "w-auto h-auto" }: ImageIconProps) => {
  return (
    <Image
      priority
      height={height ?? 24}
      width={width ?? 24}
      src={image}
      alt={alt}
      className={className}
    />
  );
};

export const ImageIconWithLabel = ({
  label,
  imageIconProps,
  bold,
  prefixLabel,
  className

}: {
  label: string | number;
  imageIconProps: ImageIconProps;
  bold?: boolean;
  prefixLabel?: string;
  className?: string

}) => {
  return (
    <div className="flex gap-[8px] items-center">
      <ImageIcon
        alt={imageIconProps.alt}
        image={imageIconProps.image}
        height={imageIconProps.height}
        width={imageIconProps?.width}
        className={className}
      />
      <span className={[" text-gray-60 text-sm", bold ? "font-bold" : "font-p"].join(" ")}>
        <span className="inline-flex items-center text-sm gap-[4px]">
          <span className="text-sm">{prefixLabel}</span>
          <span className="font-semibold text-sm">{label}</span>
        </span>
      </span>
    </div>
  );
};
