<template>
    <div class="nb-card" :class="classes">
        <div class="picture" :style="imageUrl"></div>
        <div class="details">
            <div class="h4">{{title}}</div>
            <div class="description">
                {{description}}
            </div>
        </div>
        <div class="nb-card-footer vertical-buttons">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'medium'
        },
        image: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        }
    },
    computed: {
        classes() {
            return {
                [`status-${this.status}`]: true,
                [`size-${this.size}`]: true
            }
        },
        imageUrl() {
            return {
                'background-image': `url(${this.image})`
            }
        }
    }
}
</script>

<style scoped>
.h4 {
    font-size: 18px;
    display: block;
    margin: 10px 0;
}

.description {
    padding: 10px 0;
}

.nb-card .picture {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    flex: 1;
}

.nb-card .details {
    font-size: 15px;
    padding: 1rem 1.25rem;
}

.nb-card {
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: #fff;
    border: .0625rem solid #e4e9f2;
    border-radius: .25rem;
    box-shadow: none;
    color: #222b45;
    font-family: Open Sans,sans-serif;
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.25rem;
    margin-bottom: 1.875rem;
    flex-direction: column;
    width: 400px;
    display: flex;
}


.nb-card-footer.vertical-buttons {
    padding: 0 !important;
}

.nb-card-footer.vertical-buttons .nb-chat-buttons {
    margin: 0 !important;
}

.nb-card.size-medium {
    height: 28.875rem;
}
</style>