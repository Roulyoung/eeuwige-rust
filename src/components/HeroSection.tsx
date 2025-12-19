import { Button } from "@/components/ui/button";

const heroImage = "/images/hero.jpg";

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
      <div className="relative z-10 container mx-auto px-4 text-center pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-2xl md:text-3xl font-serif mb-6 animate-fade-in leading-snug">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْم
          </p>

          <p className="text-gold text-sm md:text-base font-semibold mb-3 animate-fade-in uppercase tracking-[0.25em]">
            In vertrouwen begraven
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-4 animate-fade-in-up leading-tight">
            Welkom bij de Eeuwige Islamitische begraafplaats in Nederland
          </h1>

          {/* Decorative Line */}
          <div className="geometric-border w-48 mx-auto mb-8 animate-fade-in-delay-1" />

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-cream/90 font-light mb-3 animate-fade-in-delay-1">
            Uw familiegraven volgens de islam
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
