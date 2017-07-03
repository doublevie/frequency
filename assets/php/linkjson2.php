<?php
$data = array();



for ($i=0; $i < 1500; $i++) {
  $data['message'][] = "frequency ".$i;
}


$json = json_encode($data);
header("Content-type: application/json");
exit( $json);
 ?>
