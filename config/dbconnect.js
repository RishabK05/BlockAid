var mongoose= require('mongoose');

mongoose.connect('mongodb+srv://id:<password>@cluster0.caawk.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true,  useUnifiedTopology: true  });
var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error'));
db.once('open',function callback() {
    console.log('database connection estabilished');
});
exports.db=db;
