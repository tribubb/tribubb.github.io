<?php
	session_start();
  
  $civpointpop = $_SESSION["civpointpop"];
  $civpoints = $_SESSION["civpoints"];
  if($civpoints >= 1){
  $civpoints--;
  $civpointpop++;
  }
	$_SESSION["civpointpop"] = $civpointpop;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
