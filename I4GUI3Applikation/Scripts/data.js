const CreateModel = Vue.component('create-model', {
    data: function () {
        return {
            msg: 'Hello',
            firstname: '',
            lastname: '',
            email: '',
            phoneno: '',
            addr1: '',
            addr2: '',
            zip: '',
            city: '',
            nationality: '',
            comments: '',
            shoesize: '',
            height: '',
            eyecolor: '',
            haircolor: '',
        }
    },
    template: `
    <section class="model-container">
        <div class="input-container">
            <p>Firstname</p>
            <input class="inputfield" type="text" v-model="firstname"/>
            <p>Lastname</p>
            <input class="inputfield" type="text" v-model="lastname"/>
            <p>Nationality</p>
            <input class="inputfield" type="text" v-model="nationality"/>
            <p>Email</p>
            <input class="inputfield" type="text" v-model="email"/>
            <p>Phone #</p>
            <input class="inputfield" type="text" v-model="phoneno"/>
            <p>Primary Address</p>
            <input class="inputfield" type="text" v-model="addr1"/>
            <p>Secondary Address</p>
            <input class="inputfield" type="text" v-model="addr2"/>
            <p>City</p>
            <input class="inputfield" type="text" v-model="city"/>
            <p>Zipcode</p>
            <input class="inputfield" type="text" v-model="zip"/>
        </div>
        <div class="form-container">
            <p>Height</p>
            <input class="inputfield" type="text" v-model="height"/>
            <p>Shoe size</p>
            <input class="inputfield" type="text" v-model="shoesize"/>
            <p>Hair Colour</p>
            <input class="inputfield" type="text" v-model="haircolor"/>
            <p>Eye Colour</p>
            <input class="inputfield" type="text" v-model="eyecolor"/>
            <p>Comments</p>
            <form>
                <textarea class="textfield" v-model="comments">
                    
                </textarea>
            </form>
            <br>
            <button class="button">Create model</button>
        </div>
    </section>    
    `,
    mounted() {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.msg = response))
    }
})

const TestComponent = Vue.component('test-component', {
    template: '<div><h3>Test</h3></div>'
})
