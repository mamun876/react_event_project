<?php
require 'db_connection.php';
	$allPackage = $db->query("SELECT * FROM package");
		if(mysqli_num_rows($allPackage) > 0){
			while($row = $allPackage->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["title"] = $row['title'];
				$viewjson["sub_title"] = $row['sub_title'];
				$viewjson["price"] = $row['price'];
				$viewjson["service_include"] = $row['service_include'];
				
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"packagelist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 