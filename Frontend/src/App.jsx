import { motion } from "framer-motion";
import { Mail, Rocket } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full text-center bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8"
      >
        <div className="flex justify-center mb-4">
          <Rocket className="w-10 h-10 text-indigo-400" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          We’re Building Something Awesome 🚀
        </h1>

        <p className="text-slate-300 mb-6">
          Our digital agency is currently under development. We’re crafting
          powerful web apps, custom CRMs, and AI-driven solutions to help
          businesses scale.
        </p>

        <div className="border border-white/10 rounded-xl p-4 mb-6">
          <p className="text-lg font-semibold">Coming Soon</p>
          <p className="text-sm text-slate-400">Stay tuned for the launch</p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
          <Mail className="w-4 h-4" />
          <span>contact us soon</span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-xs text-slate-500"
        >
          © {new Date().getFullYear()} Your Digital Agency. All rights reserved.
        </motion.p>
      </motion.div>
    </div>
  );
}
