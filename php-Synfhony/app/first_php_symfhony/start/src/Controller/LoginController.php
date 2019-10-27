<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Firebase\JWT\JWT;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class LoginController extends AbstractController
    {

    /**
     * 
     *
     * @param UserRepository $userRepo
     */
    private $userRepo;

    /**
     * 
     *
     * @var UserPasswordEncoderInterface
     */
    private  $encoder;

    public function __construct(UserRepository $userRepo, 
                                UserPasswordEncoderInterface $encoder)
    {
        $this->userRepo = $userRepo;
        $this->encoder  = $encoder;      

    }
    /**
     * @Route("/login", name="login")
     */
    public function index(Request $req)
    {
        $dados = json_decode($req->getContent());

        if(is_null($dados) || is_null($dados->password)){
            return new JsonResponse(['Erro'=>'Envie um usuario e senha'],Response::HTTP_BAD_REQUEST);
        } 

        $user =  $this->userRepo->findOneBy(['username' => $dados->username]);
        if(!$this->encoder->isPasswordValid($user, $dados->password))
            return new JsonResponse(['Erro'=>'Envie um usuario e senha'],Response::HTTP_UNAUTHORIZED);
        $token=  JWT::encode(['username' => $user->getUsername()], 'chave');
        return new JsonResponse([
            'token'=> $token
        ]);
    }

}
