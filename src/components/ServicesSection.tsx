import { Shield, Heart, Scale, Users, Home, Repeat } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Permanente Familiegrafplaatsen",
    description: "Geen grafruiming. Eeuwigdurend grafrecht van 99 jaar met mogelijkheid tot verlenging.",
  },
  {
    icon: Shield,
    title: "Volledige Privacy",
    description: "Apart-ondergrondse ruimten voor mannen en vrouwen, met respect voor islamitische waarden.",
  },
  {
    icon: Scale,
    title: "100% Conform Wetgeving",
    description: "In overeenstemming met islamitische regels én Nederlandse wetgeving.",
  },
  {
    icon: Users,
    title: "Volledige Dienstverlening",
    description: "Begeleiding bij administratieve en juridische procedures, rituele wassing en gebed.",
  },
  {
    icon: Repeat,
    title: "Islamitisch Hergebruik",
    description: "Mogelijkheid tot hergebruik van graven na elke 10 jaar, met capaciteit voor 360 overledenen.",
  },
  {
    icon: Heart,
    title: "Gemoedsrust voor Familie",
    description: "Een rustige, veilige omgeving omgeven door natuur voor het bezoeken van uw dierbaren.",
  },
];

const ServicesSection = () => {
  return (
    <section id="diensten" className="py-24 bg-background islamic-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Onze Diensten</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Wat bieden wij?
          </h2>
          <div className="geometric-border w-32 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Bij de Eeuwige Islamitische Begraafplaats bieden wij een volledige dienstverlening, 
            die gemoedsrust garandeert voor uw familie met volledige naleving van de islamitische 
            voorschriften en de Nederlandse wetgeving.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-card transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-primary rounded-2xl p-10 shadow-elevated">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">99</p>
              <p className="text-primary-foreground/80 text-sm">Jaar Contract</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">360</p>
              <p className="text-primary-foreground/80 text-sm">Capaciteit per Graf</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">40</p>
              <p className="text-primary-foreground/80 text-sm">m² per Locatie</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">24/7</p>
              <p className="text-primary-foreground/80 text-sm">Beschikbaarheid</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
