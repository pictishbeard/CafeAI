const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });

//Training the AI
async function trainChatBotAI() {
    return new Promise(async (resolve, reject) => {
        //Adds intents to Natural Language Processor
        //Also trains Natural Lamguage Generator
        manager.addDocument('en', 'Tatty-bye!', 'greetings.goodbye');
        manager.addDocument('en', 'Farewell!', 'greetings.goodbye');
        manager.addDocument('en', 'So Long!', 'greetings.goodbye');
        manager.addDocument('en', 'Hello there!', 'greetings.hello');
        manager.addDocument('en', 'Nice to see you!', 'greetings.hello');
        manager.addDocument('en', 'Howdy!', 'greetings.hello');

        //Training for NLG
        manager.addAnswer('en', 'greetings.goodbye', 'Until next time!');
        manager.addAnswer('en', 'greetings.goodbye', 'See you soon!');
        manager.addAnswer('en', 'greetings.hello', 'Hello!');
        manager.addAnswer('en', 'greetings.hello', 'Nice to see you!');

await manager.train();
    manager.save();
    console.log("The AI has been trained!")
    resolve(true);
    })
}

async function generateResponseAI(qsm) {
    //Train and save model
    return new Promise(async(resolve, reject) => {
        response = await manager.process('en', qsm);
        resolve(response);
    })
}

const connectWebSocket = (io) => {
    io.on('connection', function(socket) {
        socket.on('join', (userId) => {
            socket.join(userId);
            console.log("New user has joined the room")
        });

socket.on('new-msg', async function (data) {
            let response = await generateResponseAI(data.msg);
            io.to(data.room).emit('send-msg-response', 
            response.answer !== undefined
            ? response.answer : "I'm sorry, I don't understand: (");
})
    });
}

module.exports = {
    connectWebSocket,
    trainChatBotAI
}