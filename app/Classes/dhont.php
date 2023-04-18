<?php

namespace App\Classes;

class Dhont
{
    private $divisores;


    public function repartirBancas($bancas, $listas)
    {
        asort($listas);
        $listas = array_reverse($listas, true);
        $bancas = $this->_createBancasDivisores($bancas, $listas);
        //dd($this->divisores);
        foreach ($bancas as $key => $b) {
            $max = $this->_getMaxCociente($listas);
            $bancas[$key] = $max['identificador'];
        }
        //dd($bancas);
        return $bancas;
    }



    private function _createBancasDivisores($bancas, $listas)
    {
        $bancas = array_fill(0, $bancas, false);

        $this->divisores = array_combine(
            array_keys($listas),
            array_fill(0, count($listas), 1)
        );

        return $bancas;
    }


    private function _getMaxCociente($listas)
    {
        $max = array('identificador' => null, 'cociente' => -1);
        foreach ($listas as $identificador => $votos) {
            $cociente = $votos / $this->divisores[$identificador];
            if ($max['cociente'] < $cociente) {
                // si algun max cociente empata con otro, prevalece el de la lista
                // con mas votos. Si tambien empatan en votos (chocan con divisor 1), se jode la 2da.
                $max = array('identificador' => $identificador, 'cociente' => $cociente);
            }
        }
        $this->divisores[$max['identificador']]++;

        return $max;
    }
}
