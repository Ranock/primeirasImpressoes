<?php 

interface Veiculo{
    public function acelerar($velocidade);
    public function frear($velocidade);
    public function trocarMarcha($marcha);
}

class Civic implements Veiculo{

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
$obj -> acelerar('50') ;
?>