<?php 

$user="root";
$password="";
$bd="marcador";

$mysqli = new mysqli("127.0.0.1:3307", "root", "", "marcador");

if($mysqli->connect_errno){

    echo'<script>alert("conexion exitosa");</script>';
}
?>