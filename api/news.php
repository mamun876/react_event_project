<?php
require 'db_connection.php';
	$allNews = $db->query("SELECT * FROM news");
		if(mysqli_num_rows($allNews) > 0){
			while($row = $allNews->fetch_assoc()){
				$viewjson["id"] = $row['id'];
				$viewjson["title"] = $row['title'];
				$viewjson["date_create"] = $row['date_create'];
				$viewjson["img"] = $row['img'];
				$viewjson["category"] = $row['category'];
				$json_array[] = $viewjson;
			}
			echo json_encode(["success"=>true,"newslist"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?> 