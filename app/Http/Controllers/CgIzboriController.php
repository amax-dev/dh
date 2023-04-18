<?php

namespace App\Http\Controllers;

use App\Classes\Dhont;
use App\Classes\cgDhont;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function PHPUnit\Framework\isNull;

class CgIzboriController extends Controller
{
    public function index()
    {
        $rezultat = [
            ['lista'=>'SD','glasova'=>16761,'vrsta'=>0,],
            ['lista'=>'BS','glasova'=>16279,'vrsta'=>1,],
            ['lista'=>'HGI','glasova'=>1106,'vrsta'=>3,],
            ['lista'=>'SDP','glasova'=>12835,'vrsta'=>0,],
            ['lista'=>'HRS','glasova'=>496,'vrsta'=>3,],
            ['lista'=>'URA','glasova'=>22679,'vrsta'=>0,],
            ['lista'=>'AK','glasova'=>4675,'vrsta'=>2,],
            ['lista'=>'DPS','glasova'=>143515,'vrsta'=>0,],
            ['lista'=>'DF','glasova'=>133261,'vrsta'=>0,],
            ['lista'=>'AL','glasova'=>6488,'vrsta'=>2,],
            ['lista'=>'DCG','glasova'=>51298,'vrsta'=>0,],
        ];

        $vrsta = ['0'=>'Građanska', '1'=>'Bošnjačka', '2'=>'Albanska','3'=>'Hrvatska'];
//dd($rezultat);
        $ukupnoMandata = 81;
        $vazeciListici = array_sum(array_column($rezultat,'glasova'));
        $cenzus = $vazeciListici * 0.03;

        $hrCenzus = 0.0035;
        $manjinskiCenzus = 0.007;



     $hrPartije = $this->_izvuciManjinskePartije($rezultat, 3);
     $bsPartije = $this->_izvuciManjinskePartije($rezultat, 1);
     $alPartije = $this->_izvuciManjinskePartije($rezultat, 2);

     //dd($alPartije, $bsPartije, $hrPartije);
       $hrMandat = $this->_hrvatskePartije($hrPartije, $vazeciListici);



        $mPartijaIznadCenzusa=[];
        $mPartijaIspodCenzusa=[];

        foreach ($alPartije as $item=>$value){

            //dd($cenzus);
            if($value[1] >= $cenzus){
                $mPartijaIznadCenzusa[$item] = [$value[0],$value[1]];
            }else{
                $mPartijaIspodCenzusa[$item] = [$value[0],$value[1]];
            }
        }

        if(count($mPartijaIznadCenzusa)=== 0 and count($mPartijaIspodCenzusa) > 0 ){
            $sumaGlasova = 0;
            foreach ($mPartijaIspodCenzusa as $item=>$value){
                if($value[1] >= $vazeciListici * $manjinskiCenzus){
                    $sumaGlasova = $sumaGlasova + $value[1];
                }
            }
            $mMandati['AP'] = $sumaGlasova;
        }
//dd($mMandati);

        // iz drugog kontrolera

        //priprema za dhont
        $rez = $this->_rezultatZaDhot($rezultat);

        //suma vazecih listica
        $vazeciListici = array_sum($rez);

        // Liste koje prelaze cenzus i ulaze u raspodjelu
        $iznadCenzusa = $this->_listeIznadCenzusa($rezultat, $cenzus);

        // Liste koje su ispod cenzusa i ne ucestvuju u raspodjeli mandata
        $ispodCenzusa = $this->_listeIspodCenzusa($rez, $vazeciListici, $cenzus);

        // Mandati po dhontu

        if(count($mMandati)>0){
            foreach ($mMandati as $item=>$value){
                $iznadCenzusa[$item] = $value;
            }
        }
        //dd($iznadCenzusa);


        if(!empty($hrMandat)){
//dd($hrMandat);
            $ukupnoMandata = $ukupnoMandata - 1;
            $mandati = $this->_raspodjelaMandata($iznadCenzusa, $ukupnoMandata);
            $mandati[$hrMandat[0]]= 1;
        }else{
            $mandati = $this->_raspodjelaMandata($iznadCenzusa, $ukupnoMandata);
        }


        if(!empty($mandati['AP'])){

            foreach ($alPartije as $item=>$value){

                $alP[$value[0]] = $value[1];
            }
            $alMandati = $this->_raspodjelaMandata($alP, $mandati['AP']);
            //dd($alMandati);

            foreach ($alMandati as $item=>$value){
                $mandati[$item]=$value;
            }
        }


dd($mandati);

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

        foreach ($partije as $item => $value)
        {
            if($value['vrsta']==$n)
            {
                $mPartije[$item] = [$value['lista'],$value['glasova'],$n];
            }
        }

        return array_values($mPartije);
    }


    private function _rezultatZaDhot($liste)
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

    private function _listeIspodCenzusa($rez, $cenzus)
    {
        $listeIspodCenzusa=[];
        foreach($rez as $id => $lista){

            if($lista <  $cenzus) {
                $listeIspodCenzusa[$id] = $lista;
            }
        }
        return $listeIspodCenzusa;
    }

    private function _raspodjelaMandata($iznadCenzusa, $ukMandata)
    {

        if(!empty($iznadCenzusa)) {
            $dhont = new Dhont();

            $rasporedMandata = $dhont->repartirBancas($ukMandata, $iznadCenzusa);
            $mandati = array_count_values($rasporedMandata);

        }
        else
        {
            $mandati = [];
        }

        return $mandati;
    }

