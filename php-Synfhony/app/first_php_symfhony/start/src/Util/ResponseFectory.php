<?php
namespace App\Util;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class  ResponseFectory 
    {   
        /**
         *
         * @var bool
         */        
        private $sucesso;
        /**
         *
         * @var int 
         */
        private $paginaAtual;
        /**
         *
         * @var int
         */
        private $itensPagina;
        /**
         *
         * @var [type]
         */
        private $conteudoResposta;

        /**
         *
         * @var int
         */
        private $statusResposta;

        public function __construct(
                            bool $sucesso,
                            $conteudoResposta,
                            int $statusResposta=Response::HTTP_OK,
                            int $paginaAtual = null,
                            int $itensPagina = null

        )
        {
            $this->sucesso          = $sucesso;
            $this->paginaAtual      = $paginaAtual;
            $this->itensPagina      = $itensPagina;
            $this->conteudoResposta = $conteudoResposta;
            $this->statusResposta = $statusResposta ;
        }

        public function getResponse():JsonResponse 
        {
            $conteudoResposta=[
                'sucesso'          => $this->sucesso,
                'pagina'           => $this->paginaAtual,
                'itensPagina'      => $this->itensPagina,
                'conteudoResposta' => $this->conteudoResposta
            ];
            if (is_null($this->itensPagina))
                unset($conteudoResposta['itensPagina']);
            if (is_null($this->paginaAtual))
                unset($conteudoResposta['pagina']);
            return new JsonResponse($conteudoResposta, $this->statusResposta);
        }
    }
?>