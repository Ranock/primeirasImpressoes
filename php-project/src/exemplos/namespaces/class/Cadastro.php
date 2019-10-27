<?php 
 class Cadastro{
     private $nome;
     private $email;
     private $senha;

     /**
      * Get the value of email
      */ 
     public function getEmail()
     {
          return $this->email;
     }

     /**
      * Set the value of email
      *
      * @return  self
      */ 
     public function setEmail($email)
     {
          $this->email = $email;

          return $this;
     }

     /**
      * Get the value of senha
      */ 
     public function getSenha()
     {
          return $this->senha;
     }

     /**
      * Set the value of senha
      *
      * @return  self
      */ 
     public function setSenha($senha)
     {
          $this->senha = $senha;

          return $this;
     }

     /**
      * Get the value of nome
      */ 
     public function getNome()
     {
          return $this->nome;
     }

     /**
      * Set the value of nome
      *
      * @return  self
      */ 
     public function setNome($nome)
     {
          $this->nome = $nome;

          return $this;
     }
     public function __toString(){
        return json_encode(array(
            "nome" => $this -> getNome(),
            "senha" => $this -> getSenha(),
            "email" => $this -> getEmail()
        ));
     }
 }
?>