<?php
// cookie.php    chris magnemi
include("dbconn.php");


if(isset($_COOKIE['idc'])){
	$vars = $_COOKIE['idc'];

	//print_r($_COOKIE);
$dbc = connect_to_db("csci2254");
$query = "SELECT * from bestofbc WHERE attraction_id NOT IN($vars);";
$result = perform_query($dbc, $query);
}

if ( mysqli_num_rows( $result ) == 0 ) {
		die("bad query $query");
	}
	$data = array();	// put the rows as objects in an array
	while ( $obj = mysqli_fetch_object( $result ) ) {
		$data[] = $obj;
	}
	echo json_encode($data);
	disconnect_from_db($dbc, $result);



?>