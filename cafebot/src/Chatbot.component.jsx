import React from "react";
import { Launcher } from 'react-chat-window';

class Chatbot extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        messageList: []
    }

    }

    async onMessageWasSent(message){
        await this.setState({
            messageList: [...this.state.messageList, message]
         })
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