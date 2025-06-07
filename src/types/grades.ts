export interface Grade {
  id: string;
  studentId: string;
  subjectId: string;
  assessmentType: 'assignment' | 'quiz' | 'exam' | 'project' | 'participation';
  assessmentId?: string;
  marks: number;
  totalMarks: number;
  percentage: number;
  grade: string;
  termId: string;
  teacherId: string;
  gradedAt: string;
  comments?: string;
}

export interface ReportCard {
  id: string;
  studentId: string;
  termId: string;
  classId: string;
  subjects: SubjectGrade[];
  overallGrade: string;
  overallPercentage: number;
  rank?: number;
  totalStudents: number;
  attendance: AttendanceSummary;
  teacherComments?: string;
  principalComments?: string;
  generatedAt: string;
}

export interface SubjectGrade {
  subjectId: string;
  subjectName: string;
  grades: Grade[];
  totalMarks: number;
  obtainedMarks: number;
  percentage: number;
  grade: string;
  teacherComments?: string;
}