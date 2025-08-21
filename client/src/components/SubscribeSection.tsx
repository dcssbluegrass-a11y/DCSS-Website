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
      // Use Mailchimp's direct form submission for static hosting
      // This will work on any static hosting platform including Porkbun
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://deercreeksharpshooters.us13.list-manage.com/subscribe/post';
      form.target = '_blank';
      
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = 'u';
      hiddenField.value = 'your_mailchimp_user_id'; // Replace with your actual Mailchimp user ID
      form.appendChild(hiddenField);
      
      const listField = document.createElement('input');
      listField.type = 'hidden';
      listField.name = 'id';
      listField.value = 'your_list_id'; // Replace with your actual list ID
      form.appendChild(listField);
      
      const emailField = document.createElement('input');
      emailField.type = 'email';
      emailField.name = 'EMAIL';
      emailField.value = email;
      form.appendChild(emailField);
      
      // Add honeypot field to prevent spam
      const honeypot = document.createElement('div');
      honeypot.style.position = 'absolute';
      honeypot.style.left = '-5000px';
      honeypot.innerHTML = '<input name="b_your_mailchimp_user_id_your_list_id" tabindex="-1" value="">';
      form.appendChild(honeypot);
      
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing! Check your email to confirm.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
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
