export interface Assignment {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  dueDate: string;
  totalMarks: number;
  attachments: FileAttachment[];
  submissions: AssignmentSubmission[];
  isActive: boolean;
  createdAt: string;
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  submittedAt: string;
  attachments: FileAttachment[];
  marks?: number;
  feedback?: string;
  status: 'submitted' | 'graded' | 'late' | 'missing';
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  questions: QuizQuestion[];
  duration: number; // in minutes
  totalMarks: number;
  startTime: string;
  endTime: string;
  attempts: QuizAttempt[];
  isActive: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'mcq' | 'true-false' | 'short-answer' | 'essay';
  options?: string[];
  correctAnswer: string | string[];
  marks: number;
  explanation?: string;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  studentId: string;
  answers: QuizAnswer[];
  startedAt: string;
  submittedAt?: string;
  score?: number;
  status: 'in-progress' | 'submitted' | 'graded';
}

export interface QuizAnswer {
  questionId: string;
  answer: string | string[];
  isCorrect?: boolean;
  marksAwarded?: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  subjectId: string;
  classId: string;
  teacherId: string;
  content: LessonContent[];
  scheduledDate?: string;
  duration?: number;
  isPublished: boolean;
  createdAt: string;
}

export interface LessonContent {
  id: string;
  type: 'video' | 'document' | 'text' | 'image' | 'audio';
  title: string;
  content: string; // URL for files, text content for text type
  order: number;
}

export interface FileAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: string;
}