import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      // Create mailto link for direct email client opening
      const subject = `Portfolio Contact: Message from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:contact.businessvolunteers@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.open(mailtoLink);
      
      // Show success message
      setTimeout(() => {
        toast({
          title: "Email client opened!",
          description: "Your email client should open with the message pre-filled. If it doesn't work, please email us directly at contact.businessvolunteers@gmail.com",
        });
        setIsSubmitting(false);
        
        // Reset form
        e.target.reset();
      }, 1000);
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Please contact directly",
        description: "Please send your message directly to contact.businessvolunteers@gmail.com",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          We&apos;re always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:contact.businessvolunteers@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact.businessvolunteers@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+918586989832"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 85869 89832
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Instagram className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Instagram</h4>
                  <a
                    href="https://instagram.com/thebusinessvolunteers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @thebusinessvolunteers
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://www.linkedin.com/company/business-volunteers1/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/70 hover:bg-primary/10 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a 
                  href="https://instagram.com/thebusinessvolunteers" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/70 hover:bg-primary/10 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a 
                  href="mailto:contact.businessvolunteers@gmail.com" 
                  className="p-3 rounded-full bg-secondary/70 hover:bg-primary/10 transition-colors duration-300"
                >
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Your full name..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, we'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
