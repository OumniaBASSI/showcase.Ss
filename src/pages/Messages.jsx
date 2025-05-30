import React, { useState, useEffect } from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';

const MOCK_CONVERSATIONS = [
  {
    id: 1,
    user_name: "Amine Niman",
    last_message: "See you tomorrow!",
  },
  {
    id: 2,
    user_name: "Rabab Lousas",
    last_message: "Thanks for your help!",
  },
  {
    id: 3,
    user_name: "Ayoube Aouni",
    last_message: "Can you send the file?",
  },
];

const MOCK_MESSAGES = [
  // Conversation 1
  { id: 1, conversation_id: 1, sender_id: 1, message: "Hey Amine! Ready for the session?" },
  { id: 2, conversation_id: 1, sender_id: 2, message: "Yes! Looking forward to it." },
  { id: 3, conversation_id: 1, sender_id: 1, message: "See you tomorrow!" },
  // Conversation 2
  { id: 4, conversation_id: 2, sender_id: 2, message: "Thank you for your help with the design!" },
  { id: 5, conversation_id: 2, sender_id: 1, message: "You're welcome, Rabab!" },
  // Conversation 3
  { id: 6, conversation_id: 3, sender_id: 3, message: "Can you send the file?" },
  { id: 7, conversation_id: 3, sender_id: 1, message: "Sure, sending it now." },
];

const CURRENT_USER_ID = 1;

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [inputMessage, setInputMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Use mock data for demonstration
    setConversations(MOCK_CONVERSATIONS);
    setMessages(MOCK_MESSAGES);
  }, []);

  const handleConversationClick = (conversationId) => {
    setSelectedConversation(conversationId);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !selectedConversation) return;
    const newMessage = {
      id: messages.length + 1,
      conversation_id: selectedConversation,
      sender_id: CURRENT_USER_ID,
      message: inputMessage,
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  const filteredMessages = selectedConversation
    ? messages.filter((message) => message.conversation_id === selectedConversation)
    : [];

  const selectedUser =
    conversations.find((c) => c.id === selectedConversation)?.user_name || '';

  // Color palette
  const COLORS = {
    primary: "#7c3aed",
    secondary: "#a78bfa",
    background: "#f5f3ff",
    cardBg: "#fff",
    accent: "#f3e8ff",
    text: "#312e81",
    muted: "#6d28d9",
  };

  // Filter conversations by search term
  const filteredConversations = conversations.filter((conversation) =>
    conversation.user_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="d-flex" style={{ background: COLORS.background, minHeight: "100vh" }}>
      <Sidebar />
      <div className="p-4 w-100 d-flex" style={{ height: "80vh" }}>
        <Card style={{ width: "25%", background: COLORS.accent }} className="me-3 shadow-sm border-0">
          <Card.Body>
            <h5 style={{ color: COLORS.primary, fontWeight: 700 }}>Messages</h5>
            <Form.Control
              className="mb-3"
              placeholder="Search a conversation"
              style={{ borderRadius: 12, borderColor: COLORS.secondary }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="chat-list">
              {filteredConversations.map((conversation) => (
                <div
                  className={`mb-2 p-2 rounded ${selectedConversation === conversation.id ? 'bg-white' : ''}`}
                  key={conversation.id}
                  style={{
                    cursor: 'pointer',
                    borderLeft: selectedConversation === conversation.id ? `4px solid ${COLORS.primary}` : '4px solid transparent',
                    color: COLORS.text,
                    fontWeight: selectedConversation === conversation.id ? 600 : 500,
                  }}
                  onClick={() => handleConversationClick(conversation.id)}
                >
                  <b>{conversation.user_name}</b>
                  <br />
                  <small style={{ color: COLORS.muted }}>{conversation.last_message}</small>
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Card className="flex-fill shadow-sm border-0" style={{ background: COLORS.cardBg }}>
          <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
            <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16 }}>
              {selectedConversation ? (
                <>
                  <div className="mb-3" style={{ color: COLORS.primary, fontWeight: 600, fontSize: 18 }}>
                    {selectedUser}
                  </div>
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-2 d-flex ${message.sender_id === CURRENT_USER_ID ? 'justify-content-end' : 'justify-content-start'}`}
                    >
                      <div
                        className="p-2 rounded"
                        style={{
                          background: message.sender_id === CURRENT_USER_ID ? COLORS.primary : COLORS.accent,
                          color: message.sender_id === CURRENT_USER_ID ? "#fff" : COLORS.text,
                          maxWidth: "70%",
                          borderRadius: message.sender_id === CURRENT_USER_ID
                            ? "16px 16px 4px 16px"
                            : "16px 16px 16px 4px",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        {message.message}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="text-center text-muted" style={{ marginTop: 100 }}>
                  Select a conversation to start chatting
                </div>
              )}
            </div>
            {selectedConversation && (
              <Form onSubmit={handleSendMessage}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Type your message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    style={{
                      borderRadius: 12,
                      borderColor: COLORS.secondary,
                      background: COLORS.background,
                      color: COLORS.text,
                    }}
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    style={{
                      background: COLORS.primary,
                      borderColor: COLORS.primary,
                      borderRadius: 12,
                      fontWeight: 600,
                    }}
                  >
                    Send
                  </Button>
                </InputGroup>
              </Form>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
