/**
 * www.jsformvalidator.com
 *
**/

function JSFV_validateRequired(value)
{
	return (value.length > 0); 
}

function JSFV_validateRequired2()
{
	document.getElementByID('required').style.border="8px";
	alert('value');
}
function JSFV_validateEmail(value)
{
	var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i; 
	return regex.test(value); 
}

function JSFV_validateRange(value, min, max)
{
	if (max != null && min != null)
		return value >= min && value <= max; 
		
	if (max != null && min == null)
		return value <= max; 
		
	if (max == null && min != null)
		return value >= min; 
		
	return true; 
}

function JSFV_validateAlpha(value)
{
	var regex = /^([a-zA-Z]+)$/; 
	return regex.test(value); 
}

function JSFV_validateNumeric(value)
{
	var regex = /^([0-9]+)$/; 
	return regex.test(value); 
}

function JSFV_validateAlphanumeric(value)
{
	var regex = /^([0-9a-zA-Z]+)$/; 
	return regex.test(value); 
}

function JSFV_validateDate(value)
{
	var regex = /^([0-9]{1,2})(\/|\-)([0-9]{1,2})(\/|\-)([0-9]{2,4})$/; 
	return regex.test(value); 
}

function validateForm(form)
{
	var elements = form.elements; 
	var mapper = {
		"JSFV-required" : JSFV_validateRequired,
		"JSFV-email" : JSFV_validateEmail, 
		"JSFV-date" : JSFV_validateDate, 
		"JSFV-alpha" : JSFV_validateAlpha, 
		"JSFV-numeric" : JSFV_validateNumeric, 
		"JSFV-alphanumeric" : JSFV_validateAlphanumeric
	}; 
	
	for (var c = 0; c < elements.length; c++)
	{
		var elem = elements[c]; 
		var value = elem.value; 
		var classes = elem.className.split(" "); 
		
		for (var i = 0; i < classes.length; i++)
		{	
			for (var a in mapper)
			{
				if (classes[i] == a)
				{
					if (!(mapper[a](elem.value)))
					{
						return false;
					}	 
				}
			}
		}
	}

	return true; 
}

function jsfvRealtime(elem)
{
		
	var mapper = {
		"JSFV-required" : JSFV_validateRequired,
		"JSFV-email" : JSFV_validateEmail, 
		"JSFV-date" : JSFV_validateDate, 
		"JSFV-alpha" : JSFV_validateAlpha, 
		"JSFV-numeric" : JSFV_validateNumeric, 
		"JSFV-alphanumeric" : JSFV_validateAlphanumeric
	}; 
	

		var value = elem.value; 
		var classes = elem.className.split(" "); 
		
		for (var i = 0; i < classes.length; i++)
		{	
			for (var a in mapper)
			{
				if (classes[i] == a)
				{
					if (!(mapper[a](elem.value)))
					{
						elem.style.backgroundColor="#FD9B9D";
					}
					else
					{
						elem.style.backgroundColor="#FFFFFF";
					}	 
				}
			}
		}

	return true; 
}
