const express = require("express");

const booksRouter1 = express.Router();

function router(nav){

var books=[
    { title:'Infinite Jest',
      author:' David Foster Wallace',
      genre:'Science Fiction',
      desc:"nfinite Jest is unique; it was bred in the optimism and new frontiersmanship of the dot-com 1990s but was simultaneously an early omen of where we are today. It looks into our present beyond what were only horizons when it was written: the tensions of a global economy, the opiate of on-demand entertainment, the near-impossible pursuit of greatness in a winner-take-all society.",
      img:"infj.jpg"   
    },
    { title:'Never Let Me Go',
    author:'Kazuo Ishiguro',
    genre:'Fiction',
    desc:'Never Let Me Go is asubtle sci-fi story about youth, freedom, and a lot of other good stuff — too much more about the plot might take something away from the magical, transformative experience of reading it.",
    img:"nlg.jpg"   
    },
    { title:'The Phantom Tollbooth',
    author:'Norton Juster',
    genre:'Fantasy',
    desc:'The Phantom Tollbooth is the story of Milo, a very bored boy who comes home one day to find a magical tollbooth in his room. When Milo drives his car through the tollbooth gate, he finds himself in the Lands Beyond, a country inhabited by living language in the forms of animals, magicians, royalty, mountains, seas, and cities.',
    img:"phn.jpg"   
    },
    { title:'Things Fall Apart',
    author:'Chinua Achebe',
    genre:"Historical Fiction",
    desc:"Drawing on the history and customs passed down to him, Achebe tells the tale Okonkwo, a strong-willed member of a late-19th-century Nigerian village. As we follow Okonkwo's story, we get a glimpse of the intricacies of village life and the complex social structures that come into play.",
    img:"chin.jpg"  
    },
    { title:'The Wind-Up Bird Chronicle',
    author:'Haruki Murakami',
    genre:' Science Fiction',
    desc:"The Wind-Up Bird Chronicle is pure Murakami — a vast, enchanting mystery filled with dreamlike surrealism. Considered by many to be his best work, the novel tackles themes as varied as the nature of consciousness, romantic disappointment, and the lingering wounds of World War II.",
    img:"haru.jpg"  
    },
    { title:'To Kill a Mockingbird',
    author:'Harper Lee',
    genre:'Thriller',
    desc:" The protagonist is a young girl named Scout and except for her father, all the main characters in the book are marginalized by the power structure of their town.",
    img:"mock.jpg"  
    },
    { title:'Giovanni's Room',
    author:' James Baldwin',
    genre:'Psychological Fiction',
    desc:"Giovanni's Room is a love story between two men. It seems impossible to think such a thing could be published pre-Stonewall, but such is the genius of Baldwin and the way he captures the complexities of desire, love, and the tragic cost that comes from not following your heart.",
    img:"giav.jpg"  
    }
    ]  
    
    //Method 2 
    booksRouter1.get('/',function(req,res){
        res.render("book",
    {
        // nav:[{link:'/books',name:'Books'},
        // {link:'/authors',name:'Author'}],
        nav,
        title:'Library Management',
        books    // pass books array along with the response(route)
    });
    });
    // for book single page
    booksRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('books',
        {
        // nav:[{link:'/books',name:'Books'},
        // {link:'/authors',name:'Author'}],
        nav,
        title:'Library Management',
        book:books[id]
        });
    });
    return booksRouter1;
}
    module.exports=router;