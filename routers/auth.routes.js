const express = require("express");

const authorRouter1 = express.Router();

function router(nav){

var authors=[
    { 
        name:'Roberto Bolano',
        lang:'English',
        desc:"Roberto Bolaño Ávalos was a Chilean novelist, short-story writer, poet and essayist",
        book:"2666",
        img:"2666.jpg"   
    },
    { 
        name:'Edward Abbey',
        lang:'English',
        desc:"Edward Paul Abbey was an American author and essayist noted for his advocacy of environmental issues, criticism of public land policies, and anarchist political views.",
        book:"Desert Solitaire",
        img:"dessol.jpg"   
      },
    { 
        name:'James Baldwin',
        lang:'English',
        desc:"James Arthur Baldwin was an American novelist, playwright, essayist, poet, and activist",
        book:"Giovanni's Room",
        img:"giav.jpg"  
      },
      { 
        name:'J. M. Coetzee',
        lang:'English',
        desc:"John Maxwell Coetzee is a South African-born novelist, essayist, linguist, translator and recipient of the 2003 Nobel Prize in Literature",
        book:"Disgrace",
        img:"disg.jpg"   
      },
      { 
        name:"Marilynne Robinson",
        lang:'English',
        desc:"Marilynne Summers Robinson is an American novelist and essayist",
        book:"Gilead",
        img:"gil.jpg"   
      }
      
    ]  
    
 
    authorRouter1.get('/',function(req,res){
        res.render("author",
    {
        
        nav,
        title:'Library Management',
        authors    
    });
    });
   
    authorRouter1.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('authors',
        {
        
        nav,
        title:'Library Management',
        author:authors[id]
        });
    });
    return authorRouter1;
}
    module.exports=router;