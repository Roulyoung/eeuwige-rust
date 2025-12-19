import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Twee ondergrondse kamers: één voor mannen, één voor vrouwen",
  "18 graven per kamer (6 horizontaal × 3 verticaal)",
  "Hergebruik mogelijk elke 10 jaar",
  "Capaciteit van 360 overledenen per begraafplaats",
  "Volledig ondergronds, beschermd tegen grondwater",
  "Correct gericht naar de Qibla",
  "Geprefabriceerde cementplaten voor duurzaamheid",
  "90% minder grondoppervlak dan traditionele begraafplaatsen",
];

const DesignSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ontwerp" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Innovatief Ontwerp</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Ontwerp en Ruimte
            </h2>
            <div className="geometric-border w-24 mb-8" />
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Elke familiebegraafplaats bestaat uit twee aparte ondergrondse kamers. 
              Dankzij deze structuur kan elk graf volgens de Nederlandse wetgeving om de tien 
              jaar opnieuw worden gebruikt, waardoor één familiegraflocatie tijdens de 
              contractperiode plaats biedt aan maximaal 360 overledenen.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" onClick={scrollToContact}>
              Reserveer Nu
            </Button>
          </div>

          {/* Right - Visual Diagram */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
              Structuur van de Familiebegraafplaats
            </h3>
            
            {/* Diagram */}
            <div className="relative">
              {/* Ground Level */}
              <div className="bg-emerald-light/20 rounded-t-xl p-4 border-2 border-dashed border-primary/30">
                <p className="text-center text-sm text-muted-foreground">Ingang op grondniveau</p>
              </div>
              
              {/* Underground Chambers */}
              <div className="mt-2 grid grid-cols-2 gap-4">
                {/* Men's Chamber */}
                <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
                  <p className="text-center font-semibold text-primary mb-4">Mannenkamer</p>
                  <div className="grid grid-cols-6 gap-1">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="aspect-square bg-primary/30 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3">18 graven (6×3)</p>
                </div>
                
                {/* Women's Chamber */}
                <div className="bg-gold/10 rounded-xl p-6 border border-gold/20">
                  <p className="text-center font-semibold text-accent mb-4">Vrouwenkamer</p>
                  <div className="grid grid-cols-6 gap-1">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gold/30 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3">18 graven (6×3)</p>
                </div>
              </div>

              {/* Arrow to Qibla */}
              <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
                <span className="text-sm">Gericht naar de Qibla</span>
                <span className="text-xl">🕋</span>
              </div>
            </div>

            {/* Capacity Info */}
            <div className="mt-8 bg-secondary rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Totale capaciteit</p>
                  <p className="text-2xl font-serif font-bold text-foreground">360 overledenen</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Contractduur</p>
                  <p className="text-2xl font-serif font-bold text-foreground">99 jaar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
