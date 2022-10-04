<?php
	session_start();
  
  $civpointeco = $_SESSION["civpointeco"];
  $civpoints = $_SESSION["civpoints"];
  if($civpoints >= 1){
  $civpoints--;
  $civpointeco++;
  }
	$_SESSION["civpointeco"] = $civpointeco;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
