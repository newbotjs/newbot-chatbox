<template>
    <div class="user-thumbnail-box">
        <div class="avatar-container" :style="avatarStyles"></div>
    </div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default: '24px'
        },
        width: {
            type: String,
            default: '24px'
        },
        src: {
            type: String
        }
    },
    computed: {
        avatarStyles() {
            return {
                width: this.width,
                height: this.height,
                'background': `url(${this.src})`
            }
        }
    }
}
</script>

<style scoped>
.conversation-wrap .agent-message .avatar-wrap .user-thumbnail-box {
    margin-top: -3.2rem;
}

.avatar-container {
    border-radius: 10px;
    background-size: cover;
    background-position: center;
}
</style>

<style>
.user-thumbnail-box {
    flex: 0 0 auto;
    max-width: 100%;
    position: relative;
}
</style>