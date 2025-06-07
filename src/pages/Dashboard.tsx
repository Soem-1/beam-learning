
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
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
            <Badge variant="secondary" className="px-3 py-1">
              🔥 5 Day Streak
            </Badge>
            <div className="w-10 h-10 beam-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JD</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-josefin font-bold mb-2">
            Welcome back, <span className="beam-gradient-text">John!</span>
          </h1>
          <p className="text-xl text-muted-foreground">Ready to continue your learning journey?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover-lift smooth-transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total XP</CardTitle>
              <span className="text-2xl">⚡</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold beam-gradient-text">2,847</div>
              <p className="text-xs text-muted-foreground">+125 this week</p>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Active</CardTitle>
              <span className="text-2xl">📚</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 completed</p>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
              <span className="text-2xl">🔥</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5 Days</div>
              <p className="text-xs text-muted-foreground">Personal best: 12</p>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
              <span className="text-2xl">🏆</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">3 this month</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-josefin">Continue Learning</CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Advanced React Patterns",
                    progress: 75,
                    timeLeft: "2 lessons left",
                    level: "Advanced"
                  },
                  {
                    title: "Machine Learning Fundamentals",
                    progress: 45,
                    timeLeft: "5 lessons left",
                    level: "Intermediate"
                  },
                  {
                    title: "UI/UX Design Principles",
                    progress: 90,
                    timeLeft: "1 lesson left",
                    level: "Beginner"
                  }
                ].map((course, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg hover-lift smooth-transition">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <Progress value={course.progress} className="mb-2" />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{course.timeLeft}</span>
                      <Button size="sm" className="beam-gradient text-white">Continue</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-josefin">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <span className="mr-2">🤖</span>
                  Ask AI Tutor
                </Button>
                <Link to="/courses" className="block">
                  <Button className="w-full justify-start" variant="outline">
                    <span className="mr-2">🔍</span>
                    Browse Courses
                  </Button>
                </Link>
                <Button className="w-full justify-start" variant="outline">
                  <span className="mr-2">📝</span>
                  Open Notebook
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <span className="mr-2">🎯</span>
                  Daily Challenge
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-josefin">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { icon: "🎓", title: "Course Completed", desc: "UI/UX Basics" },
                  { icon: "⚡", title: "Speed Learner", desc: "3 lessons in 1 day" },
                  { icon: "🔥", title: "5 Day Streak", desc: "Keep it up!" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-muted/50">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
