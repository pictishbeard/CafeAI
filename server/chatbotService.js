const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });

// Train the AI
async function trainChatBotIA() {
    return new Promise(async (resolve, reject) => {
        // Adds the utterances and intents for the NLP
        // // Train also the NLG
        // Adds the utterances and intents for the Natural Language Processing
        manager.addDocument('en', 'Goodbye for now', 'greetings.bye');
        manager.addDocument('en', 'Bye bye take care', 'greetings.bye');
        manager.addDocument('en', 'Okay see you later', 'greetings.bye');
        manager.addDocument('en', 'Bye for now', 'greetings.bye');
        manager.addDocument('en', 'I must go', 'greetings.bye');
        manager.addDocument('en', 'Hello', 'greetings.hello');
        manager.addDocument('en', 'Hi', 'greetings.hello');
        manager.addDocument('en', 'Howdy', 'greetings.hello');

        // Train also the Natural Language Generator
        manager.addAnswer('en', 'greetings.bye', 'Till next time');
        manager.addAnswer('en', 'greetings.bye', 'See you soon!');
        manager.addAnswer('en', 'greetings.hello', 'Hey there!');
        manager.addAnswer('en', 'greetings.hello', 'Greetings!');

        await manager.train();
        manager.save();
        console.log("AI has been trained")
        resolve(true);
    })
}

async function generateResponseAI(qsm) {
    // Train and save the mode
    return new Promise(async (resolve, reject) => {
        response = await manager.process('en', qsm);
        resolve(response);
    })
}

const connectWebSocket = (io) => {
    io.on('connection', function (socket) {
        socket.on('join', (userId) => {
            socket.join(userId);
            console.log("New user joined!")
        });

        socket.on('new-msg', async function (data) {
            let response = await generateResponseAI(data.msg);
            io.to(data.room).emit('send-msg-response', response.answer !== undefined
                ? response.answer : "I am sorry, I don't understand");
        })

    });
}

module.exports = {
    connectWebSocket,
    trainChatBotIA
}