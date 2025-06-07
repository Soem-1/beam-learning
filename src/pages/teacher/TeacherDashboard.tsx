import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  BookOpen, 
  ClipboardList, 
  Calendar,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock
} from 'lucide-react';

const TeacherDashboard = () => {
  const stats = [
    {
      title: "Total Students",
      value: "156",
      change: "+12 this term",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Classes",
      value: "6",
      change: "2 subjects",
      icon: BookOpen,
      color: "text-green-600"
    },
    {
      title: "Pending Assignments",
      value: "23",
      change: "Due this week",
      icon: ClipboardList,
      color: "text-orange-600"
    },
    {
      title: "Attendance Rate",
      value: "94%",
      change: "+2% from last week",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  const upcomingClasses = [
    {
      subject: "Mathematics",
      class: "Grade 10-A",
      time: "09:00 AM",
      room: "Room 201",
      students: 28
    },
    {
      subject: "Physics",
      class: "Grade 11-B",
      time: "11:00 AM",
      room: "Lab 1",
      students: 25
    },
    {
      subject: "Mathematics",
      class: "Grade 9-C",
      time: "02:00 PM",
      room: "Room 201",
      students: 30
    }
  ];

  const recentActivities = [
    {
      type: "assignment",
      title: "Algebra Quiz submitted by Alex Chen",
      time: "2 minutes ago",
      status: "new"
    },
    {
      type: "grade",
      title: "Graded Physics Lab Report for Grade 11-B",
      time: "1 hour ago",
      status: "completed"
    },
    {
      type: "message",
      title: "New message from Maria Rodriguez (Parent)",
      time: "3 hours ago",
      status: "pending"
    },
    {
      type: "attendance",
      title: "Attendance marked for Grade 10-A",
      time: "Yesterday",
      status: "completed"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'assignment':
        return <ClipboardList className="h-4 w-4" />;
      case 'grade':
        return <CheckCircle className="h-4 w-4" />;
      case 'message':
        return <AlertCircle className="h-4 w-4" />;
      case 'attendance':
        return <Calendar className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-josefin font-bold">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening in your classes today.</p>
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
                      <p className="text-sm text-muted-foreground">{classItem.class} • {classItem.room}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{classItem.time}</div>
                    <div className="text-sm text-muted-foreground">{classItem.students} students</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <ClipboardList className="mr-2 h-4 w-4" />
              Create Assignment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Take Attendance
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              Add Lesson
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              View Classes
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Activity
          </CardTitle>
          <CardDescription>Latest updates from your classes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="text-muted-foreground">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(activity.status)}>
                  {activity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;