<?php

    class Carro {
        private $modelo;
        private $motor;
        private $ano;

        public function getModelo(){
            return $this -> modelo;
        }
        
        public function setModelo($modelo){
            $this -> modelo = $modelo;
        }
        public function getMotor(){
            return $this -> motor;
        }
        
        public function setMotor($motor){
            $this -> motor = $motor;
        }
        public function getAno(){
            return $this -> ano;
        }
        
        public function setAno($ano){
            $this -> ano = $ano;
        }

        public function exibir(){
            return array(
                "modelo" => $this->getModelo(),
                "motor" => $this->getMotor(),
                "ano" => $this-> getAno()            
            );
        }
    }

    $gol = new Carro();
    $gol ->setAno(2018);
    $gol ->setModelo('Gol');
    $gol ->setMotor('V8');
    print_r($gol->exibir());

?>