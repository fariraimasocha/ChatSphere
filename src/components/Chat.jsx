import { useState } from 'react'
import ChatBot from "react-chatbotify"

function App() {
    const [count, setCount] = useState(0)

    const flow = {
        "start": {
            "message": "Hello world!"
        }
    }
    return (
        <>
            <ChatBot flow={flow} />
        </>
    )
}

export default App