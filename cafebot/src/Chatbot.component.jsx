import React from "react";
import { Launcher } from 'react-chat-window';
import io from 'socket.io-client';

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        messageList: [],
        socket: io("http://localhost:3000"),
        room: "user1"
    }

    }

    UNSAFE_componentWillMount() {
        this.sendMessage("Hi there!");
    }

    componentDidMount() {
        this.state.socket.connect(true);
        this.state.socket.emit('join', this.state.room);
    
    this.state.socket.on("send-msg-response", async(msg) => {
        this.state.messageList.pop()
        await this.setState({
            messageList: [...this.state.messageList]
        })

    this.sendMessage(msg);
    })
    }

    async onMessageWasSent(message){
        await this.setState({
            messageList: [...this.state.messageList, message]
         })
    
    this.sendMessage("...");
         await this.state.socket.emit('new-msg', { msg:
        message.data.text, room: this.state.room })
    }

    sendMessage(text){
        if(text.length > 0){
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'person',
                    type: 'text',
                    data: { text }
                }, ]
            })
        }
    }

    render (){
        return (
            <div id="chatbox" className="chatbox">
                <Launcher
                    agentProfile={{
                        teamName: 'Chatbot',
                        imageUrl: 'https://media.tenor.com/images/e2f8606e6ffcc1d7f744a3fa63f6b84a/tenor.gif'
                    }}
                    onMessageWasSent=
        { this.onMessageWasSent.bind(this)}
                                messageList={this.state.messageList}
                                showEmoji
                />
            </div>
        )
    }
}

export default Chatbot;