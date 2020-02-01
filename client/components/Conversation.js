import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Socket from "../socket";


export default class Conversation extends React.Component {

    constructor() {
        super();
        this.socket = new Socket();
    }


    sendMessage(message) {
        alert(message);
    }

    render() {
        return (
            <GiftedChat
            onSend={(message) => this.sendMessage(message[0].text)}
            />
        )
    }
}