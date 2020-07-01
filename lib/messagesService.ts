class MessageService {
    messages: string[] = [];

    add(message: string){
        this.messages.push(message)
    }

    clear(){
        this.messages = [];
    }
}

export const messageService = new MessageService()