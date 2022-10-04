<?php
	$year = $_GET["year"];
	$pop = $_GET["pop"];
	$mil = $_GET["mil"];
	$eco = $_GET["eco"];
	$tech = $_GET["tech"];
	$civpointpop = $_GET["civpointpop"];
	$civpointmil = $_GET["civpointmil"];
	$civpointeco = $_GET["civpointeco"];
	$civpointtech = $_GET["civpointtech"];

	$year++;
	$year = floor($year);
  	$_GET["year"] = $year;
	
	$pop = $pop + rand(3,15+($civpointpop*2)) + ($pop / (750-($civpointpop*15)));
	$pop = floor($pop);
	$_GET["pop"] = $pop;
  
	$mil = $mil + rand(0,1+($civpointmil/2)) + ($pop / (30000-($civpointmil*4000)));
	$mil = floor($mil);
	$_GET["mil"] = $mil;
  
	$eco = $eco + rand(0,(4+($civpointeco/2))) - ($pop / (5000+($tech*10)));
	$eco = floor($eco);
	if ($eco < 2){
	$eco == 2;
	}
	$_GET["eco"] = $eco;
  
	$tech = $tech + (sqrt($eco/(10-$civpointtech)));
	$tech = floor($tech);
	$_GET["tech"] = $tech;

	if($tech >= 150000){
	$techstate = $_SESSION["techstate"];
	$techstate = "Futuristic Age";
	$_GET["tech"] = $techstate;
	}
	elseif($tech >= 50000){
	$techstate = $_SESSION["techstate"];
	$techstate = "Space Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 20000){
	$techstate = $_SESSION["techstate"];
	$techstate = "Modern Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 8000){
	$techstate = $_SESSION["techstate"];
	$techstate = "Industrial Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 3500){
	$techstate = $_SESSION["techstate"];
	$techstate = "Exploration Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 1500){
	$techstate = $_SESSION["techstate"];
	$techstate = "Medieval Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 700){
	$techstate = $_SESSION["techstate"];
	$techstate = "Iron Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 300){
	$techstate = $_SESSION["techstate"];
	$techstate = "Bronze Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 150){
	$techstate = $_SESSION["techstate"];
	$techstate = "Copper Age";
	$_GET["techstate"] = $techstate;
	}
	elseif($tech >= 50){
	$techstate = $_SESSION["techstate"];
	$techstate = "Neolithic Age";
	$_GET["techstate"] = $techstate;
	}
	else{
	$techstate = $_SESSION["techstate"];
	$techstate = "Prehistoric Age";
	$_GET["techstate"] = $techstate;
	}
  	
	ECHO ($pop." : ".$eco)

	//header("location:index.php");
?>
