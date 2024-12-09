import * as motion from "motion/react-client";
import { centuryGothicBold, centuryGothicItalic } from "./layout";
import Image from "next/image";

export default function Home() {
  const container = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const item = {
    hidden: { y: -30 },
    show: { y: 0 },
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-8">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className={`${centuryGothicBold.className} text-4xl flex flex-wrap gap-2`}
      >
        <motion.li variants={item}>DevFest</motion.li>
        <motion.li variants={item}>Batna</motion.li>
        <motion.li variants={item}>2024</motion.li>
        {/* DevFest Batna 2024 */}
      </motion.ul>
      <div className="flex justify-center items-center gap-4">
        <p className={`${centuryGothicItalic.className} text-xl`}>
          Coming Soon...
        </p>
        <Image
          src="/GDG-Batna-Logo.jpeg"
          alt="dev fest 2024 logo"
          width={50}
          height={50}
          className="rounded-md object-cover"
        />
      </div>
    </main>
  );
}
