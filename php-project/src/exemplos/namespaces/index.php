<?php

    use Cliente\Cadastro;

    require_once("config.php");
    $cad = new Cadastro();
    $cad -> setNome("hugo");
    $cad -> setSenha("123");
    $cad -> setEmail("hugo@hugo");
    $cad -> realizaVenda();
?>
