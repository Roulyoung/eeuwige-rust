import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="tel:0654915159" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>0654915159 - 24/7</span>
            </a>
            <a href="mailto:familiegraf23@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              <span>familiegraf23@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Grote Beer 138, 1562 VS, Krommenie</span>
          </div>
        </div>

        {/* Main nav */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg">ق</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-foreground leading-tight">Eeuwige Islamitische</span>
              <span className="text-xs text-muted-foreground">Begraafplaats Nederland</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("diensten")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Diensten
            </button>
            <button onClick={() => scrollToSection("ontwerp")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Ontwerp
            </button>
            <button onClick={() => scrollToSection("over-ons")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Over Ons
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </button>
          </div>

          <Button onClick={() => scrollToSection("contact")} variant="default" size="default">
            Neem Contact Op
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
