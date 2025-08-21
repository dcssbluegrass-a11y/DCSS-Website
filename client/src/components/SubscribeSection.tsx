import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Use Mailchimp's hosted form - this will work perfectly on static hosting
    const mailchimpUrl = "http://eepurl.com/jlJh8w";
    
    // Open Mailchimp form in new tab/window with the email pre-filled if possible
    const url = `${mailchimpUrl}?EMAIL=${encodeURIComponent(email)}`;
    window.open(url, '_blank');
    
    toast({
      title: "Redirecting to Mailchimp",
      description: "Complete your subscription on the Mailchimp page that just opened.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-dcss-orange subscribe-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Stay Connected
        </h2>
        <p className="text-xl text-white mb-8">
          Subscribe for updates on new shows, releases, and more!
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border-0 focus:ring-2 focus:ring-white"
              required
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-dcss-dark hover:bg-gray-800 text-white font-heading font-semibold"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
