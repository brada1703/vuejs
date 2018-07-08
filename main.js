new Vue({
    el: '#app',
    data: {
        title: 'Hello world',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>',
        name: 'Brad',
        age: 32,
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        },
        random: function () {
            return Math.random();
        }
    }
})