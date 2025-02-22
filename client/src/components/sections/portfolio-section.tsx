
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "makeup", label: "Makeup" },
    { id: "hairstyle", label: "Hair Style" },
    { id: "haircut", label: "Hair Cut" },
    { id: "facial", label: "Facial" },
    { id: "nails", label: "Nail Care" }
  ];

  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
      title: "Bridal Makeup",
      category: "makeup"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
      title: "Party Makeup",
      category: "makeup"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560869713-da86a9ec94e6",
      title: "Modern Hairstyle",
      category: "hairstyle"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
      title: "Trendy Haircut",
      category: "haircut"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
      title: "Facial Treatment",
      category: "facial"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1525348371953-ac094a7e3897",
      title: "Professional Hairstyling",
      category: "hairstyle"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
      title: "Manicure",
      category: "nails"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8",
      title: "Pedicure",
      category: "nails"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
      title: "Foot Spa",
      category: "spa"
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2",
      title: "Body Massage",
      category: "spa"
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f",
      title: "Eyebrow Threading",
      category: "threading"
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8",
      title: "Beauty Package",
      category: "facial"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our portfolio of makeup transformations and professional services
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="min-w-[100px]"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex items-end opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
