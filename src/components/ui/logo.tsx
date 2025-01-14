import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number;
}

export const Logo = () => {
    return (
        <Link href="/">
            <Image>
                src={'/logo.png'}
                alt="Z"
                width={size}
                height={serialize,size}
            </Image>
        </Link>
    )
}