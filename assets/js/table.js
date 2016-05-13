	//google.load("visualization", "1", {packages:["corechart"]});
	(function(){
		google.charts.load('current', {'packages':['table']});
      google.charts.setOnLoadCallback(drawTable);

      function drawTable() {
        var data = new google.visualization.DataTable();
		data.addColumn('number', 'Year');
        data.addColumn('string', 'State');
        data.addColumn('number', 'Inflow');
        data.addColumn('number', 'Outflow');
        data.addRows([
          [2007,'Dallas', 200, 500],
         
        ]);
		}
        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
	})();
	