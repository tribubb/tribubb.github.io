<?php
  session_start();
  
  $civpointtech = $_SESSION["civpointtech"];
  $civpoints = $_SESSION["civpoints"];
  if($civpointtech >= 1){
  $civpointtech--;
  $civpoints++;
  }
  $_SESSION["civpointtech"] = $civpointtech;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
