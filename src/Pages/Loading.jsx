import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // your image

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
      <motion.img
        src={logo}
        alt="loading"
        className="w-24 h-24 md:w-50 md:h-50"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,        
          repeat: Infinity,    
          ease: "linear",      
        }}
      />

      <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Loading ...</h2>

    </div>
  );
}