const express=require('express');

const app=new express();


app.set('view engine','ejs');
app.set("views","./src/views");
const nav=[
    {link:'/home',name:'HOME',disicon:'fa fa-home'},
    {link:'/book',name:'BOOK',disicon:'fa fa-book'},
    {link:'/author',name:'AUTHOR',disicon:'fa fa-users'},
    {link:'/addbook',name:'ADD BOOK',disicon:'fa fa-envelope'}
];
app.use(express.static('./public'));


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)

app.use('/book',booksRouter); 
app.use('/author',authorRouter);



const details=[{link:'/book',name:'Book',img:'book.jpg',desc:'This section deals with different kids of books like Kids book , Biographies ,Fiction ,Non-Fiction etc. '},
{link:'/author',name:'Author',img:'author.jpg',desc:'Author section list out books based on its authors.different books of same authors can be found here.'},
{link:'/signup',name:'Registration',img:'regislerlog.jpg',desc:'Register with username and password to access all the features.'}
];


app.get('/',function(req,res){
    res.render('index',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}],
        title:'Library Management'
    });
});


app.get('/login',function(req,res){
    res.render('login',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}
    ],
        title:'Library Management'
    });
});
app.get('/signup',function(req,res){
    res.render('signup',
    {
    nav:[{link:'/login',name:'LogIn'},
       {link:'/signup',name:'SignUp'}
    ],
        title:'Library Management'
    });
});
    
app.get('/home',function(req,res){
    res.render('home',
    {
    nav,details,
        title:'Library Management'
    });
});

app.get('/addbook',function(req,res){
    res.render('addbook',
    {
    nav,
        title:'Library Management'
    });
});


    app.listen(5000);