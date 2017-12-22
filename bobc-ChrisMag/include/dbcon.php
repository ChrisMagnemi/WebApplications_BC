<?php 
	include("dbconn.php");

// function disconnect_from_db( $dbc, $result ){
// 	mysqli_free_result( $result );
// 	mysqli_close( $dbc );
// }

// function perform_query( $dbc, $query ){
	
// 	//echo "My query is >$query< <br />";
// 	$result = mysqli_query($dbc, $query) or 
// 			die( "bad query".mysqli_error( $dbc ) );
// 	return $result;
// }

	$dbc = connect_to_db("csci2254");
	$query = "SELECT * FROM bestofbc";
	$result = perform_query($dbc, $query);
	if ( mysqli_num_rows( $result ) == 0 ) {
		die("bad query $query");
	}
	$country_data = array();	// put the rows as objects in an array
	while ( $obj = mysqli_fetch_object( $result ) ) {
		$country_data[] = $obj;
	}
	echo json_encode($country_data);
	disconnect_from_db($dbc, $result);

?>