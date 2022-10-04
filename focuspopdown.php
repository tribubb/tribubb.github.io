<?php
  session_start();
  
  $civpointpop = $_SESSION["civpointpop"];
  $civpoints = $_SESSION["civpoints"];
  if($civpointpop >= 1){
  $civpointpop--;
  $civpoints++;
  }
  $_SESSION["civpointpop"] = $civpointpop;
  $_SESSION["civpoints"] = $civpoints;
  
  header("location:index.php");
  
 ?>