    public function show(Request $request)
    {
        $cgDhont = new cgDhont;

        $izbori=[
            '2012'=>[
                'naziv'=>'Parlamentarni izbori 2012',
                'rezultat' => [
                    ['lista'=>'Albanska omladinska alijana','skraceno'=>'AOA','glasova'=>531,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Srpska sloga', 'skraceno'=>'SS','glasova'=>5275, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Hrvatska građanska inicijativa', 'skraceno'=>'HGI','glasova'=>1470, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>1,],
                    ['lista'=>'Pozitivna Crna Gora', 'skraceno'=>'PCG','glasova'=>29881, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Socijalistička narodna partija', 'skraceno'=>'SNP','glasova'=>40131,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Demokratska unija albanaca', 'skraceno'=>'DUA','glasova'=>2848,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Albanska koalicija', 'skraceno'=>'AK','glasova'=>3824,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Demokratski front', 'skraceno'=>'DF','glasova'=>82773,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Forca za jedinstvo', 'skraceno'=>'Forca','glasova'=>5244,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Bošnjačka stranka', 'skraceno'=>'BS', 'glasova'=>15124,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>2,],
                    ['lista'=>'Evropska Crna Gora (DPS/SDP/LP)', 'skraceno'=>'ECG', 'glasova'=>165380,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Zajedno', 'skraceno'=>'Zajedno', 'glasova'=>1384,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Srpski nacionalni savez', 'skraceno'=>'SNS', 'glasova'=>3085,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,]
                ],
            ],
            '2016'=>[
                'naziv'=>'Parlamentarni izbori 2016',
                'rezultat' => [
                    ['lista'=>'Forca -  Dua','skraceno'=>'forca','glasova'=>4854,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Socijaldemokratska partija', 'skraceno'=>'SDP','glasova'=>20011, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Albanska koalicija', 'skraceno'=>'AK','glasova'=>3394, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Alternativa', 'skraceno'=>'SDP','glasova'=>878, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Pozitivna CG', 'skraceno'=>'PCG','glasova'=>5062,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Demokratska partija socijalista', 'skraceno'=>'DPS','glasova'=>158490,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Hrvatska građanska inicijativa', 'skraceno'=>'HGI', 'glasova'=>1802,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>1,],
                    ['lista'=>'Demokratska Crna Gora', 'skraceno'=>'DCG','glasova'=>38327,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Velika koalicija ključ', 'skraceno'=>'Ključ','glasova'=>42295,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Srpska stranka', 'skraceno'=>'SS','glasova'=>1201,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Stranka penzionera', 'skraceno'=>'SP', 'glasova'=>672,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Lista DS Albanaca', 'skraceno'=>'DS', 'glasova'=>1542,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Demokratski front', 'skraceno'=>'DF', 'glasova'=>77784,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Bošnjačka stranka', 'skraceno'=>'BS', 'glasova'=>12089,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>2,],
                    ['lista'=>'Bošnjačka demokratska zajednica', 'skraceno'=>'BDZ', 'glasova'=>1140,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>2,],
                    ['lista'=>'Socijaldemokrate', 'skraceno'=>'SD', 'glasova'=>12472,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Srpski radikali', 'skraceno'=>'SR', 'glasova'=>693,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                ],
            ],
            '2020'=>[
                'naziv'=>'Parlamentarni izbori 2020',
                'rezultat' => [
                    ['lista'=>'Socijaldemokrate Crne Gore','skraceno'=>'SD','glasova'=>16761,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Bošnjačka stranka', 'skraceno'=>'BS','glasova'=>16279, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>2,],
                    ['lista'=>'Hrvatska građanska inicijativa', 'skraceno'=>'HGI','glasova'=>1106, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>1,],
                    ['lista'=>'Socijaldemokratska partija', 'skraceno'=>'SDP','glasova'=>12835, 'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Hrvatska reformska stranka', 'skraceno'=>'HRS','glasova'=>496,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>1,],
                    ['lista'=>'Ujedinjena reformska akcija', 'skraceno'=>'URA','glasova'=>22679,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Albanska koalicija', 'skraceno'=>'AK', 'glasova'=>4675,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Demokratska partija socijalista', 'skraceno'=>'DPS','glasova'=>143515,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Demokratski front', 'skraceno'=>'DF','glasova'=>133261,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                    ['lista'=>'Albanska lista', 'skraceno'=>'AL','glasova'=>6488,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>3,],
                    ['lista'=>'Demokratska Crna Gora', 'skraceno'=>'DCG', 'glasova'=>51298,'boja'=> '#' . substr(str_shuffle('ABCDEF0123456789'), 0, 6),'vrsta'=>0,],
                ],
            ],
        ];




        $liste = (isset($request['godina'])) ? $izbori[$request['godina']]['rezultat'] : $izbori['2020']['rezultat'];



        $listaFinal = $cgDhont->getCompletList($liste);
        $grafikMandati = $cgDhont->getGrafikMandati($listaFinal);
        $grafikBrGlasova = $cgDhont->getGrafikBrojGlasova($liste);


        return Inertia::render('Dhont/ShowCG')->with([
            'izbori'=>$listaFinal,
            'naziv'=>(isset($request['godina'])) ? $izbori[$request['godina']]['naziv'] : $izbori['2020']['naziv'],
            'mandati'=>$cgDhont->ukupnoMandata,
            'cenzus'=>$cgDhont->cenzus,
            'vazecihListica'=>$cgDhont->vazeciListici,
            'grafik'=>$grafikMandati,
            'grafik2'=>$grafikBrGlasova[0],
            'grafik2Cat'=>$grafikBrGlasova[1],
        ]);

    }


}
