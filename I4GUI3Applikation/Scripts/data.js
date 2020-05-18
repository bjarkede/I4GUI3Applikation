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
            birthdate: '',
            comments: '',
            shoesize: 0,
            height: 0,
            eyecolor: '',
            haircolor: '',
            password: '',
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
            <input class="inputfield" type="number" v-model="height"/>
            <p>Shoe size</p>
            <input class="inputfield" type="number" v-model="shoesize"/>
            <p>Hair Colour</p>
            <input class="inputfield" type="text" v-model="haircolor"/>
            <p>Eye Colour</p>
            <input class="inputfield" type="text" v-model="eyecolor"/>
            <p>Birthday</p>
            <form>
                <input class="inputfield" type="date" v-model="birthdate"/>
            </form>
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
                    birthDate: this.birthdate,
                    nationality: this.nationality,
                    height: Number(this.height),
                    shoeSize: Number(this.shoesize),
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

CreateManager = Vue.component('create-manager', {
    data: function () {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
        }
    },
    template:
        `
        <section class="manager-container">
            <div class="input-container">
                <p>Firstname</p>
                <input class="inputfield" type="text" v-model="firstname"/>
                <p>Lastname</p>
                <input class="inputfield" type="text" v-model="lastname"/>
                <p>Nationality</p>
                <input class="inputfield" type="email" v-model="email"/>
                <p>Email</p>
                <input class="inputfield" type="text" v-model="password"/>
            </div>
            <div class="form-container">
                <br>
                <br>
                <br>
                <br>
                <br>
                <button class="button" v-on:click="post">Create manager</button>
            </div>
        </section>
        `
    ,
    methods: {
        post: function (event) {
            axios
                .post('https://localhost:44368/api/Managers', {
                    firstName: this.firstname,
                    lastName: this.lastname,
                    email: this.email,
                    password: this.password,
                }).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }
})

CreateJob = Vue.component('create-job', {
    data: function () {
        return {
            customer: '',
            startdate: '',
            days: 0,
            location: '',
            comments: '',
        }
    },
    template:
        `
        <section class="manager-container">
            <div class="input-container">
                <p>Customer</p>
                <input class="inputfield" type="text" v-model="customer"/>
                <p>Start date</p>
                <input class="inputfield" type="date" v-model="startdate"/>
                <p>Days</p>
                <input class="inputfield" type="number" v-model="days"/>
                <p>Location</p>
                <input class="inputfield" type="text" v-model="location"/>
            </div>
            <div class="form-container">
            <p>Comments</p>
            <form>
                <textarea class="textfield" v-model="comments">
                    
                </textarea>
            </form>
            <br>
            <button class="button" v-on:click="post">Create job</button>
        </div>
        </section>
        `
    ,
    methods: {
        post: function (event) {
            axios
                .post('https://localhost:44368/api/Jobs', {
                    customer: this.customer,
                    startDate: this.startdate,
                    days: Number(this.days),
                    location: this.location,
                    comments: this.comments,
                }).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }
})

AddJob = Vue.component('add-job', {
    data: function () {
        return {
            jobid: 0,
            modelid: 0,
        }
    },
    template:
        `
        <section class="manager-container">
            <div class="input-container">
                <p>JobId</p>
                <input class="inputfield" type="number" v-model="jobid"/>
                <p>ModelId</p>
                <input class="inputfield" type="number" v-model="modelid"/>
            </div>
            <div class="form-container">
                <br>
                <br>
                <button class="button" v-on:click="post">Add to job</button>
                <button class="button" v-on:click="deletejob">Delete from job</button>
            </div>
        </section>
        `
    ,
    methods: {
        post: function (event) {

            url = 'https://localhost:44368/api/Jobs/' + this.jobid + '/model/' + this.modelid

            axios
                .post(url).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        },
        deletejob: function (event) {

            url = 'https://localhost:44368/api/Jobs/' + this.jobid + '/model/' + this.modelid

            axios
                .delete(url).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }
})

GetJobs = Vue.component('get-jobs', {
    data: function () {
        return {
            jobs: [],
        }
    },
    template:
        `
        <section class="manager-container">
        <button class="button" v-on:click="get">Update</button>
            <ul v-for="job in jobs" style="list-style-type:none;list-style-position:inside; margin:0; padding:0;">
                <h3>JobId: {{ job.efJobId }}</h3>
                <li>Information: {{ job.startDate }} at: {{ job.location }}</li>
                <li>Comments from {{ job.customer }}: {{ job.comments }}</li>
                <li>Models: {{ job.jobModels }}</li>
            </ul>
        </section>
        `
    ,
    methods: {
        get: function (event) {
            axios
                .get('https://localhost:44368/api/Jobs').then((response) => {
                    this.jobs = response.data;
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        }
    }
})

AddExpense = Vue.component('add-expense', {
    data: function () {
        return {
            jobid: 0,
            modelid: 0,
            date: '',
            text: '',
            amount: 0,
        }
    },
    template:
        `
        <section class="manager-container">
            <div class="input-container">
                <p>ModelId</p>
                <input class="inputfield" type="number" v-model="modelid"/>
                <p>JobId</p>
                <input class="inputfield" type="number" v-model="jobid"/>
                <p>Date</p>
                <input class="inputfield" type="date" v-model="date"/>
                <p>Text</p>
                <input class="inputfield" type="text" v-model="text"/>
                <p>Amount</p>
                <input class="inputfield" type="number" v-model="amount"/>
            </div>
            <div class="form-container">
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <button class="button" v-on:click="post">Add Expense</button>
            </div>
        </section>
        `
    ,
    methods: {
        post: function (event) {
            axios
                .post('https://localhost:44368/api/Expenses', {
                    modelId: Number(this.modelid),
                    jobId: Number(this.jobid),
                    date: this.date,
                    text: this.text,
                    amount: Number(this.amount),
                }).then((response) => {
                    console.log(response);
                }, (error) => {
                    console.log(error);
                });
        },
        deletejob: function (event) {

            url = 'https://localhost:44368/api/Jobs/' + this.jobid + '/model/' + this.modelid

            axios
                .delete(url).then((response) => {
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
            oldpassword: '',
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
                    axios.defaults.headers.common['Authorization'] = 'Bearer '.concat(response.data.jwt.toString());
                    alert("You are logged in!")
                    console.log(response);
                }, (error) => {
                        loggedin = 1;
                    console.log(error);
                });
        }
    }

})
