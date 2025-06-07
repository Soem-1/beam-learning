
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 beam-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-2xl font-josefin font-bold beam-gradient-text">Beam</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-foreground/80 hover:text-foreground smooth-transition">Courses</Link>
            <Link to="#" className="text-foreground/80 hover:text-foreground smooth-transition">AI Tutor</Link>
            <Link to="#" className="text-foreground/80 hover:text-foreground smooth-transition">Community</Link>
            <Link to="#" className="text-foreground/80 hover:text-foreground smooth-transition">Pricing</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
            <Button variant="ghost">Sign In</Button></Link>
            <Link to="/dashboard">
              <Button className="beam-gradient text-white hover:opacity-90 smooth-transition">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 px-4 py-2 beam-gradient text-white">
              🚀 Revolutionary Learning Platform
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-josefin font-bold mb-6 leading-tight">
              <span className="beam-gradient-text">Illuminate Learning.</span>
              <br />
              <span className="text-foreground">Empower the World.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Where intelligence meets experience. Join thousands of learners in our AI-powered education ecosystem designed for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/dashboard">
                <Button size="lg" className="beam-gradient text-white hover:opacity-90 smooth-transition px-8 py-4 text-lg">
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/courses">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg hover-lift smooth-transition">
                  Explore Courses
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto animate-float">
            <div className="beam-gradient rounded-2xl p-8 shadow-2xl">
              <div className="bg-background rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-beam-primary/10 rounded-lg p-4">
                    <div className="w-12 h-12 beam-gradient rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">🧠</span>
                    </div>
                    <h3 className="font-josefin font-semibold mb-2">AI Tutor</h3>
                    <p className="text-sm text-muted-foreground">Personalized learning with advanced AI</p>
                  </div>
                  <div className="bg-beam-secondary/10 rounded-lg p-4">
                    <div className="w-12 h-12 beam-gradient rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <h3 className="font-josefin font-semibold mb-2">Gamified</h3>
                    <p className="text-sm text-muted-foreground">Engaging achievements and progress</p>
                  </div>
                  <div className="bg-beam-accent/10 rounded-lg p-4">
                    <div className="w-12 h-12 beam-gradient rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">🌍</span>
                    </div>
                    <h3 className="font-josefin font-semibold mb-2">Global Community</h3>
                    <p className="text-sm text-muted-foreground">Learn with peers worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-josefin font-bold mb-4">
              Why Choose <span className="beam-gradient-text">Beam?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of education with our revolutionary features designed for modern learners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Learning",
                description: "Get instant help, summaries, and personalized explanations from our advanced AI tutor."
              },
              {
                icon: "🏆",
                title: "Gamified Progress",
                description: "Earn XP, unlock achievements, and climb leaderboards while mastering new skills."
              },
              {
                icon: "📚",
                title: "Interactive Courses",
                description: "Engage with multimedia content, quizzes, and hands-on projects from expert instructors."
              },
              {
                icon: "🧪",
                title: "Smart Notebooks",
                description: "Take notes that auto-summarize, generate flashcards, and sync across all devices."
              }
            ].map((feature, index) => (
              <Card key={index} className="hover-lift smooth-transition border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 beam-gradient rounded-2xl flex items-center justify-center text-3xl">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-josefin">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto beam-gradient rounded-2xl p-8 text-white">
            <h2 className="text-4xl font-josefin font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of learners who are already experiencing the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  Start Your Journey
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-beam-primary">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 beam-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <span className="text-xl font-josefin font-bold beam-gradient-text">Beam</span>
              </div>
              <p className="text-muted-foreground">
                Illuminate Learning. Empower the World.
              </p>
            </div>
            
            <div>
              <h3 className="font-josefin font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/courses" className="hover:text-foreground smooth-transition">Courses</Link></li>
                <li><Link to="#" className="hover:text-foreground smooth-transition">AI Tutor</Link></li>
                <li><Link to="#" className="hover:text-foreground smooth-transition">Community</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-josefin font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground smooth-transition">About</Link></li>
                <li><Link to="#" className="hover:text-foreground smooth-transition">Careers</Link></li>
                <li><Link to="#" className="hover:text-foreground smooth-transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-josefin font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="#" className="hover:text-foreground smooth-transition">Help Center</Link></li>
                <li><Link to="#" className="hover:text-foreground smooth-transition">Privacy</Link></li>
                <li><Link to="#" className="hover:text-foreground smooth-transition">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Beam Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
