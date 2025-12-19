import { Button } from "@/components/ui/button";

const team = [
  { name: "Salman Salman", role: "Voorzitter" },
  { name: "Samar Shaalan", role: "Secretaris" },
  { name: "Mohamed Foad", role: "Penningmeester" },
  { name: "Mohsen Aly", role: "Ingenieursadviseur" },
  { name: "Mohamed Younes", role: "Publieke Relaties" },
];

const AboutSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="over-ons" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Over Ons</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            De Islamitische Begraafplaats
          </h2>
          <div className="geometric-border w-32 mx-auto mb-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div>
            <p className="text-gold text-xl font-serif mb-6">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
            </p>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Wie wij zijn
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Op basis van onze overtuiging dat respect voor de overledenen een voortzetting 
              is van respect voor het leven, zijn wij een initiatief dat is opgericht vanuit 
              waardigheid en de wens om duurzame en islamitisch verantwoorde begraafoplossingen 
              te bieden.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wij zijn een groep deskundigen met ervaring op dit gebied, toegewijd aan het 
              dienen van de moslimgemeenschap in Nederland. Wij streven ernaar een rustige, 
              respectvolle plek te creëren die is ingericht volgens de hoogste islamitische 
              en wettelijke normen.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Onze Visie
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Iedere moslim en moslima in Nederland een islamitisch verantwoord en veilig 
              graf bieden, dat de voorschriften van de islam respecteert en rust en 
              gemoedsvreden biedt aan families voor vele generaties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Wij hebben onze inspiratie gehaald uit succesvolle islamitische voorbeelden 
              in landen als Egypte en Saoedi-Arabië, waar permanente familiebegraafplaatsen 
              ondergronds worden gebouwd met islamitisch verantwoorde ontwerpen.
            </p>
            <Button variant="default" onClick={scrollToContact}>
              Neem Contact Op
            </Button>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-10">
            Ons Team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
