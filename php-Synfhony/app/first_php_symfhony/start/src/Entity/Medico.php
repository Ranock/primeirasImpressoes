<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
use JsonSerializable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MedicosRepository")
 */
class Medico implements \JsonSerializable {
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
    * @ORM\Column(type="integer")
    */
    private $crm;
    /**
    * @ORM\Column(type="string")
    */
    private $nome;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Especialidade")
     * @ORM\JoinColumn(nullable=false)
     */
    private $especialidade;

    public function getEspecialidade(): ?Especialidade
    {
        return $this->especialidade;
    }

    public function setEspecialidade(?Especialidade $especialidade): self
    {
        $this->especialidade = $especialidade;

        return $this;
    }

    /**
     * Get the value of nome
     */ 
    public function getNome()
    {
        return $this->nome;
    }

    /**
     * Set the value of nome
     *
     * @return  self
     */ 
    public function setNome($nome) : ?Medico
    {
        $this->nome = $nome;

        return $this;
    }

    /**
     * Get the value of crm
     */ 
    public function getCrm()
    {
        return $this->crm;
    }

    /**
     * Set the value of crm
     *
     * @return  self
     */ 
    public function setCrm($crm) : ?Medico
    {
        $this->crm = $crm;

        return $this;
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id) : ?Medico
    {
        $this->id = $id;

        return $this;
    }

    public function jsonSerialize()
    {
        return [
            'id'   => $this->id,
            'nome' => $this->nome,
            'crm'  => $this->crm,
            'especialidade' => $this->getEspecialidade()->getId(),
            '_links' => [
                    [
                        'ref'=>'especialidade',
                        'path'=> '/especialidade/'.$this->getEspecialidade()->getId()
                    ],
                    [
                        'ref' => 'self',
                        'path' => '/medicos/'.$this->getId()
                    ]
            ]
        ];
    }

}
?>