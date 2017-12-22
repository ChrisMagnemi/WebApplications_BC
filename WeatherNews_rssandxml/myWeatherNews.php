<!-- myWeatherNews.php Chris Magnemi -->

<html>
<head>
    <title>My Weather & News Viewer - XML/RSS</title>
	<link rel="stylesheet" type="text/css" href="myWeatherNews.css" />	      
</head>
<body>

<?php

	$weatherlocs = array(
		"http://w1.weather.gov/xml/current_obs/KBOS.xml"=>"Boston",
		"http://w1.weather.gov/xml/current_obs/PHNL.xml"=>"Honolulu",
		"http://w1.weather.gov/xml/current_obs/KHPN.xml"=>"White Plains"
		);

	
	$newslocs = array(
		"http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"=>"NY Times", 
		"http://www.huffingtonpost.com/feeds/news.xml"=>"Huffington Post", 
		"http://nypost.com/feed/"=>"NY Post"
		);	
?>

<img id = "smileCoffee" src = "img/coffee-smil.jpg" />
<h1>The Morning Lowdown</h1>
<h3> What I want to know in the morning</h3>

<fieldset id="WeatherField">
	<legend> My Weather </legend>
	<?php
		createForm($weatherlocs, "Weather");
	?>
	<img id = "WeatherImg" src = "img/WeatherImg.jpeg" align="right" />
	<?php
		if ( isset( $_GET['Weather'] ) ) {
			handleForm( $_GET['Weather'], 'Weather');
		}
	?>
</fieldset>


<fieldset id="NewsField">
	<legend> My News </legend>
	<?php
		createForm($newslocs, "News");
	?>
	<img id = "NewsImg" src = "img/NewsImg.png" align="right"/>
	<?php
		if ( isset( $_GET['News'] ) ) {
			handleForm( $_GET['News'], 'News');
		}
	?>
</fieldset>

<a href="http://cscilab.bc.edu/~magnemi/hw11XMLRSS/myWeatherNews.php?">Reset</a>

</body>
</html>


<?php
function handleForm($feed, $menu){
	ini_set('user_agent', 'Mozilla/4.0(compatible; MSIE 6.0');
	$rss = simplexml_load_file($feed);

	if($menu == "News"){
		$items = $rss->channel->item;
		foreach($items as $item){
			echo "<div class='NewsDiv'>
				<h2>$item->title<h2>\n";
			echo '<a href="' . $item->link . '">' . $item->title . '</a><br>';
        	echo $item->description . "<br><br>\n";
        	echo "</div>";
		}
	}

	if ($menu == "Weather"){
		$file = file_get_contents($feed);
      	$xml = new SimpleXMLElement($file);
      	$location = $xml->location; 
      	$observation_time = $xml->observation_time;
      	$temp_f = $xml->temp_f;
      	$temp_c = $xml->temp_c;
      	$wind_string = $xml->wind_string;
      	$weather = $xml->weather;
      	echo $location."<br>".$observation_time."<br>";
      	echo $temp_f." F (".$temp_c." C) ".$wind_string." ".$weather;
	}
}


function createForm($farray, $menuname){
?> 
	<form method="GET">
		<?php
			 createMenu($farray, $menuname);
		 ?>
		 <input type="submit" 
		 	<?php echo "name= get ".$menuname; ?>
		 	<?php echo "value = 'Get ".$menuname."!'"; ?> >
	</form>
<?php
}

function createMenu ( $farray, $menuname){
	if ($menuname == "Weather")
		$currentFeed = isset( $_GET['Weather'] ) ? $_GET['Weather'] : "";
	if ($menuname == "News")
		$currentFeed = isset ($_GET['News'] ) ? $_GET['News'] : "";
		echo "<select name='$menuname' >";

	foreach( $farray as $f => $w ) {
		if ($currentFeed == $f) {
			echo "<option value = '$f' selected>$w</option>";
		}
		else{
			echo "<option value = '$f'>$w</option>";
		}
	}
	echo "</select>";
}
?>






