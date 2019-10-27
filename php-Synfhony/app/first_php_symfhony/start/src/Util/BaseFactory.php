<?php
namespace App\Util;

interface BaseFactory{
    public function newEntity($json, $entidade);
}
?>