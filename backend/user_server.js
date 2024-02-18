var PROTO_PATH = __dirname + '/proto/user.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var grpcWeb = require('grpc-web');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var user_proto = grpc.loadPackageDefinition(packageDefinition).userproto;


function signIn(call, callback) {

  

  callback(null,);
}





function main() {
  
  var server = new grpc.Server();

  
  
  server.addService(user_proto.UserService.service, {
    signIn:signIn,
    
  });
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
  
  
  
 
}

main();
