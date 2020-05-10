const CreateModel = Vue.component('Bar', {
    data: function () {
        return { msg: 'Hello' }
    },
    template: '<div>{{ msg }} : bar</div>',
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.msg = response))
    }
})