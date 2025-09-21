import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    webhookUrl: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showWebhook, setShowWebhook] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Option 1: Send via email (mailto)
      const emailSubject = encodeURIComponent(formData.subject || 'Contact Form Submission');
      const emailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Option 2: If webhook URL is provided, send to Zapier
      if (formData.webhookUrl) {
        try {
          await fetch(formData.webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: formData.subject,
              message: formData.message,
              timestamp: new Date().toISOString(),
              source: "portfolio_website"
            }),
          });
          
          toast({
            title: "Message Sent!",
            description: "Your message has been sent via Zapier webhook. I'll get back to you soon!",
          });
        } catch (error) {
          throw new Error("Webhook failed");
        }
      } else {
        // Fallback to mailto
        window.location.href = `mailto:prashant.islur@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        
        toast({
          title: "Email Client Opened",
          description: "Your default email client should open with the message pre-filled.",
        });
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        webhookUrl: formData.webhookUrl // Keep webhook URL
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again or contact me directly at prashant.islur@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Image & Info */}
          <div>
            <div className="relative mb-8">
              <img 
                src="/lovable-uploads/13ca9123-f97c-4788-be6a-8dfb7e80e88b.png"
                alt="AI Product Manager working with data visualization"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-16 bg-primary rounded-lg"></div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Contact Details</h2>
              <div className="flex-1 h-0.5 bg-primary"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary font-medium">Phone :</p>
                  <p className="text-muted-foreground">+91 9820834892</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary font-medium">Address :</p>
                  <p className="text-muted-foreground">Mumbai, INDIA</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary font-medium">Email :</p>
                  <p className="text-muted-foreground">prashant.islur@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-primary/20 bg-muted">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background border-border"
                    required
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background border-border min-h-32"
                    required
                  />
                </div>

                {/* Advanced Options */}
                <div className="border-t pt-4">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setShowWebhook(!showWebhook)}
                    className="text-sm text-muted-foreground"
                  >
                    {showWebhook ? 'Hide' : 'Show'} Advanced Options (Zapier Integration)
                  </Button>
                  
                  {showWebhook && (
                    <div className="mt-4">
                      <Input
                        name="webhookUrl"
                        type="url"
                        placeholder="Zapier Webhook URL (Optional)"
                        value={formData.webhookUrl}
                        onChange={handleInputChange}
                        className="bg-background border-border"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        If provided, the form will send data to your Zapier webhook instead of opening email client.
                      </p>
                    </div>
                  )}
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;