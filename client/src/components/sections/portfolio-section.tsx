import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      image: "/attached_assets/parlour3.jpg",
      title: "Makeup Studio",
    },
    {
      id: 2,
      image: "/attached_assets/parlour2.jpg",
      title: "Professional Setup",
    },
    {
      id: 3,
      image: "/attached_assets/parlour1.jpg",
      title: "Modern Facilities",
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of makeup transformations and professional services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-2xl overflow-hidden relative group"
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="hover:bg-primary/10"
          >
            View More Work
          </Button>
        </div>
      </div>
    </section>
  );
}