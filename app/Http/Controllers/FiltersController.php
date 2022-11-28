<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Log;
use Exepction;
use Illuminate\Support\Facades\Auth;

use App\Models\Substate;
use App\Models\Medicine;
class FiltersController extends Controller
{

    function filter_results($filter,$data_arr){
        $return_arr = [];
        if($filter==NULL || $filter == ""){
            foreach($data_arr as $data){
                array_push($return_arr,$data['name']);
            }
        }else{
            foreach($data_arr as $data){
                $matched = preg_match("/".$filter."/",$data['name']);
                if($matched)
                    array_push($return_arr,$data['name']);
            }
        }
        return $return_arr;
    }

    function get_medicines(Request $request){
        try{
            $filter = $request->searched;
            $medicines = DB::table('medicines')->get('medicines.name');
            $medicines = json_decode($medicines,true);
            $return_arr = $this->filter_results($filter,$medicines);
            return response()->json($return_arr);
        }catch(Exepction $e){
            Log::error($e);
        }
    }

    function get_states(Request $request){
        try{
            $filter = $request->searched;
            $substates = DB::table('substates')->get('substates.name');
            $substates = json_decode($substates,true);
            $return_arr = $this->filter_results($filter,$substates);

            return response()->json($return_arr);
        }catch(Exepction $e){
            Log::error($e);
        }
    }
}
