import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="fixed left-4 top-4">
      <Link
        href="/"
        className="flex justify-center items-center gap-2 hover:text-primary"
      >
        <Image src="/colored-logo.png" alt="app logo" width={30} height={30} />
        <p className="text-md font-medium">Planify</p>
      </Link>
    </div>
  );
}

export default Logo;
