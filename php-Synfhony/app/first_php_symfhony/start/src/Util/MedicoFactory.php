<?php
namespace App\Util;

use App\Entity\Medico;
use App\Repository\EspecialidadeRepository ;

class MedicoFactory implements BaseFactory{

    private $especialidadeRepository;
    public function __construct(EspecialidadeRepository $repository)
    {
        $this->especialidadeRepository = $repository;
    }

    public function newEntity($medicoJson,$entidade)
    {
        
        if ($entidade = null || !isset($entidade))
            $entidade = new Medico(); 
            
        $json = json_decode($medicoJson);     
        $idEspecialidade = $json -> especialidade;
        $especialidade = $this->especialidadeRepository->find($idEspecialidade);

        $entidade -> setCrm($json -> crm);
        $entidade -> setNome($json -> nome);
        $entidade ->setEspecialidade($especialidade);

        return $entidade;
    }
}
?>