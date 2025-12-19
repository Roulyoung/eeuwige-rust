import { BookOpen, CheckCircle } from "lucide-react";

const FatwaSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground islamic-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-medium text-sm">Islamitische Toelaatbaarheid</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Is het volgens de islam toegestaan om te begraven in grafkamers?
          </h2>
          
          <div className="geometric-border w-32 mx-auto mb-8 opacity-50" />

          {/* Answer Card */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary-foreground/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-accent" />
              <p className="text-2xl md:text-3xl font-serif font-semibold text-accent">
                Ja, het is toegestaan
              </p>
            </div>
            
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              Volgens de fatwa van de islamitische autoriteiten in Saoedi-Arabië en Egypte 
              is het toegestaan om te begraven in ondergrondse grafkamers. Deze methode 
              wordt al lange tijd gebruikt in islamitische landen en respecteert volledig 
              de voorschriften van de sharia.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/5 rounded-xl p-6">
                <p className="text-accent font-semibold mb-2">Egyptisch Voorbeeld</p>
                <p className="text-primary-foreground/80 text-sm">
                  Familiebegraafplaatsen met ondergrondse kamers zijn al generaties lang 
                  gebruikelijk in Egypte, met gescheiden ruimtes voor mannen en vrouwen.
                </p>
              </div>
              <div className="bg-primary-foreground/5 rounded-xl p-6">
                <p className="text-accent font-semibold mb-2">Nederlandse Aanpassing</p>
                <p className="text-primary-foreground/80 text-sm">
                  Ons ontwerp combineert deze traditionele praktijk met de Nederlandse 
                  wetgeving, waarbij hergebruik elke 10 jaar mogelijk is.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Note */}
          <p className="mt-10 text-primary-foreground/70 text-base max-w-2xl mx-auto">
            Elke moslim die in Nederland woont, heeft het recht om een graf te kopen, 
            ongeacht nationaliteit of geloofsstroming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FatwaSection;
