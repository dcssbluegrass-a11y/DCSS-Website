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

    // Submit directly to Mailchimp using hidden iframe method
    // This keeps users on your site while submitting to Mailchimp
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://deercreeksharpshooters.us13.list-manage.com/subscribe/post';
    form.target = 'mailchimp-iframe';
    form.style.display = 'none';

    // Create hidden iframe if it doesn't exist
    let iframe = document.getElementById('mailchimp-iframe') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'mailchimp-iframe';
      iframe.name = 'mailchimp-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Add required fields
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

    // Add honeypot field
    const honeypot = document.createElement('div');
    honeypot.style.position = 'absolute';
    honeypot.style.left = '-5000px';
    honeypot.innerHTML = '<input name="b_523f609d89ccc9ccb326adec8_abacb43caa" tabindex="-1" value="">';
    form.appendChild(honeypot);

    // Submit the form
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    // Show success message immediately
    toast({
      title: "Success!",
      description: "Thank you for subscribing! Please check your email to confirm your subscription.",
    });

    setEmail("");
    setIsLoading(false);
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
