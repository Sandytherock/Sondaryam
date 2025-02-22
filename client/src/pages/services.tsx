import { motion } from "framer-motion";
import { ServicesSection } from "@/components/sections/services-section";

export default function Services() {
  return (
    <main className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our comprehensive range of beauty services designed to enhance your natural beauty
        </p>
      </motion.div>
      <ServicesSection />
    </main>
  );
}
