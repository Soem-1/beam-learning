import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole, School, AuthState } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  updateUser: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock data for demonstration
const mockSchool: School = {
  id: 'school-1',
  name: 'Beam International School',
  address: '123 Education Street, Learning City, LC 12345',
  phone: '+1 (555) 123-4567',
  email: 'info@beamschool.edu',
  logo: '/school-logo.png',
  settings: {
    academicYear: '2024-2025',
    terms: [
      { id: 'term-1', name: 'First Term', startDate: '2024-09-01', endDate: '2024-12-15', isActive: true },
      { id: 'term-2', name: 'Second Term', startDate: '2025-01-06', endDate: '2025-04-15', isActive: false },
      { id: 'term-3', name: 'Third Term', startDate: '2025-04-22', endDate: '2025-07-15', isActive: false },
    ],
    gradeSystem: 'percentage',
    currency: 'USD',
    timezone: 'America/New_York',
  },
};

const mockUsers: Record<string, User> = {
  'teacher@beamschool.edu': {
    id: 'user-teacher-1',
    name: 'Sarah Johnson',
    email: 'teacher@beamschool.edu',
    avatar: '👩‍🏫',
    roles: [
      {
        type: 'teacher',
        permissions: ['manage_classes', 'create_assignments', 'grade_students', 'take_attendance'],
        classIds: ['class-1', 'class-2'],
        subjectIds: ['subject-1', 'subject-2'],
      },
    ],
    activeRole: {
      type: 'teacher',
      permissions: ['manage_classes', 'create_assignments', 'grade_students', 'take_attendance'],
      classIds: ['class-1', 'class-2'],
      subjectIds: ['subject-1', 'subject-2'],
    },
    schoolId: 'school-1',
    isActive: true,
    createdAt: '2024-01-15T00:00:00Z',
    lastLogin: '2024-12-15T10:30:00Z',
  },
  'student@beamschool.edu': {
    id: 'user-student-1',
    name: 'Alex Chen',
    email: 'student@beamschool.edu',
    avatar: '👨‍🎓',
    roles: [
      {
        type: 'student',
        permissions: ['view_assignments', 'submit_assignments', 'view_grades', 'view_attendance'],
        classIds: ['class-1'],
      },
    ],
    activeRole: {
      type: 'student',
      permissions: ['view_assignments', 'submit_assignments', 'view_grades', 'view_attendance'],
      classIds: ['class-1'],
    },
    schoolId: 'school-1',
    isActive: true,
    createdAt: '2024-09-01T00:00:00Z',
    lastLogin: '2024-12-15T09:15:00Z',
  },
  'parent@beamschool.edu': {
    id: 'user-parent-1',
    name: 'Maria Chen',
    email: 'parent@beamschool.edu',
    avatar: '👩‍👧',
    roles: [
      {
        type: 'parent',
        permissions: ['view_child_grades', 'view_child_attendance', 'communicate_teachers', 'view_fees'],
        studentIds: ['student-1'],
      },
    ],
    activeRole: {
      type: 'parent',
      permissions: ['view_child_grades', 'view_child_attendance', 'communicate_teachers', 'view_fees'],
      studentIds: ['student-1'],
    },
    schoolId: 'school-1',
    isActive: true,
    createdAt: '2024-09-01T00:00:00Z',
    lastLogin: '2024-12-15T08:45:00Z',
  },
  'admin@beamschool.edu': {
    id: 'user-admin-1',
    name: 'Dr. Michael Thompson',
    email: 'admin@beamschool.edu',
    avatar: '👨‍💼',
    roles: [
      {
        type: 'admin',
        permissions: ['manage_users', 'manage_classes', 'manage_subjects', 'view_analytics', 'manage_fees'],
      },
    ],
    activeRole: {
      type: 'admin',
      permissions: ['manage_users', 'manage_classes', 'manage_subjects', 'view_analytics', 'manage_fees'],
    },
    schoolId: 'school-1',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-12-15T11:00:00Z',
  },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    school: mockSchool,
  });

  useEffect(() => {
    // Check for stored auth state
    const storedUser = localStorage.getItem('beam_user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setAuthState(prev => ({
          ...prev,
          user,
          isAuthenticated: true,
          isLoading: false,
        }));
      } catch (error) {
        localStorage.removeItem('beam_user');
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication
    const user = mockUsers[email];
    if (user && password === 'password') {
      const updatedUser = { ...user, lastLogin: new Date().toISOString() };
      setAuthState(prev => ({
        ...prev,
        user: updatedUser,
        isAuthenticated: true,
      }));
      localStorage.setItem('beam_user', JSON.stringify(updatedUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setAuthState(prev => ({
      ...prev,
      user: null,
      isAuthenticated: false,
    }));
    localStorage.removeItem('beam_user');
  };

  const switchRole = (role: UserRole) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, activeRole: role };
      setAuthState(prev => ({ ...prev, user: updatedUser }));
      localStorage.setItem('beam_user', JSON.stringify(updatedUser));
    }
  };

  const updateUser = (updates: Partial<User>) => {
    if (authState.user) {
      const updatedUser = { ...authState.user, ...updates };
      setAuthState(prev => ({ ...prev, user: updatedUser }));
      localStorage.setItem('beam_user', JSON.stringify(updatedUser));
    }
  };

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    switchRole,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};