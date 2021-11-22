let app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        pageTitle: 'Osztálynapló',
        newStudent: {
            name: '',
            gender: ''
        },
        studentStyle: {
            color: 'white',
            backgroundColor: 'pink'
        },
        studentCollection: [
            {
                name: 'Kata',
                gender: 'lány'
            },
            {
                name: 'Anna',
                gender: 'lány'
            },
            {
                name: 'Panka',
                gender: 'lány'
            },
            {
                name: 'Máté',
                gender: 'fiú'
            },
            {
                name: 'Tomi',
                gender: 'fiú'
            },
            {
                name: 'Andris',
                gender: 'fiú'
            },
            {
                name: 'Csaba',
                gender: 'fiú'
            },
            {
                name: 'Bence',
                gender: 'fiú'
            }
        ]
    },
    methods:{
        AddNewStudent: function(){
            if(!this.newStudent.gender || !this.newStudent.name){
                return;
            }

            this.studentCollection.push(this.newStudent);
            this.newStudent = {};
        }
    }
});
