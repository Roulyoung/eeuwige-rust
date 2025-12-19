import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cemetery.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/80 via-emerald-deep/70 to-emerald-deep/90" />
      </div>

      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 islamic-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          {/* Arabic Bismillah */}
          <p className="text-gold text-2xl md:text-3xl font-serif mb-6 animate-fade-in">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-6 animate-fade-in-up leading-tight">
            In vertrouwen begraven
          </h1>

          {/* Decorative Line */}
          <div className="geometric-border w-48 mx-auto mb-8 animate-fade-in-delay-1" />

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-cream/90 font-light mb-4 animate-fade-in-delay-1">
            Welkom bij de Eeuwige Islamitische Begraafplaats in Nederland
          </p>
          <p className="text-lg text-gold-light mb-8 animate-fade-in-delay-2">
            Uw familiegraven volgens de islam
          </p>

          {/* Description */}
          <p className="text-cream/80 text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delay-2">
            Wij combineren de voorschriften van de islamitische wetgeving met de lokale regelgeving 
            om een veilige en respectvolle plek te bieden voor het begraven van uw dierbaren.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3 pb-20">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection("contact")}
              className="rounded-lg"
            >
              Neem Contact Op
            </Button>
            <Button 
              variant="heroOutline" 
              onClick={() => scrollToSection("diensten")}
              className="rounded-lg"
            >
              Lees Meer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
