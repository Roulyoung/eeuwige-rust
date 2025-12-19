import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Twee ondergrondse kamers: een voor mannen, een voor vrouwen",
  "18 graven per kamer (6 horizontaal x 3 verticaal)",
  "Hergebruik mogelijk elke 10 jaar volgens de wet",
  "Capaciteit van 360 overledenen per familiegraf",
  "Volledig ondergronds en beschermd tegen grondwater",
  "Correct gericht naar de Qibla",
  "Geprefabriceerde cementplaten voor duurzaamheid",
  "90% minder grondoppervlak dan traditionele begraafplaatsen",
];

const designImages = [
  { src: "/images/gallery-entrance.jpg", caption: "Ingang van de nieuwe begraafplaats" },
  { src: "/images/gallery-new.jpg", caption: "Nieuwe familiegrafkamers (6×3)" },
  { src: "/images/gallery-current.jpg", caption: "Huidige begraafplaatsen in Nederland" },
  { src: "/images/gallery-family.jpg", caption: "Familiegraven voor de gemeenschap" },
];

const DesignSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="ontwerp" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Ontwerp</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Ontwerp en ruimte
              </h2>
              <div className="geometric-border w-24 mb-6" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Elke familiebegraafplaats bestaat uit twee aparte ondergrondse kamers: een voor mannen en een
                voor vrouwen. Elke kamer bevat 18 graven (6 horizontaal en 3 verticaal). Dankzij deze
                structuur kan elk graf om de tien jaar opnieuw worden gebruikt. Zo biedt een locatie van
                40&nbsp;m2 tijdens de contractperiode plaats aan maximaal 360 overledenen.
              </p>
            </div>

            <div>
              <ul className="space-y-4 mb-6">
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
                Reserveer nu
              </Button>
            </div>
          </div>

          {/* Right - Info card + Visual gallery */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl shadow-card p-6 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Structuur van de familiebegraafplaats
                </h3>
                <span className="text-sm text-muted-foreground">Gericht naar de Qibla</span>
              </div>

              <div className="rounded-xl border border-dashed border-primary/30 p-4 bg-primary/5 text-sm text-muted-foreground text-center">
                Ingang op grondniveau
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-primary/20 bg-primary/10 p-4">
                  <p className="text-primary font-semibold text-center mb-2">Mannenkamer</p>
                  <div className="grid grid-cols-6 gap-1">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="aspect-square bg-primary/30 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">18 graven (6×3)</p>
                </div>
                <div className="rounded-xl border border-gold/20 bg-gold/10 p-4">
                  <p className="text-accent font-semibold text-center mb-2">Vrouwenkamer</p>
                  <div className="grid grid-cols-6 gap-1">
                    {[...Array(18)].map((_, i) => (
                      <div key={i} className="aspect-square bg-gold/30 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">18 graven (6×3)</p>
                </div>
              </div>

              <p className="text-center text-xs text-muted-foreground">Gericht naar de Qibla</p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-secondary p-4 text-center">
                  <p className="text-xs text-muted-foreground">Totale capaciteit</p>
                  <p className="text-xl font-serif font-semibold text-foreground">360 overledenen</p>
                </div>
                <div className="rounded-xl bg-secondary p-4 text-center">
                  <p className="text-xs text-muted-foreground">Contractduur</p>
                  <p className="text-xl font-serif font-semibold text-foreground">99 jaar</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {designImages.map((item, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl shadow-card border border-border bg-card group"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-cream drop-shadow">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
