<?php
namespace App\Controller;

use App\Util\BaseFactory;
use App\Util\RequestUtil;
use App\Util\ResponseFectory;
use Doctrine\Common\Persistence\ObjectRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

abstract class  BaseController extends AbstractController 
{
 
    /**
     * 
     * @param ObjectRepository $repository
     */
    protected $repository;
    /**
     * 
     * @param EntityManagerInterface $repository
     */
    protected $entityManager;
    /**
     * 
     * @param BaseFactory $repository
     */
    protected $factory;
      /**
     * 
     * @param RequestUtil $repository
     */
    protected $requestUtil;
    public function __construct(
                        ObjectRepository $repository,
                        EntityManagerInterface $entityManager,
                        BaseFactory $factory,
                        RequestUtil $requestUtil
                        )
    {
        $this->repository = $repository;
        $this->entityManager = $entityManager;
        $this->factory = $factory;
        $this->requestUtil = $requestUtil;
    }

    public function findAll(Request $req)
    {    
        $ordenacao = $this->requestUtil->ordenacaoRequisicao($req);
        $filtro = $this->requestUtil-> filtroRequisicao($req);
        [$pagina, $itensPagina] = $this->requestUtil->paginaEItens($req);

        $listEntity = $this->repository -> findBy(
            $filtro, 
            $ordenacao,
            $itensPagina,
            ($itensPagina * ($pagina -1))
            );
        $fac = new ResponseFectory(true, $listEntity,Response::HTTP_OK, $pagina, $itensPagina); 
        return $fac->getResponse();
    }

    public function getById(int $id)
    {
        $entity = $this -> returnEntity($id);
        $codigoResp = is_null($entity) ?  Response::HTTP_NO_CONTENT : 200; 
        $fac = new ResponseFectory(true, $entity, $codigoResp);
        return $fac->getResponse();
    }

    public function delete(int $id)
    {
        $entidade = $this->repository->find($id);
        $this->entityManager->remove($entidade);
        $this->entityManager->flush();
        return new Response('', Response::HTTP_NO_CONTENT);
    }

    public function save(Request $request)
    {
        $dados = $request -> getContent();
        $entidade = null;
        $entidade = $this->factory -> newEntity($dados, $entidade);
        $this->entityManager -> persist($entidade);
        $this->entityManager -> flush();
        return new JsonResponse($entidade);
    }

    public function alter(Request $req)
    {
        $id = $req -> get('id');
        $corpo = $req -> getContent();
    
        $entity = $this -> returnEntity($id);
        if (is_null($entity))
            return new Response('', Response::HTTP_NOT_FOUND);
            
        $entity = $this ->factory -> newEntity($corpo, $entity);
        $this -> entityManager -> flush();
        return new JsonResponse($entity);
     }
  public function retornaMedico($id)
  {
    $medico = $this->repository->find($id);
    return $medico;
  }



    private function returnEntity($id)
    {
      $entity = $this->repository->find($id);
      return $entity;
    }

  
}
?>