import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GoogleGenAI } from "@google/genai";

export function GeminiChat() {
    const [messages, setMessages] = useState([])
    const [userInput, setUserInput] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const API_KEY = process.env.API_KEY

    useEffect(() => {
        const startChat = async () => {
            const ai = new GoogleGenAI({ apiKey: API_KEY })
            const response = await ai.models.generateContent({
                model: "gemini-2.0-flash",
                contents: "Explain how AI works in a few words",
              });
            const text = response.text
            // setMessages([
            //     {
            //         text,
            //         user: false
            //     },
            // ])
        }
        startChat()
    }, [])

    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}