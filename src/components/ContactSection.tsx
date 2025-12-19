import { Phone, Mail, MapPin, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cream-dark islamic-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">Contact</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Neem Contact met Ons Op
          </h2>
          <div className="geometric-border w-32 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Wij staan altijd klaar om al uw vragen te beantwoorden en u op elke stap volledig te ondersteunen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border flex items-start gap-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Adres</h4>
                <p className="text-muted-foreground">Grote Beer 138, 1562 VS, Krommenie</p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft border border-border flex items-start gap-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Telefoon</h4>
                <a href="tel:0654915159" className="text-muted-foreground hover:text-primary transition-colors">
                  0654915159 - 24/7 bereikbaar
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft border border-border flex items-start gap-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                <a 
                  href="https://wa.me/31654915159" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  0654915159 - 24/7 bereikbaar
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft border border-border flex items-start gap-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                <a href="mailto:familiegraf23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  familiegraf23@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft border border-border flex items-start gap-4 hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Facebook className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Facebook</h4>
                <p className="text-muted-foreground">Stichting Familiegraf</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-soft border border-border">
              <img
                src="/images/contact-side.jpg"
                alt="Ingang van de begraafplaats"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="bg-primary rounded-2xl p-8 md:p-10 text-primary-foreground shadow-elevated">
            <h3 className="text-2xl font-serif font-bold mb-6">Organisatie Gegevens</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-primary-foreground/70 text-sm mb-1">KVK-nummer</p>
                <p className="text-lg font-medium">93863381</p>
              </div>
              
              <div>
                <p className="text-primary-foreground/70 text-sm mb-1">Bankrekening</p>
                <p className="text-lg font-medium">NL18 INGB 0109 2903 72</p>
              </div>

              <div className="pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/90 mb-6">
                  Reserveer nu een plek voor uzelf en uw dierbaren. Wij helpen u graag 
                  bij de reserveringsprocedure.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="accent" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => window.location.href = 'tel:0654915159'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Bel Ons
                  </Button>
                  <Button 
                    variant="heroOutline" 
                    size="lg" 
                    className="flex-1"
                    onClick={() => window.location.href = 'mailto:familiegraf23@gmail.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Mail Ons
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
