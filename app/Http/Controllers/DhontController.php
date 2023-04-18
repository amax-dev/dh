<?php

namespace App\Http\Controllers;

use App\Classes\Dhont;
use App\Models\Izbor;
use App\Models\Rezultat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Inertia\Inertia;

class DhontController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */



    public function index(Request $request)
    {

        //dd($request->toArray());
        if(empty($request->toArray())){
            $liste = array(
                ['lista'=>'', 'skraceno'=>'', 'glasova'=> '0', 'boja'=>'#38b2ac'],
                );
            $cenzus = 0;
            $ukMandata = 0;

        }
        else{

            // ulazni podaci
            $liste = $request['liste'];
            $cenzus = $this->_cenzus($request['cenzus']);
            $ukMandata = $request['ukMandata'];
        }


        //priprema za dhont
        $rez = $this->_rezultatZaDhot($liste);

        //suma vazecih listica
        $vazeciListici = array_sum($rez);

        // Liste koje prelaze cenzus i ulaze u raspodjelu
        $iznadCenzusa = $this->_listeIznadCenzusa($rez, $vazeciListici, $cenzus);

        // Liste koje su ispod cenzusa i ne ucestvuju u raspodjeli mandata
        $ispodCenzusa = $this->_listeIspodCenzusa($rez, $vazeciListici, $cenzus);

        // Mandati po dhontu
        $mandati = $this->_raspodjelaMandata($iznadCenzusa, $ukMandata);



        return Inertia::render('Dhont')->with([
            'liste'=>$liste,
            'rez'=>$rez,
            'vazeciListici'=>$vazeciListici,
            'mandati'=>$mandati,
            'iznadCenzusa'=>$iznadCenzusa,
            'ispodCenzusa'=>$ispodCenzusa,
        ]);
    }


    private function _cenzus($cenzus)
    {
        return $cenzus / 100;
    }

    private function _rezultatZaDhot($liste)
    {
        $rez = [];
        foreach ($liste as $x=>$y){
            $rez[$liste[$x]['lista']]=$liste[$x]['glasova'];
        }
        return $rez;
    }

    private function _listeIznadCenzusa($rez, $vazeciListici, $cenzus)
    {
        $listeIznadCenzusa=[];
        foreach($rez as $id => $lista){

            if($lista >= $vazeciListici * $cenzus) {
                $listeIznadCenzusa[$id] = $lista;
            }
        }
        return $listeIznadCenzusa;
    }

    private function _listeIspodCenzusa($rez, $vazeciListici, $cenzus)
    {
        $listeIspodCenzusa=[];
        foreach($rez as $id => $lista){

            if($lista < $vazeciListici * $cenzus) {
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       // dd($request['liste']);

        $izbori = new Izbor;

        $izbori->naziv=$request['izbori'];
        $izbori->cenzus=$request['cenzus'];
        $izbori->ukMandata=$request['ukMandata'];
        $izbori->slug=Str::random(8);
        $izbori->user_id = auth()->user()->id;
        $izbori->save();

        $niz = [];
        foreach ($request['liste'] as $item=>$value){
            $niz[$item]['izbor_id'] = $izbori->id;
            $niz[$item]['lista'] = $value['lista'];
            $niz[$item]['skraceno'] = $value['skraceno'];
            $niz[$item]['glasova'] = $value['glasova'];
            $niz[$item]['boja'] = $value['boja'];
        }

        //dd($niz);

        $r = Rezultat::insert($niz);

        return redirect::route('dhont.show', $izbori->slug);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $izbori = Izbor::with('rezultat')->where('slug',$slug)->first()->toArray();
//dd($izbori);

        // ulazni podaci
        $liste = $izbori['rezultat'];
        $cenzus = $this->_cenzus($izbori['cenzus']);
        $ukMandata = $izbori['ukMandata'];

        //priprema za dhont
        $rez = $this->_rezultatZaDhot($liste);

        //suma vazecih listica
        $vazeciListici = array_sum($rez);

        // Liste koje prelaze cenzus i ulaze u raspodjelu
        $iznadCenzusa = $this->_listeIznadCenzusa($rez, $vazeciListici, $cenzus);

        // Liste koje su ispod cenzusa i ne ucestvuju u raspodjeli mandata
        $ispodCenzusa = $this->_listeIspodCenzusa($rez, $vazeciListici, $cenzus);

        // Mandati po dhontu
        $mandati = $this->_raspodjelaMandata($iznadCenzusa, $ukMandata);
//dd($izbori['rezultat']);

        //grafik
        $grafik = [];
        foreach ($izbori['rezultat'] as $item=>$value){
            if($value['glasova'] >=  $vazeciListici * $cenzus){
                $grafik[$item] = [$value['lista'], $mandati[$value['lista']], $value['boja'], $value['skraceno']];
            }
        }

        $grafik = array_values($grafik);

        $grafik2=[];
        $grafik2Cat = [];
        foreach ($izbori['rezultat'] as $item=>$value){
            $grafik2[$item] = [$value['lista'], $value['glasova'], $value['boja'],];
            array_push($grafik2Cat, $value['skraceno']);
        }

//dd($grafik2Cat);


        return Inertia::render('Dhont/Show')->with([
            'izbori'=>$izbori,
            'iznadCenzusa' => $iznadCenzusa,
            'ispodCenzusa'=>$ispodCenzusa,
            'mandati'=>$mandati,
            'vazecihListica'=>$vazeciListici,
            'grafik'=>$grafik,
            'grafik2'=>$grafik2,
            'grafik2Cat'=>$grafik2Cat
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function index1()
    {
        return Inertia::render('Dhont/Grafik');
    }
}
