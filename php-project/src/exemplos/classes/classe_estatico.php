<?php
//  class Documento{
//      private $numero;
     

//      public function getNumero()
//      {
//           return $this->numero;
//      }
//      public function setNumero($numero)
//      {
//           $result = Documento::validarCpf($numero);
//           if ($result === false)
//                $this->numero = $numero; 
//      }
//      public static function validarCpf($cpf): bool{

//           if ($cpf == '123456') 
//                return true;
//           else
//                return false;
//      }
//  }
//  $cpf = new Documento();
//  $cpf->setNumero('123456');
//  $cpf->setNumero('1234567');

//  var_dump($cpf->getNumero())
class Endereco {
     private $logradouro; 
     private $cidade; 
     private $numero; 

     /**
      * Get the value of numero
      */ 
     public function getNumero()
     {
          return $this->numero;
     }

     /**
      * Set the value of numero
      *
      * @return  self
      */ 
     public function setNumero($numero)
     {
          $this->numero = $numero;
     }

     /**
      * Get the value of cidade
      */ 
     public function getCidade()
     {
          return $this->cidade;
     }

     /**
      * Set the value of cidade
      *
      * @return  self
      */ 
     public function setCidade($cidade)
     {
          $this->cidade = $cidade;
     }

     /**
      * Get the value of logradouro
      */ 
     public function getLogradouro()
     {
          return $this->logradouro;
     }

     /**
      * Set the value of logradouro
      *
      * @return  self
      */ 
     public function setLogradouro($logradouro)
     {
          $this->logradouro = $logradouro;
     }
     public function __construct($a, $b, $c){
          $this->logradouro = $a;
          $this->cidade = $b;
          $this->numero = $c;
     }
}
$end = new Endereco('rua a', 'Rio', '500');
var_dump($end);
?>