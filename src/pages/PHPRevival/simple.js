// file simpleajax.js
var xhr = createRequest();
function getData(dataSource, divID, aYear, aPop, aMil, aEco, aTech, aCivpoints, aCivpointpop, aCivpointmil, aCivpointeco, aCivpointtech, aTechstate, aEvent)
{
	if (xhr)
	{
		getData('focus.php', 'targetDiv', year.value, pop.value, mil.value, eco.value, tech.value, civpoints.value, civpointpop.value, civpointmil.value, civpointeco.value, civpointtech.value, techstate.value), 1000;
	    
	    var place = document.getElementById(divID);
	    var url = dataSource+"?year="+aYear+"?pop="+aPop+"?mil="+aMil+"?eco="+aEco
	    +"?tech="+aTech+"?civpoints="+aCivpoints+"?civpointpop="+aCivpointpop
	    +"?civpointmil="+aCivpointmil+"?civpointeco="+aCivpointeco
	    +"?civpointtech="+aCivpointtech+"?techstate="+aTechstate+"?event="+aEvent;
	    xhr.open("GET", url, true);
		xhr.onreadystatechange = function ()
		{
		    alert(xhr.readyState);
			if (xhr.readyState == 4 && xhr.status == 200)
			{
				place.innerHTML = xhr.responseText;
		    } // end if
	    } // end anonymous call-back function
	    xhr.send(null);
	} // end if
} // end function getData()
