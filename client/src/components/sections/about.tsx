import { motion } from "framer-motion";

export function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-[2rem] overflow-hidden"
          >
            <img
              src="/attached_assets/parlour2.jpg"
              alt="Sondaryam Makeup Studio Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Sondaryam</h2>
            <p className="text-muted-foreground mb-6">
              At Sondaryam Makeup Studio, we believe in enhancing your natural beauty. 
              Our state-of-the-art facility features modern amenities and a serene 
              atmosphere where you can relax and rejuvenate.
            </p>
            <p className="text-muted-foreground mb-6">
              Our team of skilled professionals is committed to providing you with 
              personalized beauty services that cater to your unique style and preferences.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Expert Artists</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}