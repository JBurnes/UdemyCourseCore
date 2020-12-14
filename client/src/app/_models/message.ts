export interface Message {
    id: number;
    senderId: number;
    senderUsername: string;
    recipientId: number;
    senderPhotoUrl?: any;
    recipientPhotoUrl: string;
    recipient: string;
    content: string;
    dateRead?: Date;
    messageSent: Date;
  }
  