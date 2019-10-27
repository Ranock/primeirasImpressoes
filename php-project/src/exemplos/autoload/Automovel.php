<?php 
require_once("config.php");
interface Veiculo{
    public function acelerar($velocidade);
    public function frear($velocidade);
    public function trocarMarcha($marcha);
}

abstract class Automovel  implements Veiculo{

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

?>