<?php 

require_once("config.php");
class Civic extends Automovel{

    public function acelerar($velocidade){
        echo "acelerou até".$velocidade;
    }
    public function frear($velocidade){
        echo "frenou até".$velocidade;
    }
    public function trocarMarcha($marcha){
        echo "TROCOU A MARCHA: ".$velocidade;
    }

}

$obj = new Civic();
$obj -> acelerar(200);

?>