import Image from "next/image"

export const CircularLodaer = () => {
    return <span className="loading loading-spinner scale-75 h-[18px]"></span>
}

export const CenterCircularLoader = ({ height = "h-[200px]" }: { height?: string }) => {
    return <div className={`${height} flex items-center justify-center`}>
        <CircularLodaer />
    </div>
}

export const PrimaryCircularLoader = () => {
    return <span className="loading loading-spinner bg-primary"></span>
}

export const LogoLoader = () => {
    return <div className="flex h-screen w-screen justify-center items-center">
        <Image
            src="/logo.svg"
            alt="Show Machine"
            width={121}
            height={100}
            className="animate-pulse h-[250px] w-[250px]"
        />
    </div>
}