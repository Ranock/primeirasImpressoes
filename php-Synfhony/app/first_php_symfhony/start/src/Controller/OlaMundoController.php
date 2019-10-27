<?php


namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class OlaMundoController
{
    
    /**
     * @Route("/ola")
     */
    public function OlaMundoAction(Request $req)
    {
        echo 'Olá';
        exit;
    }
}

?>
