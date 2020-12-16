import bus from './bus'

export default {
    state: {
        messages: [],
        theme: {
            styles: {
                'background': '#f4f6fb',
                'color': 'black',
                'bubble-left-background-color': 'white',
                'bubble-left-text-color': '#3c4858',
                'bubble-right-background-color': '#1f93ff',
                'bubble-right-text-color': 'white',
                'input-message-background': 'white',
                'input-message-text-color': '#3c4858'
            }
        }
    },
    getters: {
        messages(state) {
            return state.messages
        },
        length(state) {
            return state.messages.length
        }
    },
    mutations: {
        addMessage(state, message) {
            state.messages = [...state.messages, message]
        },
        reset(state) {
            state.messages = []
        },
        addUserMessage(state, message) {
            state.messages = [...state.messages, {
                data: {
                    text: message
                },
                isUser: true,
                date: new Date()
            }]
            bus.$emit('send', message)
        },

        loadMessages(state, messages) {
            state.messages = messages
        },

        loadTheme(state, theme) {
            if (!theme) return
            state.theme.styles = {
                ...state.theme.styles,
                ...theme.styles
            }
        }
    }
}