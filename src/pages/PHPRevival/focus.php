<?php
	session_start();
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	if (isset($_GET["year"])) 
	{
  		$year = $_GET["year"];
		$year++;
  		$_GET["year"] = $year;
	} 
	else 
	{
	}

	if (isset($_GET["pop"])) 
	{
  		$pop = $_GET["pop"];
		if(isset($_GET["civpointpop"]))
		{
			$civpointpop = $_GET["civpointpop"];
			$pop = $pop + rand(3,15+($civpointpop*2)) + ($pop / (750-($civpointpop*15)));
		}
		$pop = floor($pop);
		$_GET["pop"] = $pop;
	} 
	else 
	{
	}

	if (isset($_GET["mil"])) 
	{
  		$mil = $_GET["mil"];
		if(isset($_GET["civpointmil"]))
		{
			$civpointmil = $_GET["civpointmil"];
			$mil = $mil + rand(0,1+($civpointmil/2)) + ($pop / (30000-($civpointmil*4000)));
		}
		$mil = floor($mil);
		$_GET["mil"] = $mil;
	} 
	else 
	{
	}

	if (isset($_GET["eco"])) 
	{
  		$eco = $_GET["eco"];
		if(isset($_GET["civpointeco"]))
		{
			$civpointeco = $_GET["civpointeco"];
			$tech = $_GET["tech"];
			$eco = $eco + rand(0,(4+($civpointeco/2))) - ($pop / (5000+($tech*10)));
		}
		$eco = floor($eco);
		if ($eco < 2){
		$eco = 2;
		}
		$_GET["eco"] = $eco;
	} 
	else 
	{
	}

	if (isset($_GET["tech"])) 
	{
  		$tech = $_GET["tech"];
		if(isset($_GET["civpointtech"]))
		{
			$civpointtech = $_GET["civpointtech"];
			$tech = $tech + (sqrt($eco/(10-$civpointtech)));
		}
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
	} 
	else 
	{
	}
	
	$_SESSION["pop"] = $pop;

        header("location:index.php");
?>
