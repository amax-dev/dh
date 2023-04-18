<?php

namespace App\Classes;
use App\Classes\Dhont;
use function PHPUnit\Framework\isNull;


class cgDhont
{


    public $mandati;
    public $ukupnoMandata = 81;
    public $cenzus = 3;
    public $manjinskiCnezus = 0.7;
    public $hrCenzus = 0.35;
    public $vazeciListici;
    public $vrsta = [
        '1'=>'HrvPar',
        '2'=>'BosPar',
        '3'=>'AlbPar',
        '4'=>'MusPar',
    ];

    public function getMandats($rezultat)
    {
        //priprema za dhont
        $rez = $this->_rezultatZaDhont($rezultat);

        //suma vazecih listica
        $this->vazeciListici = array_sum($rez);

        // Liste koje prelaze cenzus i ulaze u raspodjelu
        $iznadCenzusa = $this->_listeIznadCenzusa($rezultat, $this->cenzus/100 * $this->vazeciListici);
       // dd($iznadCenzusa);
        // Liste koje su ispod cenzusa i ne ucestvuju u raspodjeli mandata
        // $ispodCenzusa = $this->_listeIspodCenzusa($rez, $this->vazeciListici, $this->cenzus);

        // Izvlaci manjinske partije
        foreach ($this->vrsta as $item => $value){
            $mPartije[$value] = $this->_izvuciManjinskePartije($rezultat, $item);
        }

        // odredjuje kojoj hrvatskoj partiji pripada mandat
        $hrMandat = $this->_hrvatskePartije($mPartije['HrvPar'], $this->vazeciListici);

        // obrada manjinskih glasova
        foreach ($this->vrsta as $item=>$value){
            if ($item>1){
                $PartijeObrada = $this->_manjiskePartije($mPartije[$value], $value);
                if(count($PartijeObrada)>0 && isNull($PartijeObrada[$value])){
                    foreach ($PartijeObrada as $ite=>$val){
                        $iznadCenzusa[$ite] = $val;
                    }
                }
            }
        }
        // obracun mandata

        // dodavanje mandata hrvatske manjine

        if(!empty($hrMandat)){
            // ako hrvati uzimaju jedan mandat
            $mandati = $this->_raspodjelaMandata($iznadCenzusa, $this->ukupnoMandata, 1);
            $mandati[$hrMandat[0]]= 1;
        }else{
            // bez hrvatskih mandata
            $mandati = $this->_raspodjelaMandata($iznadCenzusa, $this->ukupnoMandata);
        }


        // Manjinski mandati bez hrvatskih

        foreach ($this->vrsta as $item=>$value){
            if ($item >1 ){
                if(!empty($mandati[$value])){

                    foreach ($mPartije[$value] as $it=>$val){

                        $mP[$val[0]] = $val[1];
                    }

                    $mMandati = $this->_raspodjelaMandata($mP, ($mandati[$value]>3) ? 3 : $mandati[$value]);

                    unset($mandati[$value]);
                    foreach ($mMandati as $itt=>$vall){
                        $mandati[$itt]=$vall;
                    }

                }
            }

        }


        return $mandati;
    }


    public function getCompletList($lista)
    {
        $a = $this->getMandats($lista);

        foreach ($lista as $item=>$value){

            $listaFinal[$item] = [
                'lista'=>$value['lista'],
                'skraceno'=>$value['skraceno'],
                'glasova'=>$value['glasova'],
                'boja'=>$value['boja'],
                'vrsta'=>$value['vrsta'],
                'mandata'=> (isset($a[$value['lista']])) ? $a[$value['lista']] : 0];
        }

        return $listaFinal;
    }


    public function getGrafikMandati($lista)
    {
        $grafik = [];
        foreach ($lista as $item=>$value){
            if($value['mandata'] > 0){
                $grafik[$item] = [$value['lista'],
                    $value['mandata'],
                    $value['boja'],
                    $value['skraceno']];
            }
        }

        return array_values($grafik);
    }

    public function getGrafikBrojGlasova($lista)
    {
        $grafik2=[];
        $grafik2Cat = [];
        foreach ($lista as $item=>$value){
            $grafik2[$item] = [
                $value['lista'],
                $value['glasova'],
                $value['boja'],
            ];
            array_push($grafik2Cat, $value['skraceno']);
        }

        return [$grafik2,$grafik2Cat];
    }


