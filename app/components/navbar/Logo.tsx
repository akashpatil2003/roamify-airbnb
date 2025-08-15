'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <div
        className=""
    >
        <Image 
            alt="logo"
            className="hidden md:block cursor-pointer object-fill"
            height="100"
            width="100"
            src="/images/logo.png"
        />
    </div>
  )
}

export default Logo;