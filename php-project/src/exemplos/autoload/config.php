<?php
spl_autoload_register(function($nomeClasse){
    if(file_exists($nomeClasse.".php"))
        require_once($nomeClasse.".php");
})

?>