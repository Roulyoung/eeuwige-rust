import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Logo Eeuwige Islamitische Begraafplaats"
                className="w-12 h-12 rounded-lg object-cover border border-background/20"
                loading="lazy"
              />
              <div>
                <span className="font-serif text-lg font-semibold text-background block">
                  Eeuwige Islamitische
                </span>
                <span className="block text-xs text-background/60">Begraafplaats Nederland</span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-md">
              De islamitische familiebegraafplaats in Nederland. Wij combineren de voorschriften van de
              islamitische wetgeving met de lokale regelgeving om een veilige en respectvolle plek te bieden
              voor het begraven van uw dierbaren.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Snelle links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-background/70 hover:text-accent transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("diensten")} className="text-background/70 hover:text-accent transition-colors">
                  Diensten
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("ontwerp")} className="text-background/70 hover:text-accent transition-colors">
                  Ontwerp
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("over-ons")} className="text-background/70 hover:text-accent transition-colors">
                  Over ons
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="text-background/70 hover:text-accent transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <a href="tel:0654915159" className="hover:text-accent transition-colors">0654915159</a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:familiegraf23@gmail.com" className="hover:text-accent transition-colors text-sm">
                  familiegraf23@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Grote Beer 138, 1562 VS, Krommenie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            {new Date().getFullYear()} Stichting Familiegraf. Alle rechten voorbehouden.
          </p>
          <p className="text-background/50 text-sm">
            KVK: 93863381
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
