<?php
include_once 'bd.php';
include_once '../main.php';

if (isset($_GET["w1"]) && isset($_GET["w2"])) {
    // asignar w1 y w2 a dos variables
    $phpVar1 = $_GET["w1"];
    $phpVar2 = $_GET["w2"];
 
    // mostrar $phpVar1 y $phpVar2
    echo "<p>Parameters: " . $phpVar1 . " " . $phpVar1 . "</p>";
} 

?>