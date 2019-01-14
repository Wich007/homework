'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'0.0.0.0',
    port:process.env.PORT||8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

server.route({
    method:'GET',
    path:'/user/{name}/{age}/{email}',
    handler:function(request,h) {

        // return  "name : " + encodeURIComponent(request.params.name) + "<br>" +
        //         "age : " + encodeURIComponent(request.params.age) + "<br>" +
        //        "email : " + encodeURIComponent(request.params.email) ;

        var object = {name: encodeURIComponent(request.params.name),
            age : encodeURIComponent(request.params.age),
            email: encodeURIComponent(request.params.email) 
          };

          return object;
    }
});


let user = {
    "name": "guutong",
    "age": "99",
    "email": "tong@odds.team"
   };



// Start the server
const start =  async function() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
