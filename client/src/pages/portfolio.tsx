
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our diverse range of beauty services and transformations
        </p>
      </motion.div>
      <PortfolioSection />
    </main>
  );
}
