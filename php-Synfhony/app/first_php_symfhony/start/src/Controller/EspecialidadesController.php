<?php

namespace App\Controller;

use App\Entity\Especialidade;
use App\Repository\EspecialidadeRepository;
use App\Util\EspecialidadeFactory;
use App\Util\RequestUtil;
use Doctrine\ORM\EntityManagerInterface;

class EspecialidadesController extends BaseController
{

    public function __construct(
                                    EntityManagerInterface $enityManager, 
                                    EspecialidadeRepository $especialidadeRepo,
                                    EspecialidadeFactory $espFactory,
                                    RequestUtil $reqUtil
                                )
    {
        parent::__construct($especialidadeRepo, $enityManager, $espFactory, $reqUtil);
    }
   
}
