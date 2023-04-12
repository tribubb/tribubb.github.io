<?php
	session_start();
  
  $civpointtech = $_SESSION["civpointtech"];
  $civpoints = $_SESSION["civpoints"];
  if($civpoints >= 1){
  $civpoints--;
  $civpointtech++;
  }
	$_SESSION["civpointtech"] = $civpointtech;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
