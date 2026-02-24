"use client";

import React from "react"

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { 
  Building, Heart, GraduationCap, Users, 
  CreditCard, Smartphone, Building2, CheckCircle2,
  ArrowRight, Sparkles, Shield, Clock, Receipt
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";

const donationCategories = [
  { id: "building", icon: Building, title: "Building Fund", description: "Support our temple construction project" },
  { id: "general", icon: Heart, title: "General Ministry", description: "Support daily operations and activities" },
  { id: "humanitarian", icon: Users, title: "Humanitarian Aid", description: "Help vulnerable families and children" },
  { id: "leadership", icon: GraduationCap, title: "Leadership Development", description: "Train pastors and ministers" },
];

const presetAmounts = [10, 25, 50, 100, 250, 500];

const paymentMethods = [
  { id: "card", icon: CreditCard, label: "Credit/Debit Card" },
  { id: "ecocash", icon: Smartphone, label: "EcoCash" },
  { id: "bank", icon: Building2, label: "Bank Transfer" },
];

export default function DonatePage() {
  const [selectedCategory, setSelectedCategory] = useState("building");
  const [amount, setAmount] = useState<number | string>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setAmount(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="container mx-auto px-4 py-24">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">Thank You for Your Generosity!</h1>
              <p className="text-muted-foreground mb-8">
                Your donation of <span className="font-bold text-primary">${typeof amount === 'string' ? amount : amount}</span> to the{" "}
                <span className="font-bold">{donationCategories.find(c => c.id === selectedCategory)?.title}</span>{" "}
                has been received. A confirmation receipt has been sent to {formData.email}.
              </p>
              <div className="bg-card rounded-2xl p-6 border border-border mb-8 text-left">
                <h3 className="font-semibold mb-4">Donation Summary</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount:</span>
                    <span className="font-medium">${amount} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{donationCategories.find(c => c.id === selectedCategory)?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{isRecurring ? "Monthly Recurring" : "One-time"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reference:</span>
                    <span className="font-medium">RAC-{Date.now().toString(36).toUpperCase()}</span>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  Return to Home
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen">
        {/* Hero section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.35_0.2_260)]" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-foreground/10 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm mb-6">
                <Heart className="w-4 h-4 text-accent" />
                <span className="font-medium uppercase tracking-wider">Partner With Us</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Support Our Mission
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Every contribution is meticulously recorded, acknowledged with an official receipt, 
                and deployed according to donor designation. We believe in stewarding every resource as unto the Lord.
              </p>
            </div>
          </div>
        </section>

        {/* Donation form section */}
        <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
          <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-8">
                {/* Left column - Options */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Category selection */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">1</span>
                      Select Donation Category
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {donationCategories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setSelectedCategory(category.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            selectedCategory === category.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                            selectedCategory === category.id ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                          }`}>
                            <category.icon className="w-5 h-5" />
                          </div>
                          <h3 className="font-semibold text-foreground">{category.title}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                          {category.id === "building" && (
                            <span className="inline-flex items-center gap-1 mt-2 text-xs text-accent font-medium">
                              <Sparkles className="w-3 h-3" />
                              Priority Project
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Amount selection */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">2</span>
                      Choose Amount
                    </h2>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => handleAmountSelect(preset)}
                          className={`py-4 px-4 rounded-xl font-bold text-lg transition-all ${
                            amount === preset && !customAmount
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-foreground hover:bg-primary/10"
                          }`}
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-lg">$</span>
                      <Input
                        type="number"
                        placeholder="Custom amount"
                        value={customAmount}
                        onChange={(e) => handleCustomAmountChange(e.target.value)}
                        className="pl-8 py-6 text-lg font-semibold"
                        min="1"
                      />
                    </div>
                    
                    {/* Recurring toggle */}
                    <div className="mt-6 p-4 rounded-xl bg-secondary/50 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">Make this a monthly donation</p>
                        <p className="text-sm text-muted-foreground">Join our Royal Blue Partners program</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsRecurring(!isRecurring)}
                        className={`w-14 h-8 rounded-full transition-all relative ${
                          isRecurring ? "bg-primary" : "bg-muted"
                        }`}
                      >
                        <span className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow transition-all ${
                          isRecurring ? "left-7" : "left-1"
                        }`} />
                      </button>
                    </div>
                  </div>

                  {/* Payment method */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">3</span>
                      Payment Method
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`p-4 rounded-xl border-2 text-center transition-all ${
                            paymentMethod === method.id
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <method.icon className={`w-6 h-6 mx-auto mb-2 ${
                            paymentMethod === method.id ? "text-primary" : "text-muted-foreground"
                          }`} />
                          <span className="text-sm font-medium">{method.label}</span>
                        </button>
                      ))}
                    </div>

                    {/* Payment details based on method */}
                    {paymentMethod === "card" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" className="mt-1" />
                          </div>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "ecocash" && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="ecocashNumber">EcoCash Number</Label>
                          <Input id="ecocashNumber" placeholder="07X XXX XXXX" className="mt-1" />
                        </div>
                        <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                          <p className="text-sm text-green-800">
                            You will receive a prompt on your phone to authorize the payment. 
                            Enter your EcoCash PIN to complete the transaction.
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="p-4 rounded-xl bg-secondary">
                        <h4 className="font-semibold mb-3">Bank Transfer Details</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Bank:</span>
                            <span className="font-medium">CBZ Bank</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Account Name:</span>
                            <span className="font-medium">Redemption Apostolic Church</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Account Number:</span>
                            <span className="font-medium">1234567890</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Branch:</span>
                            <span className="font-medium">Bulawayo Main</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                          Please use your name as reference. Email proof of payment to finance@redemptionapostolic.org
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Personal information */}
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">4</span>
                      Your Information
                    </h2>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input 
                            id="firstName" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required 
                            className="mt-1" 
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input 
                            id="lastName" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required 
                            className="mt-1" 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                          className="mt-1" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Any special instructions or prayer requests..."
                          className="mt-1" 
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Summary */}
                <div className="lg:col-span-2">
                  <div className="sticky top-28">
                    <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
                      <div className="bg-primary p-6 text-primary-foreground">
                        <h3 className="text-lg font-bold mb-1">Donation Summary</h3>
                        <p className="text-sm text-primary-foreground/70">Review your contribution</p>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Category</span>
                          <span className="font-medium text-foreground">
                            {donationCategories.find(c => c.id === selectedCategory)?.title}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Frequency</span>
                          <span className="font-medium text-foreground">
                            {isRecurring ? "Monthly" : "One-time"}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                          <span className="text-muted-foreground">Payment</span>
                          <span className="font-medium text-foreground">
                            {paymentMethods.find(m => m.id === paymentMethod)?.label}
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-lg font-bold text-foreground">Total</span>
                          <span className="text-3xl font-bold text-primary">
                            ${amount || 0}
                          </span>
                        </div>
                        
                        {isRecurring && (
                          <p className="text-xs text-muted-foreground text-center">
                            You will be charged ${amount}/month until cancelled
                          </p>
                        )}
                        
                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full gap-2 py-6 text-lg mt-4"
                          disabled={!amount || isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Complete Donation
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </Button>
                        
                        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                          <Shield className="w-4 h-4" />
                          <span>Secure & Encrypted</span>
                        </div>
                      </div>
                    </div>

                    {/* Trust badges */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-card rounded-xl border border-border">
                        <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">Secure Payment</span>
                      </div>
                      <div className="text-center p-4 bg-card rounded-xl border border-border">
                        <Receipt className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">Tax Receipt</span>
                      </div>
                      <div className="text-center p-4 bg-card rounded-xl border border-border">
                        <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="text-xs text-muted-foreground">Instant Confirm</span>
                      </div>
                    </div>

                    {/* Church image */}
                    <div className="mt-6 rounded-2xl overflow-hidden relative h-48">
                      <Image
                        src="/images/community-outreach.jpg"
                        alt="Community outreach"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                        <p className="text-sm text-primary-foreground italic">
                          &quot;Your generosity changes lives&quot;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
