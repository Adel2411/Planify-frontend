import Image from "next/image";

function Logo() {
  return (
    <div className="fixed left-4 top-4 flex justify-center items-center gap-2 p-2">
      <Image src="/colored-logo.png" alt="app logo" width={30} height={30} />
      <p className="text-md font-medium">Planify</p>
    </div>
  );
}

export default Logo;
