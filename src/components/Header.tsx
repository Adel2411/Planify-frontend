import Logo from "./Logo";
import * as motion from "motion/react-client";

function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 80, dump: 0.5 }}
      className="fixed w-full p-4 flex items-center justify-start z-20"
    >
      <Logo />
    </motion.header>
  );
}

export default Header;
