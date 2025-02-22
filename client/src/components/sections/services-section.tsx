import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/service-card";

const services = [
  {
    id: 1,
    name: "Bridal Makeup",
    description: "Complete bridal makeup package with trials",
    price: 15000,
    duration: 180,
    image: "/attached_assets/bridal-makeup.jpg" 
  },
  {
    id: 2,
    name: "Party Makeup",
    description: "Perfect look for any special occasion",
    price: 5000,
    duration: 90,
    image: "/attached_assets/parlour2.jpg" 
  },
  {
    id: 3,
    name: "Hair Styling",
    description: "Professional hair styling services",
    price: 2500,
    duration: 60,
    image: "/attached_assets/parlour1.jpg" 
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our wide range of professional beauty services designed to enhance your natural beauty
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}