<?php 
abstract class Animal  {
    public function andar(){
        return "anda";
    }
    public function falar(){
        return "fala";
    }
}

class Passaro extends Animal{
    public function andar(){
        echo "voa e ". parent::andar();
    }
}

$obj = new Passaro();
$obj -> andar();
?>