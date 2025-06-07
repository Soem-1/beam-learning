export interface Class {
  id: string;
  name: string;
  grade: string;
  section: string;
  teacherId: string;
  studentIds: string[];
  subjectIds: string[];
  academicYear: string;
  capacity: number;
  room?: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description?: string;
  teacherId: string;
  classIds: string[];
  credits: number;
  color: string;
}

export interface Student {
  id: string;
  userId: string;
  studentId: string;
  classId: string;
  parentIds: string[];
  admissionDate: string;
  dateOfBirth: string;
  address: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  medicalInfo?: string;
  isActive: boolean;
}

export interface Teacher {
  id: string;
  userId: string;
  employeeId: string;
  subjectIds: string[];
  classIds: string[];
  qualification: string;
  experience: number;
  joinDate: string;
  salary?: number;
  isActive: boolean;
}

export interface Parent {
  id: string;
  userId: string;
  studentIds: string[];
  relationship: 'father' | 'mother' | 'guardian';
  occupation?: string;
  phone: string;
  alternatePhone?: string;
  isActive: boolean;
}