console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        }
    }
});

app.mount('#root');