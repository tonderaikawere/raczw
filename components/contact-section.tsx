"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            <span className="font-medium uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you have questions about our church, want to visit a branch, or need prayer support, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              {submitted ? (
                <div className="text-center py-12 relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground mb-8">We&apos;ll get back to you as soon as possible.</p>
                  <Button
                    variant="outline"
                    className="bg-transparent"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                        className="h-12 bg-secondary/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                        className="h-12 bg-secondary/50 border-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone Number <span className="text-muted-foreground font-normal">(Optional)</span></Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+263 xxx xxx xxx"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="h-12 bg-secondary/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="bg-secondary/50 border-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-14 text-base gap-2" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact info cards */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Main Office */}
            <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Main Office</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Foundation College, Mbundane<br />
                    Bulawayo, Zimbabwe
                  </p>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Service Times</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday Worship</span>
                      <span className="text-foreground font-medium">11AM - 3PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Wednesday Study</span>
                      <span className="text-foreground font-medium">5PM - 6PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Friday Prayer</span>
                      <span className="text-foreground font-medium">5PM - 6PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer credit */}
            <div className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform border border-border shadow-sm">
                  <div className="relative w-7 h-7">
                    <Image
                      src="/k-logo.png"
                      alt="Kawerify Tech"
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Website Development</h3>
                  <p className="text-muted-foreground text-sm mb-1">Proudly developed by Kawerify Tech</p>
                  <a 
                    href="mailto:kawerifytech@gmail.com" 
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    kawerifytech@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Prayer CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.4_0.2_260)] rounded-2xl p-6 text-primary-foreground">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <p className="font-bold">Need Prayer?</p>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Our 24/7 prayer chain is available to intercede for your needs.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-accent" />
                  <span className="font-medium">Contact any branch for prayer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
