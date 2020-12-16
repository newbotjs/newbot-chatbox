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
    }
}
</script>

<style>
html, body {
    height: 100%;
    margin: 0;
}

</style>