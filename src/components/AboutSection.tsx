import { Button } from "@/components/ui/button";

const team = [
  { name: "Salman Salman", role: "Voorzitter", photo: "/images/team-salman.jpg" },
  { name: "Samar Shaalan", role: "Secretaris", photo: "/images/team-samar.jpg" },
  { name: "Mohamed Foad", role: "Penningmeester", photo: "/images/team-mohamed.jpg" },
  { name: "Mohsen Aly", role: "Ingenieursadviseur", photo: "/images/team-mohsen.jpg" },
  { name: "Mohamed Younes", role: "Publieke Relaties", photo: "/images/team-younes.jpg" },
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
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Over ons</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            De islamitische begraafplaats
          </h2>
          <div className="geometric-border w-32 mx-auto mb-6" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Wie wij zijn
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Uit respect voor onze overledenen en het leven dat zij hebben geleid, bouwen wij aan een
              duurzame, islamitisch verantwoorde begraafplaats. Het initiatief komt voort uit waardigheid en
              de wens om een veilige en respectvolle laatste rustplaats te bieden.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Wij zijn een groep deskundigen met ervaring op dit gebied, toegewijd aan het dienen van de
              moslimgemeenschap in Nederland. Samen creëren we een rustige plek die is ingericht volgens de
              hoogste islamitische en wettelijke normen.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Onze visie
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Iedere moslim en moslima in Nederland een islamitisch verantwoord en veilig graf bieden dat
              gemoedsrust geeft aan families voor vele generaties.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We putten inspiratie uit succesvolle islamitische voorbeelden in onder andere Egypte en
              Saoedi-Arabie, waar permanente familiegrafplaatsen ondergronds worden gebouwd met een ontwerp
              dat volledig sharia- en wetgevingsproof is.
            </p>
            <Button variant="default" onClick={scrollToContact}>
              Neem contact op
            </Button>
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-10">
            Ons team
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center shadow-soft border border-border hover:shadow-card transition-shadow"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border border-border">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
