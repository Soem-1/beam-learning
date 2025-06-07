import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { RoleBasedLayout } from "@/components/layout/RoleBasedLayout";

// Auth Pages
import RoleBasedLogin from "./pages/auth/RoleBasedLogin";

// Teacher Pages
import TeacherDashboard from "./pages/teacher/TeacherDashboard";

// Student Pages
import StudentDashboard from "./pages/student/StudentDashboard";

// Original Pages (for fallback)
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-beam-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <RoleBasedLayout>{children}</RoleBasedLayout>;
};

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/login" element={
        isAuthenticated ? <Navigate to={`/${user?.activeRole.type}/dashboard`} replace /> : <RoleBasedLogin />
      } />
      
      {/* Teacher Routes */}
      <Route path="/teacher/dashboard" element={
        <ProtectedRoute>
          <TeacherDashboard />
        </ProtectedRoute>
      } />
      
      {/* Student Routes */}
      <Route path="/student/dashboard" element={
        <ProtectedRoute>
          <StudentDashboard />
        </ProtectedRoute>
      } />
      
      {/* Parent Routes */}
      <Route path="/parent/dashboard" element={
        <ProtectedRoute>
          <div className="p-6">
            <h1 className="text-3xl font-josefin font-bold">Parent Dashboard</h1>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </ProtectedRoute>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <div className="p-6">
            <h1 className="text-3xl font-josefin font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Coming soon...</p>
          </div>
        </ProtectedRoute>
      } />

      {/* Fallback Routes */}
      <Route path="/dashboard" element={
        isAuthenticated ? <Navigate to={`/${user?.activeRole.type}/dashboard`} replace /> : <Navigate to="/login" replace />
      } />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;