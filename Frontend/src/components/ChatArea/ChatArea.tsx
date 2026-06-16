function ChatArea() {
        
    return (
        <div className="chat-container">
            <main className="chat-messages">
                <span className="username"></span>
                <div className="incoming-message"></div>
                <div className="outgoing-message"></div>
            </main>

            <footer className="input-area">
                <input type="text" placeholder="Write a message..." />

                <button type="submit">Send</button>
            </footer>
        </div>
    );
}

export default ChatArea;
