var PROTO_PATH = __dirname + '/proto/unit_manager_unit.proto';

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
var unit_manager_unit_proto = grpc.loadPackageDefinition(packageDefinition).unit_management.v1;


function units(call, callback) {

  callback(null, {total_count:1 , units:[
    {
        id:1,
        title:'test',
        icon:'icon',
        plate_number:'654654654',
        connection_state : 0,
        sim_number : '6465465' ,
        is_archive:false,
        imei : '56461321687',
        last_point_time : 1708196380,
        created_at : 6859512
    }
  ] });
}





function main() {
  
  var server = new grpc.Server();

  
  
  server.addService(unit_manager_unit_proto.UnitManagementService.service, {
    units:units,
    
  });
  server.bindAsync('0.0.0.0:9090', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
  
  
  
 
}

main();
