<?php
namespace App\Util;

use App\Entity\Especialidade;

class  EspecialidadeFactory implements BaseFactory
    {
        public function newEntity($json, $entidade)
        {
            if ($entidade == null || !isset($entidade))
                $entidade = new Especialidade(); 
            $especialidade = json_decode($json);
            $entidade->setDescricao($especialidade->descricao);
            return $entidade;
        }
    }
?>