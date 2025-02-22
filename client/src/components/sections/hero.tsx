import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-background pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Beauty
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Welcome to Sondaryam Makeup Studio, where we enhance your natural beauty 
              with expert care and premium services in our elegant and relaxing environment.
            </p>
            <Button
              size="lg"
              onClick={() => {
                toast({
                  title: "Coming soon!",
                  description: "Online booking will be available shortly.",
                });
              }}
            >
              Book an Appointment
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden">
              <img
                src="/attached_assets/parlour1.jpg"
                alt="Sondaryam Makeup Studio Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}