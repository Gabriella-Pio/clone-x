import Image from "next/image";
import Link from "next/link";
//git testing annnnddd updating!!!!!!!!!!!!!!!!!

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