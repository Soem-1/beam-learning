export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  markedBy: string;
  markedAt: string;
  notes?: string;
}

export interface AttendanceSession {
  id: string;
  classId: string;
  subjectId?: string;
  date: string;
  startTime: string;
  endTime?: string;
  teacherId: string;
  records: AttendanceRecord[];
  isCompleted: boolean;
}

export interface AttendanceSummary {
  studentId: string;
  totalDays: number;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  excusedDays: number;
  attendancePercentage: number;
  period: {
    startDate: string;
    endDate: string;
  };
}