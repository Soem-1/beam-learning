export interface FeeStructure {
  id: string;
  name: string;
  classId: string;
  academicYear: string;
  components: FeeComponent[];
  totalAmount: number;
  dueDate: string;
  isActive: boolean;
}

export interface FeeComponent {
  id: string;
  name: string;
  amount: number;
  type: 'tuition' | 'transport' | 'library' | 'lab' | 'sports' | 'other';
  isOptional: boolean;
  description?: string;
}

export interface FeePayment {
  id: string;
  studentId: string;
  feeStructureId: string;
  amount: number;
  paidAmount: number;
  pendingAmount: number;
  paymentDate?: string;
  paymentMethod?: 'cash' | 'card' | 'bank_transfer' | 'online';
  transactionId?: string;
  status: 'pending' | 'partial' | 'paid' | 'overdue';
  dueDate: string;
  lateFee?: number;
  discount?: number;
  notes?: string;
}

export interface Invoice {
  id: string;
  studentId: string;
  feePaymentId: string;
  invoiceNumber: string;
  amount: number;
  generatedAt: string;
  dueDate: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  items: InvoiceItem[];
}

export interface InvoiceItem {
  description: string;
  amount: number;
  quantity: number;
  total: number;
}