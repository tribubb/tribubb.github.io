<?php
  session_start();
  
  $civpointmil = $_SESSION["civpointmil"];
  $civpoints = $_SESSION["civpoints"];
  if($civpointmil >= 1){
  $civpointmil--;
  $civpoints++;
  }
  $_SESSION["civpointmil"] = $civpointmil;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
