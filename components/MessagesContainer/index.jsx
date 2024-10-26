"use client";
import { MessageBox } from "../CustomComponents";

export default function MessagesContainer({messages = []}) {
    return (
        <div className="flex-grow p-5 overflow-y-auto">
            {messages.map((message, index) => (
                <MessageBox key={index} message={message} />
            ))}
        </div>
    );
}