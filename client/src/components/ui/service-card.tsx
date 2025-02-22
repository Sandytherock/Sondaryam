import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ServiceCardProps {
  service: {
    name: string;
    description: string;
    price: number;
    duration: number;
    image: string;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  const { toast } = useToast();

  return (
    <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
      <div className="aspect-[4/3] relative">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-primary-foreground">{service.name}</h3>
          <div className="text-right">
            <p className="text-lg font-semibold text-primary">₹{service.price}</p>
            <p className="text-sm text-muted-foreground">
              {service.duration} mins
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{service.description}</p>
        <Button 
          className="w-full bg-primary hover:bg-primary/90"
          onClick={() => {
            toast({
              title: "Coming soon!",
              description: "Online booking will be available shortly.",
            });
          }}
        >
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}