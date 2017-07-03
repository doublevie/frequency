<?php
$data = array();
$data['message'] = "welcome";
$data['status'] = "200";
$json = json_encode($data);
header("Content-type: application/json");
exit( $json);
 ?>
