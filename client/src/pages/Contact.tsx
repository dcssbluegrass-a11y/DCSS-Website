import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission - replace with actual contact form service
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-16 min-h-screen bg-dcss-dark text-dcss-light">
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact</h1>
            <p className="text-xl">Get in touch for bookings, press, or just to say hello</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-dcss-orange mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-envelope text-dcss-orange text-xl w-6"></i>
                    <a 
                      href="mailto:DCSSbluegrass@gmail.com" 
                      className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                    >
                      DCSSbluegrass@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-phone text-dcss-orange text-xl w-6"></i>
                    <a 
                      href="tel:443-417-7287" 
                      className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                    >
                      443-417-7287
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <i className="fas fa-map-marker-alt text-dcss-orange text-xl w-6"></i>
                    <span>Colorado, USA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-heading font-bold text-dcss-orange mb-6">Follow Us</h3>
                <div className="flex space-x-6">
                  <a 
                    href="https://www.facebook.com/deercreeksharpshooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a 
                    href="https://www.instagram.com/deercreeksharpshooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a 
                    href="https://www.youtube.com/@deercreeksharpshooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                  <a 
                    href="https://open.spotify.com/search/Deer%20Creek%20Sharp%20Shooters" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-dcss-light hover:text-dcss-orange transition-colors duration-200"
                  >
                    <i className="fab fa-spotify text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-dcss-accent bg-opacity-20 p-6 rounded-xl">
              <h3 className="text-2xl font-heading font-bold text-dcss-orange mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-dcss-light text-dcss-dark border-0 focus:ring-2 focus:ring-dcss-orange"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-dcss-light text-dcss-dark border-0 focus:ring-2 focus:ring-dcss-orange"
                  required
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-dcss-light text-dcss-dark border-0 focus:ring-2 focus:ring-dcss-orange"
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-dcss-light text-dcss-dark border-0 focus:ring-2 focus:ring-dcss-orange"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-dcss-orange hover:bg-orange-600 text-white font-heading font-semibold"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