    private function _manjiskePartije($manjinskePartije, $vrsta)
    {
        $mPartijaIznadCenzusa=[];
        $mPartijaIspodCenzusa=[];

        foreach ($manjinskePartije as $item=>$value){

            //dd($value[1]);
            if($value[1] >= $this->cenzus / 100 * $this->vazeciListici){
                $mPartijaIznadCenzusa[$item] = [$value[0],$value[1]];
            }else{
                $mPartijaIspodCenzusa[$item] = [$value[0],$value[1]];
            }

        }

        if(count($mPartijaIznadCenzusa)=== 0 and count($mPartijaIspodCenzusa) > 0 ){
            $sumaGlasova = 0;
            foreach ($mPartijaIspodCenzusa as $item=>$value){
                if($value[1] >= $this->vazeciListici * $this->manjinskiCnezus / 100){
                    $sumaGlasova = $sumaGlasova + $value[1];
                }
            }
            $mMandati[$vrsta] = $sumaGlasova;
        }else{
            $mMandati[$vrsta] = null;
        }

        return $mMandati;
    }



    private function _hrvatskePartije($partije, $vazeciListici, $cenzus = 0.0035)
    {

        // petlja koja provjerava koje partije prelze cenzus
        foreach ($partije as $item=>$value) {

            if ($value[1] >= ($vazeciListici * $cenzus)) {

                $niz[] = $value;
            }
        }

        if(!isset($niz)){
            $niz=[];
        }

        // ako prelaze cenzus koje uzima mandat

        // ako samo jedna lista prelazi cenzus
        if(count($niz) == 1) {
            //dd($niz);
            $r = [$niz[0][0],$niz[0][1]];
            return $r;
        }

        // ako vise lista prelazi cenzus, lista sa najvise glasova uzima jedan mandat
        elseif(count($niz) > 1) {

            $max = 0;
            foreach ($niz as $item=>$value)
            {
                //dd($value[1]);
                if($value[1]>$max){
                    $max = $value[1];
                    $r = $value;
                }
            }
            return $r;

        }
        // ako ni jedna lista ne prelazi cenzus ond afraca null
        else {
            return null;
        }

    }




    private function _izvuciManjinskePartije($partije, $n)
    {

        $mPartije=[];
        foreach ($partije as $item => $value)
        {
            if($value['vrsta']==$n)
            {
                $mPartije[$item] = [$value['lista'],$value['glasova'],$n];
            }
        }

        return array_values($mPartije);
    }


    private function _rezultatZaDhont($liste)
    {
        $rez = [];
        foreach ($liste as $x=>$y){
            $rez[$liste[$x]['lista']]=$liste[$x]['glasova'];
        }
        return $rez;
    }

    private function _listeIznadCenzusa($rez, $cenzus)
    {
        $listeIznadCenzusa=[];
        foreach($rez as $id => $lista){

            if($lista['glasova'] >= $cenzus) {
                $listeIznadCenzusa[$lista['lista']] = $lista['glasova'];
            }
        }
        return $listeIznadCenzusa;
    }


    private function _raspodjelaMandata($iznadCenzusa, $ukMandata, $hP = 0)
    {

        if(!empty($iznadCenzusa)) {
            $dhont = new Dhont();

            // inicijalni raspored mandata bez razvrstanih manjinskih partija
            $rasporedMandata1 = $dhont->repartirBancas($ukMandata, $iznadCenzusa);
            $broj = array_count_values($rasporedMandata1);

            $dodatni = 0;

            // provjerava i setuje manjinske mandate
            foreach ($this->vrsta as $item=>$value){
                if ($item>1){
                    if(isset($broj[$value]) && $broj[$value]>3){
                        $dodatni += $broj[$value] - 3;
                    }
                }
            }

            //obracunava konacnu listu u zavisnosti da li ima hrvatski mandata {{ oduzima  $hp od ukupnog broja  da bi ga dodalo ako ga ima}}
            $rasporedMandata = $dhont->repartirBancas($ukMandata + $dodatni - $hP, $iznadCenzusa);

            $mandati = array_count_values($rasporedMandata);
        }
        else
        {
            $mandati = [];
        }

        return $mandati;
    }

}
