const categories = [
    {
      id: 1,
      name: "Comédie",
    },
    {
      id: 2,
      name: "Science-Fiction",
    },
  ];
  

  import type { RequestHandler } from "express";

  const  categoriesLsit : RequestHandler = (req, resp) => {
    resp.json(categories);
  }

  const categoriesId : RequestHandler = (req, resp) => {

    const idNumber =  parseInt(req.params.id);
    const Parseid = categories.find((item)=> item.id ===  idNumber);

    if(Parseid != null )
    {
        resp.json(Parseid);
    }else{
        resp.sendStatus(400);
    }
  }

  export default { categoriesLsit, categoriesId };