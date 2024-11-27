import { ImageIcon } from "../button";

interface IconBadgeProps {
    src: string;
    alt: string;
    count: string | number | null;
}

const IconBadge = ({ src, alt, count }: IconBadgeProps) => {
    return (
        <div className="relative w-fit">
            {count && (
                <p className="absolute z-[4] top-[-10px] right-[-8px] text-[8px] flex items-center justify-center font-[600] text-center text-white bg-danger rounded-full  p-1 w-[20px] h-[20px]">
                    {count}
                </p>
            )}
            <ImageIcon image={src} alt={alt} />
        </div>
    );
};

export default IconBadge