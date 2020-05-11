JWT = ''

CreateModel = Vue.component('create-model', {
    data: function () {
        return {
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
            password: '',
            jwt: '',
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
            <button class="button" v-on:click="post">Create model</button>
        </div>
    </section>    
    `,
    methods: {
        post: function (event) {
            axios
                .post('https://localhost:44368/api/Models', {
                    firstName: this.firstname,
                    lastName: this.lastname,
                    email: this.email,
                    phoneNo: this.phoneno,
                    addresLine1: this.addr1,
                    addresLine2: this.addr2,
                    zip: this.zip,
                    city: this.city,
                    country: this.country,
                    birthDate: '2020-05-11T17:52:58.314Z',
                    nationality: this.nationality,
                    height: 0,
                    shoeSize: 0,
                    hairColor: this.haircolor,
                    eyeColor: this.eyecolor,
                    comments: this.comments,
                    password: this.password
                }).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }
})

LoginComponent = Vue.component('login-component', {
    data: function () {
        return {
            email: '',
            password: '',
            oldpassword: ''
        }
    },
    template: 
    `
        <div class="container">
        <div class="body">
            <h1 class="title">Welcome to Model Manager</h1>
            <h2 class="subtitle">Login to your personal dashboard below</h2>
            <div class="button-block">
                <h3 class="subsubtitle">Login</h3>
                <p>Email</p>
                <input v-on:keyup.enter="login" class="inputfield" type="text" v-model="email" />
                <br />
                <p>Password</p>
                <input v-on:keyup.enter="login" class="inputfield" type="password" v-model="password" />
                <button v-on:click="login" class="button">Login</button>
            </div>
        </div>
    </div>
    `,
    methods: {
        login: function (event) {
            // `this` inside methods points to the Vue instance
            //alert(this.username + ' ' + this.password)
            axios.post('https://localhost:44368/api/Account/login',
                {
                    email: this.email,
                    password: this.password,
                    oldPassword: this.oldpassword
                }).then((response) => {
                    axios.defaults.headers.post['Authorization'] = 'Bearer '.concat(response.data.jwt.toString()),
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }

})

const TestComponent = Vue.component('test-component', {
    template: '<div><h3>Test</h3></div>'
})
