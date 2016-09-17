	function CalculateFn() {
	    var input1 = document.forms['calculatig_from']['value1'].value,
	        input2 = document.forms['calculatig_from']['value2'].value;

	    try {
	        if (input1 == null || input1 == "") throw 'input must be filled out';
	        if (input2 == null || input2 == "") throw 'input 2 must be filled out';

	        if (document.getElementById('addition').checked) {

	            document.getElementById('output').innerHTML = parseFloat(input1) + parseFloat(input2);
	            return false;
	        } else if (document.getElementById('subtraction').checked) {

	            document.getElementById('output').innerHTML = parseFloat(input1) - parseFloat(input2);
	            return false;
	        } else if (document.getElementById('multiplication').checked) {

	            document.getElementById('output').innerHTML = parseFloat(input1) * parseFloat(input2);
	            return false;
	        } else if (document.getElementById('division').checked) {

	            document.getElementById('output').innerHTML = parseFloat(input1) / parseFloat(input2);
	            return false;
	        } else if (document.getElementById('addition').checked == false || document.getElementById('subtraction').checked == false || document.getElementById('multiplication').checked == false || document.getElementById('division').checked == false)

	            throw 'please select an operation';

	    } catch (err) {

	        document.getElementById("error_holder").innerHTML = err;
	        console.log(err);

	    } finally {
	        // statementsasa
	    }

	}

	//regex ascii codes	
	$(".first-value").keypress(function(event) {

	    if (event.which == 8 || event.which == 0) {
	        return true;
	    }
	    if (event.which < 46 || event.which > 59) {
	        return false;

	    } // prevent if not number/dot

	    if (event.which == 46 && $(this).val().indexOf('.') != -1) {
	        return false;
	    } // prevent if already dot
	});

	$(".last-value").keypress(function(event) {

	    if (event.which == 8 || event.which == 0) {
	        return true;
	    }
	    if (event.which < 46 || event.which > 59) {
	        return false;

	    } // prevent if not number/dot

	    if (event.which == 46 && $(this).val().indexOf('.') != -1) {
	        return false;
	    } // prevent if already dot
	});
