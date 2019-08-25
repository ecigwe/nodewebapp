const express = require('express');

const bookRouter = express.Router();

function router(nav){
    let books = [
        { 
          title: 'good book', 
          genre: 'djdjdj', 
          author: 'jehdhdh',
          read: false 
        },
        { 
          title: 'good book', 
          genre: 'djdjdj', 
          author: 'jehdhdh',
          read: false 
        },
        { 
          title: 'i love book', 
          genre: 'science fiction', 
          author: 'emma',
          read: false 
        },
        { 
          title: 'good book', 
          genre: 'djdjdj', 
          author: 'jehdhdh',
          read: false 
        },
      ];
        
        
      bookRouter.route('/')
        .get((req, res) => {
          res.render(
            'bookListView',
            {
              nav,
              title: 'My Library',
              books
            }
          );
        });
        
      bookRouter.route('/:id')
        .get((req, res) => {
          const { id } = req.params;
          res.render(
            'bookView',
            {
              nav,
              title: 'My Library',
              book: books[id]
            }
          );
        });

        return bookRouter;
      

}


module.exports = router;
  