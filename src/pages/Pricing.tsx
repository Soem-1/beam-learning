
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Star, Crown, Zap, Users, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { toast } = useToast();

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      icon: Star,
      price: { monthly: 0, yearly: 0 },
      features: [
        "Access to 5 free courses",
        "Basic progress tracking",
        "Community forums",
        "Mobile app access",
        "Email support"
      ],
      limitations: [
        "Limited course access",
        "No certificates",
        "No offline content"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "Best for serious learners",
      icon: Zap,
      price: { monthly: 29, yearly: 290 },
      features: [
        "Unlimited course access",
        "Completion certificates",
        "Offline content download",
        "Advanced analytics",
        "Priority support",
        "Exclusive content",
        "1-on-1 mentorship session",
        "Custom learning paths"
      ],
      limitations: [],
      buttonText: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For teams and organizations",
      icon: Crown,
      price: { monthly: 99, yearly: 990 },
      features: [
        "Everything in Pro",
        "Team management",
        "Custom branding",
        "API access",
        "Advanced reporting",
        "SSO integration",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited team members"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  const faqItems = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise plans."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All paid plans come with a 14-day free trial. No credit card required to start."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students get 50% off on Pro plans with a valid student email address. Enterprise discounts are available for educational institutions."
    },
    {
      question: "What happens to my progress if I downgrade?",
      answer: "Your learning progress is always saved. You'll retain access to completed courses and certificates, but some premium features may become unavailable."
    }
  ];

  const handleGetStarted = (planName: string) => {
    toast({
      title: `${planName} Plan Selected`,
      description: `Redirecting to checkout for the ${planName} plan...`,
    });
  };

  const yearlyDiscount = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return 0;
    const yearlyPrice = monthlyPrice * 10; // 2 months free
    const monthlyEquivalent = yearlyPrice / 12;
    return Math.round(((monthlyPrice - monthlyEquivalent) / monthlyPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Header */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-josefin font-bold beam-gradient-text mb-4">
          Choose Your Learning Path
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Unlock your potential with our flexible pricing plans designed for every learner
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Label htmlFor="billing-toggle" className={!isYearly ? "font-semibold" : ""}>
            Monthly
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <Label htmlFor="billing-toggle" className={isYearly ? "font-semibold" : ""}>
            Yearly
          </Label>
          {isYearly && (
            <Badge className="bg-green-100 text-green-800 ml-2">
              Save up to 17%
            </Badge>
          )}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all hover:scale-105 ${
                plan.popular 
                  ? 'border-beam-primary shadow-lg ring-2 ring-beam-primary/20' 
                  : 'hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-beam-primary">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 beam-gradient rounded-full flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-josefin">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      ${isYearly ? Math.round((plan.price.yearly || plan.price.monthly * 10) / 12) : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      /{isYearly ? 'month' : 'month'}
                    </span>
                  </div>
                  {isYearly && plan.price.monthly > 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      Save {yearlyDiscount(plan.price.monthly)}% yearly
                    </p>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Button
                  onClick={() => handleGetStarted(plan.name)}
                  className={`w-full ${
                    plan.popular 
                      ? 'beam-gradient' 
                      : plan.name === 'Free' 
                        ? 'bg-muted hover:bg-muted/80' 
                        : 'bg-primary hover:bg-primary/90'
                  }`}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">What's included:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.limitations.length > 0 && (
                    <div className="pt-4">
                      <h4 className="font-semibold text-muted-foreground">Limitations:</h4>
                      <ul className="space-y-1 mt-2">
                        {plan.limitations.map((limitation, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-josefin">Compare Plans</CardTitle>
            <CardDescription>See what's included in each plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Features</th>
                    <th className="text-center py-4 px-4">Free</th>
                    <th className="text-center py-4 px-4">Pro</th>
                    <th className="text-center py-4 px-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3 px-4">Course Access</td>
                    <td className="text-center py-3 px-4">5 courses</td>
                    <td className="text-center py-3 px-4">Unlimited</td>
                    <td className="text-center py-3 px-4">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Certificates</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Offline Access</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Team Management</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">❌</td>
                    <td className="text-center py-3 px-4">✅</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Support</td>
                    <td className="text-center py-3 px-4">Email</td>
                    <td className="text-center py-3 px-4">Priority</td>
                    <td className="text-center py-3 px-4">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-josefin">Frequently Asked Questions</CardTitle>
            <CardDescription>Get answers to common questions about our pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
