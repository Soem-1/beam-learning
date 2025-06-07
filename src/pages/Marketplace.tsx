
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Search, Star, ArrowLeft, BookOpen, Code, Palette, Brain } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const courses = [
    {
      id: 1,
      title: 'Advanced TypeScript Masterclass',
      instructor: 'Alex Developer',
      price: 89,
      originalPrice: 149,
      rating: 4.9,
      students: 15420,
      category: 'Programming',
      level: 'Advanced',
      duration: '12 hours',
      image: '💻',
      description: 'Master TypeScript with advanced patterns and real-world projects'
    },
    {
      id: 2,
      title: 'UI/UX Design Complete Course',
      instructor: 'Sarah Design',
      price: 79,
      originalPrice: 129,
      rating: 4.8,
      students: 8930,
      category: 'Design',
      level: 'Intermediate',
      duration: '16 hours',
      image: '🎨',
      description: 'Learn design thinking and create stunning user experiences'
    },
    {
      id: 3,
      title: 'Machine Learning with Python',
      instructor: 'Dr. Emma AI',
      price: 119,
      originalPrice: 199,
      rating: 4.9,
      students: 12750,
      category: 'AI/ML',
      level: 'Intermediate',
      duration: '20 hours',
      image: '🤖',
      description: 'Build intelligent applications with machine learning'
    },
    {
      id: 4,
      title: 'React Native Mobile Development',
      instructor: 'Mike Mobile',
      price: 69,
      originalPrice: 119,
      rating: 4.7,
      students: 6540,
      category: 'Programming',
      level: 'Beginner',
      duration: '14 hours',
      image: '📱',
      description: 'Create cross-platform mobile apps with React Native'
    }
  ];

  const tools = [
    {
      id: 1,
      name: 'AI Code Assistant',
      description: 'Get intelligent code suggestions and debugging help',
      price: 29,
      type: 'Monthly',
      icon: '🤖',
      features: ['Code completion', 'Bug detection', 'Performance tips']
    },
    {
      id: 2,
      name: 'Design System Pro',
      description: 'Professional design components and templates',
      price: 49,
      type: 'One-time',
      icon: '🎨',
      features: ['100+ components', 'Figma integration', 'Dark mode support']
    },
    {
      id: 3,
      name: 'Learning Analytics',
      description: 'Track your progress with detailed insights',
      price: 19,
      type: 'Monthly',
      icon: '📊',
      features: ['Progress tracking', 'Performance analytics', 'Goal setting']
    }
  ];

  const handlePurchase = (itemName: string, price: number) => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${itemName} ($${price}) has been added to your cart.`,
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Code className="w-4 h-4" />;
      case 'Design': return <Palette className="w-4 h-4" />;
      case 'AI/ML': return <Brain className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-6 h-6 text-beam-primary" />
              <span className="text-2xl font-josefin font-bold beam-gradient-text">Marketplace</span>
            </div>
          </div>
          <Button className="beam-gradient">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart (0)
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-josefin font-bold mb-4">
            Expand Your <span className="beam-gradient-text">Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Discover premium courses, tools, and resources to accelerate your learning journey.
          </p>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search courses, tools..." 
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px] mx-auto">
            <TabsTrigger value="courses">Premium Courses</TabsTrigger>
            <TabsTrigger value="tools">Learning Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {["All", "Programming", "Design", "AI/ML", "Business"].map((filter) => (
                <Badge 
                  key={filter} 
                  variant={filter === "All" ? "default" : "secondary"}
                  className={filter === "All" ? "beam-gradient text-white cursor-pointer" : "cursor-pointer hover:bg-beam-primary hover:text-white"}
                >
                  {filter}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover-lift smooth-transition overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 beam-gradient rounded-xl flex items-center justify-center text-2xl">
                        {course.image}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm mb-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                          <span className="text-muted-foreground">({course.students.toLocaleString()})</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {getCategoryIcon(course.category)}
                          <span className="ml-1">{course.category}</span>
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="font-josefin text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>👨‍🏫 {course.instructor}</span>
                        <span>📚 {course.level}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>⏱️ {course.duration}</span>
                        <span>👥 {course.students.toLocaleString()}</span>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold beam-gradient-text">${course.price}</span>
                            <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                          </div>
                          <Badge variant="destructive" className="text-xs">
                            {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                          </Badge>
                        </div>
                        <Button 
                          onClick={() => handlePurchase(course.title, course.price)}
                          className="beam-gradient text-white hover:opacity-90"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card key={tool.id} className="hover-lift smooth-transition">
                  <CardHeader className="text-center pb-3">
                    <div className="w-16 h-16 mx-auto mb-4 beam-gradient rounded-full flex items-center justify-center text-3xl">
                      {tool.icon}
                    </div>
                    <CardTitle className="font-josefin text-lg">{tool.name}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {tool.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className="text-green-500">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-center pt-2">
                      <div className="mb-3">
                        <span className="text-3xl font-bold beam-gradient-text">${tool.price}</span>
                        <span className="text-sm text-muted-foreground">/{tool.type.toLowerCase()}</span>
                      </div>
                      <Button 
                        onClick={() => handlePurchase(tool.name, tool.price)}
                        className="w-full beam-gradient"
                      >
                        Get {tool.name}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Marketplace;
