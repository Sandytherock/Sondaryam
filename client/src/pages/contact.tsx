import { motion } from "framer-motion";
import { ContactSection } from "@/components/sections/contact-section";

export default function Contact() {
  return (
    <main className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get in touch with us for appointments and inquiries. We're here to help you look and feel your best.
        </p>
      </motion.div>
      <ContactSection />
    </main>
  );
}
