<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $user = new User();
        $user->setUsername('hugo')
             ->setPassword('$argon2id$v=19$m=65536,t=4,p=1$+X9sHT89jhfLJrPQhBhybA$6rIJSTU6cdDLXOBBj/T5j9a1pLoz1pqWDhcCIYn80sg');

        $manager->persist($user);
        $manager->flush();
    }
}
