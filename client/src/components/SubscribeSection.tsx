import { Button } from "@/components/ui/button";

export default function SubscribeSection() {
  const handleJoinNewsletter = () => {
    window.open('http://eepurl.com/jlJh8w', '_blank');
  };

  return (
    <section className="py-16 bg-dcss-orange subscribe-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-dcss-light mb-6">
          Stay Connected
        </h2>
        <p className="text-xl text-dcss-light mb-8">
          Subscribe for updates on new shows, releases, and more!
        </p>
        
        <div className="max-w-md mx-auto">
          <Button 
            onClick={handleJoinNewsletter}
            className="bg-dcss-light text-dcss-orange hover:bg-dcss-warm font-heading font-semibold px-12 py-4 text-lg"
          >
            Join Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
}
