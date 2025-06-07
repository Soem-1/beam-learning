import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { TeacherLayout } from './TeacherLayout';
import { StudentLayout } from './StudentLayout';
import { ParentLayout } from './ParentLayout';
import { AdminLayout } from './AdminLayout';

interface RoleBasedLayoutProps {
  children: React.ReactNode;
}

export const RoleBasedLayout: React.FC<RoleBasedLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <div>{children}</div>;
  }

  switch (user.activeRole.type) {
    case 'teacher':
      return <TeacherLayout>{children}</TeacherLayout>;
    case 'student':
      return <StudentLayout>{children}</StudentLayout>;
    case 'parent':
      return <ParentLayout>{children}</ParentLayout>;
    case 'admin':
      return <AdminLayout>{children}</AdminLayout>;
    default:
      return <div>{children}</div>;
  }
};