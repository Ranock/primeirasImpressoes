<?php


namespace App\Controller;

use App\Entity\Medico;
use App\Repository\MedicosRepository;
use App\Util\MedicoFactory;
use App\Util\RequestUtil;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\Routing\Annotation\Route;

class MedicoController extends BaseController {

    public function __construct(
                        EntityManagerInterface $entityManager,
                        MedicoFactory $factory,
                        MedicosRepository $medicoRepository,
                        RequestUtil $reqUtil
                    )
    {
        parent::__construct($medicoRepository, $entityManager, $factory, $reqUtil);

    }

  /**
   * @Route("/especialidades/{espId}/medicos", methods="GET")
   */
  public function findByEspecialidade(Request $req, int $espId) : Response
  {
      $medicos = $this->repository -> findBy(['especialidade' => $espId]);
      return new JsonResponse($medicos);
  }
}
?>