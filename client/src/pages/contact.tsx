
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        {/* Contact form and content here */}
      </motion.div>
    </main>
  );
}
