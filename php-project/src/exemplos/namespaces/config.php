<?php
    spl_autoload_register(function($className){
        $dirclass = 'class';
        //$filename = $dirclass . DIRECTORY_SEPARATOR . $className . ".php";        
        $filename = str_replace ("\\", "/", $dirclass . DIRECTORY_SEPARATOR . $className . ".php");
        if (file_exists($filename))
            require_once($filename);
    })
?>