import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      // Wait for Mailchimp script to load if it hasn't already
      let attempts = 0;
      while (!(window as any).mc && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if ((window as any).mc) {
        // Use Mailchimp's embedded form API with the loaded script
        (window as any).mc('lists:subscribe', {
          id: 'abacb43caa',
          email: email
        }, function(response: any) {
          setIsLoading(false);
          if (response.result === 'success') {
            toast({
              title: "Success!",
              description: "Thank you for subscribing! Please check your email to confirm.",
            });
            setEmail("");
          } else {
            toast({
              title: "Subscription Error",
              description: response.msg || "Please try again.",
              variant: "destructive",
            });
          }
        });
      } else {
        // Fallback: direct form submission to Mailchimp
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = 'https://deercreeksharpshooters.us13.list-manage.com/subscribe/post';
        form.target = '_blank';
        form.style.display = 'none';

        const userField = document.createElement('input');
        userField.type = 'hidden';
        userField.name = 'u';
        userField.value = '523f609d89ccc9ccb326adec8';
        form.appendChild(userField);

        const listField = document.createElement('input');
        listField.type = 'hidden';
        listField.name = 'id';
        listField.value = 'abacb43caa';
        form.appendChild(listField);

        const emailField = document.createElement('input');
        emailField.type = 'email';
        emailField.name = 'EMAIL';
        emailField.value = email;
        form.appendChild(emailField);

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);

        toast({
          title: "Redirecting...",
          description: "Complete your subscription on the page that opened.",
        });
        
        setEmail("");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
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
