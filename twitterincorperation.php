<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Consuming Twitter Webserver</title>
    <script>
        window.onload = function() {
            var xhttp = XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200){
                    document.getElementById("twitter").innerHTML = xhttp.responseText;
                }
            };
            xhttp.open("GET", "http://http://1302264node.azurewebsites.net/", true);
            xhttp.send();
        }
    </script>

</head>
<body>
<header>
    <h1>Header Div</h1>
</header>
<main>
    <h2> Main content </h2>
</main>
<aside id="twitter" >

</aside>
</body>
</html>

/**
 * Created by PhpStorm.
 * User: 1302264
 * Date: 30/11/2015
 * Time: 14:56
 */