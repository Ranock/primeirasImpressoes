<?php

namespace Cliente;

class Cadastro extends \Cadastro {
    public function realizaVenda(){
        echo "realizou a vendo para ". $this -> getNome();
    }
}
?>