<template>
    <chatbox></chatbox>
</template>

<script>
export default {
    created() {
        this.$store.commit('loadMessages', window.xprops.messages)
        this.$store.commit('loadTheme', window.xprops.theme)
        this.$bus.$on('send', (text) => {
            window.xprops.onSend(text)
        })
        window.xprops.onProps((props) => {
            this.$store.commit('loadMessages', props.messages)
            this.$bus.$emit('loadMessages')
        })
    }
}
</script>

<style>
html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
}

</style>