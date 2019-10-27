<?php
namespace App\Util;

use Symfony\Component\HttpFoundation\Request;

class  RequestUtil 
    {
        private function extrairDados(Request $req){
            $lista = $req->query->all();
            $ordenacao = array_key_exists('sort',$lista) ? $lista['sort'] : null;
            unset($lista['sort']);

            $pagina = array_key_exists('page', $lista) ? $lista['page'] : 1;
            unset($lista['page']);

            $itensPagina = array_key_exists('itensPagina', $lista) ? $lista['itensPagina'] : 5;
            unset($lista['itensPagina']);

            $filtros = $lista;
            return [$ordenacao, $filtros, $pagina, $itensPagina];
        }
        public function ordenacaoRequisicao(Request $req){
            [$ordem,] = $this-> extrairDados($req);
            return $ordem;
        }
        public function filtroRequisicao(Request $req):?Array{
            [,$filtro] = $this->extrairDados($req);
            return $filtro;
        }
        public function paginaEItens(Request $req)
        {
            [,,$pagina,$itensPagina] = $this->extrairDados($req);
            return [$pagina, $itensPagina];
        }

    }
?>