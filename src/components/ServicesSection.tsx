import { Shield, Heart, Scale, Users, Home, Repeat } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Permanente familiegrafplaatsen",
    description: "Geen grafruiming: 99 jaar contractduur met de mogelijkheid tot verlenging.",
  },
  {
    icon: Shield,
    title: "Volledige privacy",
    description: "Gescheiden ondergrondse ruimten voor mannen en vrouwen, geheel in lijn met islamitische waarden.",
  },
  {
    icon: Scale,
    title: "Conform sharia en wetgeving",
    description: "100% in overeenstemming met islamitische richtlijnen en de Nederlandse wet.",
  },
  {
    icon: Users,
    title: "Volledige dienstverlening",
    description: "Begeleiding bij administratieve en juridische procedures, rituele wassing en gebed.",
  },
  {
    icon: Repeat,
    title: "Efficient ontwerp",
    description: "Twee kamers met elk 18 individuele graven (6x3), herbruikbaar elke tien jaar volgens de regels.",
  },
  {
    icon: Heart,
    title: "Toekomstbestendig",
    description: "Capaciteit tot 360 overledenen per familiegraf, ontwikkeld voor komende generaties.",
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
            Bij de Eeuwige islamitische begraafplaats bieden wij een volledige dienstverlening die gemoedsrust
            garandeert. Alles gebeurt met respect voor de islamitische voorschriften en de Nederlandse wetgeving.
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
              <p className="text-primary-foreground/80 text-sm">Jaar contract</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">360</p>
              <p className="text-primary-foreground/80 text-sm">Capaciteit per familiegraf</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">40</p>
              <p className="text-primary-foreground/80 text-sm">m2 per locatie</p>
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
