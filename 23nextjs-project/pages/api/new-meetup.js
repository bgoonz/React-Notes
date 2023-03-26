// the code in the api routes will only run on the server, never on the client side
//these functions are triggered whenever a request is sent to the route


 function handler( req, res ) {
     if ( req.method == 'POST' ) {
         const data = req.body;
         const { title, image, address, description } = data;
         //store that in a database or in a file
     }
 }


export default handler;

