export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  roles: UserRole[];
  activeRole: UserRole;
  schoolId: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
}

export interface UserRole {
  type: 'student' | 'teacher' | 'parent' | 'admin';
  permissions: string[];
  classIds?: string[];
  studentIds?: string[]; // For parents
  subjectIds?: string[]; // For teachers
}

export interface School {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  settings: SchoolSettings;
}

export interface SchoolSettings {
  academicYear: string;
  terms: Term[];
  gradeSystem: 'percentage' | 'gpa' | 'letter';
  currency: string;
  timezone: string;
}

export interface Term {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  school: School | null;
}