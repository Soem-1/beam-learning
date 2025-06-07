
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { MessageSquare, Send, Search, ArrowLeft, Users, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Messaging = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');
  const { toast } = useToast();

  const conversations = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Instructor',
      lastMessage: 'Great work on your React assignment!',
      timestamp: '2 min ago',
      unread: 2,
      avatar: '👩‍🏫'
    },
    {
      id: 2,
      name: 'Study Group - React Masters',
      role: 'Group Chat',
      lastMessage: 'Anyone available for a study session?',
      timestamp: '15 min ago',
      unread: 0,
      avatar: '👥'
    },
    {
      id: 3,
      name: 'Dr. Alex Kumar',
      role: 'Instructor',
      lastMessage: 'The ML assignment deadline has been extended',
      timestamp: '1 hour ago',
      unread: 1,
      avatar: '👨‍🔬'
    },
    {
      id: 4,
      name: 'Course Support',
      role: 'Support',
      lastMessage: 'How can we help you today?',
      timestamp: '1 day ago',
      unread: 0,
      avatar: '🎧'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      content: 'Hi! I reviewed your latest submission for the React Patterns course.',
      timestamp: '10:30 AM',
      isMe: false
    },
    {
      id: 2,
      sender: 'Me',
      content: 'Thank you! How did I do?',
      timestamp: '10:32 AM',
      isMe: true
    },
    {
      id: 3,
      sender: 'Sarah Chen',
      content: 'Great work on your React assignment! You really understood the concepts of hooks and context. Just a small suggestion on the useCallback optimization.',
      timestamp: '10:35 AM',
      isMe: false
    },
    {
      id: 4,
      sender: 'Me',
      content: 'That\'s great to hear! Could you elaborate on the useCallback suggestion?',
      timestamp: '10:37 AM',
      isMe: true
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been delivered.",
      });
      setNewMessage('');
    }
  };

  const selectedConversation = conversations.find(conv => conv.id === selectedChat);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-6 h-6 text-beam-primary" />
              <span className="text-2xl font-josefin font-bold beam-gradient-text">Messages</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 h-[calc(100vh-88px)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search conversations..." className="pl-8" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[500px]">
                <div className="space-y-2 p-4">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                        selectedChat === conversation.id ? 'bg-beam-primary/10 border border-beam-primary/20' : ''
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{conversation.avatar}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm truncate">{conversation.name}</h4>
                            {conversation.unread > 0 && (
                              <Badge variant="default" className="ml-2 text-xs">
                                {conversation.unread}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-1">{conversation.role}</p>
                          <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                          <p className="text-xs text-muted-foreground mt-1">{conversation.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-2">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{selectedConversation.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{selectedConversation.name}</CardTitle>
                      <CardDescription>{selectedConversation.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <Separator />

                {/* Messages Area */}
                <CardContent className="flex-1">
                  <ScrollArea className="h-[400px] pr-4">
                    <div className="space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.isMe
                                ? 'bg-beam-primary text-white'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.isMe ? 'text-white/70' : 'text-muted-foreground'
                            }`}>
                              {message.timestamp}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="flex gap-2 mt-4">
                    <Input
                      placeholder="Type your message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} className="beam-gradient">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex items-center justify-center h-full">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Select a conversation</h3>
                  <p className="text-muted-foreground">Choose a conversation from the left to start messaging</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messaging;
