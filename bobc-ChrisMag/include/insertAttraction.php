<?php
include("dbconn.php");

function post($key) {
    if (isset($_POST[$key]))
        return $_POST[$key];
    return false;
}

$name = $_GET['name'];
$category = $_GET['category'];
$stars = $_GET['rating'];
$price = $_GET['price'];
$entered_by = $_GET['entered_by'];
$url = $_GET['url'];
$phone = $_GET['phone'];
$address = $_GET['address'];
$comment = $_GET['comment'];

$dbc = connect_to_db("csci2254");
$query = "INSERT INTO bestofbc (name, category, stars, price_range, entered_by, url, phone, address, comment) 
	VALUES ('$name', '$category', '$stars', '$price', '$entered_by', '$url', '$phone', '$address', '$comment')";
$result = perform_query( $dbc, $query );

$resp = new stdClass();
$resp->success = false;
if($result) {
    $resp->success = true;
}

//print json_encode($resp);


header("Location: http://cscilab.bc.edu/~magnemi/bobc/bobc-ChrisMag/bobc.html");
?>