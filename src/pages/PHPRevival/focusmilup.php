<?php
	session_start();
  
  $civpointmil = $_SESSION["civpointmil"];
  $civpoints = $_SESSION["civpoints"];
  if($civpoints >= 1){
  $civpoints--;
  $civpointmil++;
  }
	$_SESSION["civpointmil"] = $civpointmil;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
