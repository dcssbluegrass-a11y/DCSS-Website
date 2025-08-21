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

    setIsLoading(true);

    // Use Mailchimp's JSONP endpoint for seamless integration
    const url = 'https://deercreeksharpshooters.us13.list-manage.com/subscribe/post-json';
    const data = {
      u: '523f609d89ccc9ccb326adec8',
      id: 'abacb43caa',
      EMAIL: email,
      c: 'callback_' + Date.now()
    };

    // Create JSONP callback
    const callbackName = data.c;
    (window as any)[callbackName] = (response: any) => {
      setIsLoading(false);
      
      if (response.result === 'success') {
        toast({
          title: "Success!",
          description: "Thank you for subscribing! Please check your email to confirm.",
        });
        setEmail("");
      } else {
        const errorMsg = response.msg || "Failed to subscribe. Please try again.";
        toast({
          title: "Subscription Error",
          description: errorMsg.replace(/^\d+ - /, ''), // Remove error code prefix
          variant: "destructive",
        });
      }
      
      // Clean up
      delete (window as any)[callbackName];
      document.head.removeChild(script);
    };

    // Create and execute JSONP request
    const script = document.createElement('script');
    const params = new URLSearchParams(data).toString();
    script.src = `${url}?${params}`;
    
    // Handle script loading errors
    script.onerror = () => {
      setIsLoading(false);
      toast({
        title: "Connection Error",
        description: "Unable to connect to mailing list. Please try again.",
        variant: "destructive",
      });
      delete (window as any)[callbackName];
      document.head.removeChild(script);
    };

    document.head.appendChild(script);
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
