<template>
  <div class="nb-card size-tiny status-primary">
    <video :src="data.video" :controls="hasUrl" :poster="poster"></video>
  </div>
</template>

<script>
export default {
    props: ['data'],
    computed: {
        hasUrl() {
            return !!this.data.video
        },
        poster() {
            return this.hasUrl ? '' : this.data.defaultImage
        }
    }
};
</script>

<style scoped>
.nb-card {
    margin-top: 10px;
    padding: 10px;
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

    display: flex;
    flex-direction: column;
    max-height: 400px;
}

.nb-card .picture {
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    flex: 1;
}

.nb-card.size-tiny {
    height: 13.5rem;
}
</style>