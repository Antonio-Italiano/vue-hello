console.log('Vue ok', Vue);

const app = Vue.createApp({
    data() {
        return {
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image:'https://vuejs.org/images/logo.png'
        }
    }
});

app.mount('#root');