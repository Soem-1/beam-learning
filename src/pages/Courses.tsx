
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Advanced React Patterns",
      instructor: "Sarah Chen",
      level: "Advanced",
      duration: "8 weeks",
      students: 2847,
      rating: 4.9,
      price: "Free",
      image: "🚀",
      description: "Master advanced React patterns and build scalable applications"
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      instructor: "Dr. Alex Kumar",
      level: "Intermediate",
      duration: "12 weeks",
      students: 5923,
      rating: 4.8,
      price: "$49",
      image: "🧠",
      description: "Dive deep into ML algorithms and practical implementations"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Maria Rodriguez",
      level: "Beginner",
      duration: "6 weeks",
      students: 3421,
      rating: 4.7,
      price: "Free",
      image: "🎨",
      description: "Learn design thinking and create beautiful user experiences"
    },
    {
      id: 4,
      title: "Blockchain Development",
      instructor: "Michael Thompson",
      level: "Advanced",
      duration: "10 weeks",
      students: 1632,
      rating: 4.9,
      price: "$99",
      image: "⛓️",
      description: "Build decentralized applications and smart contracts"
    },
    {
      id: 5,
      title: "Data Science with Python",
      instructor: "Dr. Lisa Wang",
      level: "Intermediate",
      duration: "14 weeks",
      students: 4567,
      rating: 4.8,
      price: "$79",
      image: "📊",
      description: "Analyze data and build predictive models with Python"
    },
    {
      id: 6,
      title: "Mobile App Development",
      instructor: "James Park",
      level: "Beginner",
      duration: "8 weeks",
      students: 2890,
      rating: 4.6,
      price: "Free",
      image: "📱",
      description: "Create cross-platform mobile apps with React Native"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 beam-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="text-2xl font-josefin font-bold beam-gradient-text">Beam</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/register">
              <Button className="beam-gradient text-white">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-josefin font-bold mb-4">
            Discover Amazing <span className="beam-gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Learn from world-class instructors and advance your career with our comprehensive course library.
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-4 mb-4">
              <Input 
                placeholder="Search courses..." 
                className="flex-1"
              />
              <Button className="beam-gradient text-white">Search</Button>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {["All", "Free", "Beginner", "Intermediate", "Advanced", "Programming", "Design", "Data Science"].map((filter) => (
                <Badge 
                  key={filter} 
                  variant={filter === "All" ? "default" : "secondary"}
                  className={filter === "All" ? "beam-gradient text-white" : "cursor-pointer hover:bg-beam-primary hover:text-white"}
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover-lift smooth-transition overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 beam-gradient rounded-xl flex items-center justify-center text-2xl">
                    {course.image}
                  </div>
                  <Badge 
                    variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"}
                  >
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="font-josefin text-lg">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>👨‍🏫 {course.instructor}</span>
                    <span>⭐ {course.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>📅 {course.duration}</span>
                    <span>👥 {course.students.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold beam-gradient-text">{course.price}</span>
                    <Button className="beam-gradient text-white hover:opacity-90">
                      {course.price === "Free" ? "Enroll Free" : "Enroll Now"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
