import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  ClipboardList, 
  Calendar,
  TrendingUp,
  Clock,
  Trophy,
  Target,
  CheckCircle
} from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    {
      title: "Courses Enrolled",
      value: "8",
      change: "Active this term",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      title: "Assignments Due",
      value: "5",
      change: "This week",
      icon: ClipboardList,
      color: "text-orange-600"
    },
    {
      title: "Overall Grade",
      value: "87%",
      change: "+3% from last term",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      title: "Attendance",
      value: "96%",
      change: "Excellent",
      icon: Calendar,
      color: "text-purple-600"
    }
  ];

  const upcomingClasses = [
    {
      subject: "Mathematics",
      teacher: "Ms. Sarah Johnson",
      time: "09:00 AM",
      room: "Room 201",
      type: "Lesson"
    },
    {
      subject: "Physics",
      teacher: "Dr. Michael Brown",
      time: "11:00 AM",
      room: "Lab 1",
      type: "Lab"
    },
    {
      subject: "English Literature",
      teacher: "Mrs. Emily Davis",
      time: "02:00 PM",
      room: "Room 105",
      type: "Discussion"
    }
  ];

  const recentAssignments = [
    {
      subject: "Mathematics",
      title: "Quadratic Equations Worksheet",
      dueDate: "Tomorrow",
      status: "pending",
      progress: 60
    },
    {
      subject: "Physics",
      title: "Lab Report: Motion Analysis",
      dueDate: "Dec 20",
      status: "in-progress",
      progress: 30
    },
    {
      subject: "History",
      title: "World War II Essay",
      dueDate: "Dec 22",
      status: "not-started",
      progress: 0
    },
    {
      subject: "Chemistry",
      title: "Periodic Table Quiz",
      dueDate: "Dec 18",
      status: "completed",
      progress: 100
    }
  ];

  const achievements = [
    {
      title: "Perfect Attendance",
      description: "No absences this month",
      icon: Calendar,
      earned: true
    },
    {
      title: "Top Performer",
      description: "Highest grade in Mathematics",
      icon: Trophy,
      earned: true
    },
    {
      title: "Quick Learner",
      description: "Completed 5 lessons this week",
      icon: Target,
      earned: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'not-started':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-josefin font-bold">Student Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Ready to continue your learning journey?</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover-lift smooth-transition">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your upcoming classes for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingClasses.map((classItem, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 beam-gradient rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{classItem.subject}</h4>
                      <p className="text-sm text-muted-foreground">{classItem.teacher} • {classItem.room}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{classItem.time}</div>
                    <Badge variant="secondary" className="text-xs">{classItem.type}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Achievements
            </CardTitle>
            <CardDescription>Your recent accomplishments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className={`p-3 rounded-lg border ${achievement.earned ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center space-x-3">
                  <achievement.icon className={`h-5 w-5 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                  <div>
                    <h4 className="font-semibold text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.earned && <CheckCircle className="h-4 w-4 text-green-600" />}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Assignments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5" />
            Recent Assignments
          </CardTitle>
          <CardDescription>Track your assignment progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAssignments.map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{assignment.title}</h4>
                    <Badge className={getStatusColor(assignment.status)}>
                      {assignment.status.replace('-', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{assignment.subject} • Due: {assignment.dueDate}</p>
                  <div className="flex items-center space-x-2">
                    <Progress value={assignment.progress} className="flex-1" />
                    <span className="text-sm text-muted-foreground">{assignment.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;