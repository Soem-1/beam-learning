import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, GraduationCap, Users, User, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RoleBasedLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('student');
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const roleCredentials = {
    student: { email: 'student@beamschool.edu', password: 'password' },
    teacher: { email: 'teacher@beamschool.edu', password: 'password' },
    parent: { email: 'parent@beamschool.edu', password: 'password' },
    admin: { email: 'admin@beamschool.edu', password: 'password' },
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    const credentials = roleCredentials[role as keyof typeof roleCredentials];
    setEmail(credentials.email);
    setPassword(credentials.password);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      
      toast({
        title: "Login Successful!",
        description: `Welcome to Beam School ${selectedRole} portal.`,
      });

      // Navigate based on role
      switch (selectedRole) {
        case 'teacher':
          navigate('/teacher/dashboard');
          break;
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'parent':
          navigate('/parent/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
        default:
          navigate('/dashboard');
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const roleIcons = {
    student: GraduationCap,
    teacher: Users,
    parent: User,
    admin: Shield,
  };

  const roleDescriptions = {
    student: "Access your lessons, assignments, and grades",
    teacher: "Manage classes, create content, and track progress",
    parent: "Monitor your child's academic progress",
    admin: "Oversee school operations and analytics",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-beam-gradient-from to-beam-gradient-to p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - School Info */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-beam-primary">B</span>
              </div>
            </div>
            <h2 className="text-3xl font-josefin font-bold mb-4">Beam International School</h2>
            <p className="text-xl opacity-90 mb-6">Empowering minds, shaping futures</p>
            <div className="space-y-2 text-sm opacity-80">
              <p>📍 123 Education Street, Learning City</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>✉️ info@beamschool.edu</p>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-josefin">School Portal Login</CardTitle>
            <CardDescription>
              Select your role and sign in to access your portal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedRole} onValueChange={handleRoleSelect} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="teacher">Teacher</TabsTrigger>
              </TabsList>
              <TabsList className="grid w-full grid-cols-2 mt-2">
                <TabsTrigger value="parent">Parent</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              {Object.entries(roleDescriptions).map(([role, description]) => (
                <TabsContent key={role} value={role} className="mt-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                    {React.createElement(roleIcons[role as keyof typeof roleIcons], {
                      className: "h-5 w-5 text-beam-primary"
                    })}
                    <div>
                      <div className="font-medium capitalize">{role} Portal</div>
                      <div className="text-sm text-muted-foreground">{description}</div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full beam-gradient" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Signing In...
                  </>
                ) : (
                  `Sign In as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`
                )}
              </Button>
            </form>

            <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="text-sm text-blue-800">
                <div className="font-medium mb-1">Demo Credentials:</div>
                <div className="text-xs space-y-1">
                  <div>Email: {roleCredentials[selectedRole as keyof typeof roleCredentials].email}</div>
                  <div>Password: password</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleBasedLogin;