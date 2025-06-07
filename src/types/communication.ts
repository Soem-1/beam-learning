export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  subject?: string;
  content: string;
  attachments: FileAttachment[];
  sentAt: string;
  readAt?: string;
  isRead: boolean;
  threadId?: string;
  type: 'direct' | 'announcement' | 'notification';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  authorId: string;
  targetAudience: 'all' | 'students' | 'teachers' | 'parents' | 'class';
  targetIds?: string[]; // class IDs if targetAudience is 'class'
  priority: 'low' | 'medium' | 'high' | 'urgent';
  attachments: FileAttachment[];
  publishedAt: string;
  expiresAt?: string;
  isActive: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'assignment' | 'grade' | 'attendance' | 'announcement' | 'fee' | 'general';
  relatedId?: string;
  isRead: boolean;
  createdAt: string;
  actionUrl?: string;
}