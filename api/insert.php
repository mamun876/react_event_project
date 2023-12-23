<?php
require 'db_connection.php';

$abc = json_decode(file_get_contents("php://input"));
if(isset( $abc->data->name)&&!empty( $abc->data->name) && isset( $abc->data->email) && !empty( $abc->data->email)){
    $name = $abc->data->name;
    $email = $abc->data->email;

$sql = "INSERT INTO user VALUES (NULL, '$name', '$email', NOW())";

if (mysqli_query($db_conn, $sql)) {
    $affectedRows = mysqli_affected_rows($db_conn);
   
    if ($affectedRows > 0) {
        echo json_encode(["msg"=>"Successfully Inserted"]);
       
    } 
} else {
    echo json_encode(["msg"=>"Problem"]);
}
} else {
    echo json_encode(["msg"=>"Empty not allowed"]);
}

$db_conn->close();

?>

