var score = 10;


var score =100
var CALC = {
				
	onReady: function() {
		$('focus').focus();
		$('button.reset').hide();
		$('button.calculate').click(CALC.calculate);
		$('button.reset').click(CALC.reset);
	},
	
	calculate: function(event) {
		// Get quantity
	var Day1 = $('#Day1').val();
    var Day2 = $('#Day2'). val ();
    var Day3 = $('#Day3'). val ();
	// Get price
	var Day4 = $('#Day4').val();
	
	var Day5 = $('#Day5').val();
	
	var Day6 = $('#Day6').val();
	
	var Day7 = $('#Day7').val();
    
    
 

	var totalCost =( ((Day1 * 1)+(Day2 * 1)+(Day3 * 1)+(Day4 * 1)+(Day5 * 1)+(Day6 * 1)+(Day7 * 1)) / 7 * 1 );
	totalCost=totalCost.toFixed(2);



      	
    // Set total cost
	$('#total').val(totalCost);
	
	$('button.calculate').hide();
	$('button.reset').show();
    
	
	},
    
 
	
	reset: function(event) {
		$('#Day1').val('');
		$('#Day2').val('');
		$('#Day3').val('');
		$('#Day4').val('');
		$('#Day5').val('');
		$('#Day6').val('');
		$('#Day7').val('');
        $('#total').val('');
        $('#quantity').focus();
		$('button.calculate').show();
		$('button.reset').hide();
		
	}
};


	
$(document).ready(CALC.onReady);

