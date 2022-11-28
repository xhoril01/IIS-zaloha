<?php

//namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //pacienti
        \App\Models\User::factory(9)->create();
        //Pacient
        DB::table('users')->insert([
            'name' => "Denis",
            'last_name' => "Horil",
            'email' => "denismail@whatever.com",
            'type' => 0,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Horil"),
        ]);
        \App\Models\Treatment::factory(10)->create();
        $this->SubStatesInit();
        $this->TestUsers();
        App\Models\Company::factory(5)->create()->each(function ($parent){
            $medicine = App\Models\Medicine::factory(5)->make();
            $parent->medicines()->saveMany($medicine);
        });
        $this->UpdateUsers();
        $this->LinkDoctors();
        $this->LinkMedicines();
        $this->LinkSubstates();


        $this->Preports_Init();

        $this->Dreports_Init();
    }

    private function Preports_Init(){
        for($i = 1; $i<11;$i++){
            App\Models\Preport::factory(5)->create();
            for($ii = 1; $ii<6;$ii++){
                DB::table('preports')
                ->where('id',($i-1)*5+$ii)
                ->update(['treatment_id' => $i]);       
            }
            $from = date_create_from_format('Y-m-d',DB::table('treatments')->where('id',$i)->value('start'));
            $till = now();
            $date_mid = $this->GetMidDate($from,$till);
            $date_mid1 = $this->GetMidDate($from,$date_mid);
            $date_mid2 = $this->GetMidDate($date_mid,$till);
            $dm1 = $this->GetMidDate($from,$date_mid1);
            $dm2 = $this->GetMidDate($date_mid1,$date_mid);
            $dm3 = $this->GetMidDate($date_mid,$date_mid2);
            $dm4 = $this->GetMidDate($date_mid2,$till);
            $dm_arr = [$dm1,$dm2,$date_mid,$dm3,$dm4];
            for($ii = 1; $ii<6;$ii++){
                DB::table('preports')
                ->where('id',($i-1)*5+$ii)
                ->update(['date' => $dm_arr[$ii-1]]);       
            }
        }
    }

    private function Dreports_Init(){
        for($i = 1; $i<11;$i++){
            App\Models\DoctorReport::factory(5)->create();
            for($ii = 1; $ii<6;$ii++){
                DB::table('doctor_reports')
                ->where('id',($i-1)*5+$ii)
                ->update(['treatment_id' => $i]);       
            }
            $from = date_create_from_format('Y-m-d',DB::table('treatments')->where('id',$i)->value('start'));
            $till = now();
            $date_mid = $this->GetMidDate($from,$till);
            $date_mid1 = $this->GetMidDate($from,$date_mid);
            $date_mid2 = $this->GetMidDate($date_mid,$till);
            $dm1 = $this->GetMidDate($from,$date_mid1);
            $dm2 = $this->GetMidDate($date_mid1,$date_mid);
            $dm3 = $this->GetMidDate($date_mid,$date_mid2);
            $dm4 = $this->GetMidDate($date_mid2,$till);
            $dm_arr = [$dm1,$dm2,$date_mid,$dm3,$dm4];
            for($ii = 1; $ii<6;$ii++){
                DB::table('doctor_reports')
                ->where('id',($i-1)*5+$ii)
                ->update(['date' => $dm_arr[$ii-1]]);       
            }
        }
    }

    private function LinkSubstates(){
        $cur=0;
        for($i=1;$i<11;$i++){
            $cnt = rand(0,3);
            App\Models\VSubstateTreatment::factory($cnt)->create();
            for($ii=0;$ii<$cnt;$ii++){
                $sub_id = rand(1,8);
                //0 xx__ 1 _xx_ 2 __xx 3 xxxx
                $type = rand(0,3);
                $from = date_create_from_format('Y-m-d',DB::table('treatments')->where('id',$i)->value('start'));
                $till = now();
                if($type == 0){
                    $till = $this->GetMidDate($from,$till);
                }
                else if($type == 1){
                    $mid = $this->GetMidDate($from,$till);
                    $from = $this->GetMidDate($from,$mid);
                    $till = $this->GetMidDate($mid,$till);
                }
                else if($type ==2){
                    $from = $this->GetMidDate($from,$till);
                    $till = NULL;
                }
                else if($type == 4){
                    $till = NULL;
                }
                DB::table('v_substate_treatments')
                ->where('id',$cur+$ii)
                ->update(['substate_id' => $sub_id,'treatment_id' => $i ,'till'=>$till,'from'=> $from]);
            }
            $cur+=$cnt;
        }
    }

    private function GetMidDate($date1,$date2){
        $interval = $date1->diff($date2);
        $interval->y = $interval->y/2;
        $interval->m = $interval->m/2;
        $interval->d = $interval->d/2;
        $date_temp = date_create_from_format('Y-m-d',$date1->format('Y-m-d'));
        $mid = $date_temp->add($interval);
        return $mid;
    }

    private function SubStatesInit(){
        DB::table('substates')->insert([
            'name' => "fajciar",
            'desc' => "",
            'type' => "",
        ]);
        DB::table('substates')->insert([
            'name' => "nefajciar",
            'desc' => "",
            'type' => "",
        ]);
        DB::table('substates')->insert([
            'name' => "tehotenstvo",
            'desc' => "",
            'type' => "",
        ]);
        DB::table('substates')->insert([
            'name' => "liecenie na heroin",
            'desc' => "",
            'type' => "",
        ]);
        DB::table('substates')->insert([
            'name' => "obezita",
            'desc' => "",
            'type' => "",
        ]);
        DB::table('substates')->insert([
            'name' => "Po infarkte",
            'desc' => "",
            'type' => "Cardiovascular",
        ]);
        DB::table('substates')->insert([
            'name' => "Hypertenzia",
            'desc' => "",
            'type' => "Cardiovascular",
        ]);
        DB::table('substates')->insert([
            'name' => "Oblickove kamene",
            'desc' => "",
            'type' => "Vylucovacia",
        ]);
    }

    private function UpdateUsers(){
        DB::table('companies')
            ->where('id',1)
            ->update(['user_id' => 13]);
        DB::table('companies')
            ->where('id',2)
            ->update(['user_id' => 14]);
        DB::table('companies')
            ->where('id',3)
            ->update(['user_id' => 15]);
        DB::table('companies')
            ->where('id',4)
            ->update(['user_id' => 16]);
        DB::table('companies')
            ->where('id',5)
            ->update(['user_id' => 17]);
        for($i=1;$i<11;$i++)
            DB::table('treatments')->where('id',$i)->update(['patient_id' => $i]);
    }

    private function LinkMedicines(){
        $del=0;
        for($i=1;$i<11;$i++){
            $t = rand(0,9);
            $s = 2;
            if($t>1) $s =1;
            if($s==1){
                App\Models\VMedicineTreatment::factory(1)->create();
                $t = rand(1,25);
                DB::table('v_medicine_treatments')
                ->where('id',$i+$del)
                ->update(['medicine_id' => $t,'treatment_id' => $i ,'main'=>1,'till'=>NULL,'from'=> DB::table('treatments')->where('id',$i)->value('start')]);
            }else{
                App\Models\VMedicineTreatment::factory(2)->create();
                $t = rand(1,25);
                $t2=$t+1;
                $t2 = ($t2==26)?1:$t2;
                $from = date_create_from_format('Y-m-d',DB::table('treatments')->where('id',$i)->value('start'));
                $till = now();
                $mid = $this->GetMidDate($from,$till);
                DB::table('v_medicine_treatments')
                ->where('id',$i+$del)
                ->update(['medicine_id' => $t,'treatment_id' => $i ,'main'=>1,'till'=>$mid,'from'=> DB::table('treatments')->where('id',$i)->value('start')]);
                DB::table('v_medicine_treatments')
                ->where('id',$i+1+$del)
                ->update(['medicine_id' => $t2,'treatment_id' => $i ,'main'=>1,'till'=>NULL,'from'=> $mid]);
                $del++;
            }
        }
    }

    private function LinkDoctors(){
        $del=0;
        for($i=1;$i<11;$i++){
            $t = rand(0,9);
            $s = 2;
            if($t>1) $s =1;
            if($s==1){
                App\Models\VDoctorTreatment::factory(1)->create();
                $t = rand(11,12);
                DB::table('v_doctor_treatments')
                ->where('id',$i+$del)
                ->update(['doctor_id' => $t,'treatment_id' => $i ,'till'=>NULL,'from'=> DB::table('treatments')->where('id',$i)->value('start')]);
            }else{
                App\Models\VDoctorTreatment::factory(2)->create();
                $t = rand(11,12);
                $t2 = ($t==12)?11:12;
                $from = date_create_from_format('Y-m-d',DB::table('treatments')->where('id',$i)->value('start'));
                $till = now();
                $interval = $from->diff($till);
                $interval->y = $interval->y/2;
                $interval->m = $interval->m/2;
                $interval->d = $interval->d/2;
                $mid = $from->add($interval);
                DB::table('v_doctor_treatments')
                ->where('id',$i+$del)
                ->update(['doctor_id' => $t,'treatment_id' => $i ,'till'=>$mid,'from'=> DB::table('treatments')->where('id',$i)->value('start')]);
                DB::table('v_doctor_treatments')
                ->where('id',$i+1+$del)
                ->update(['doctor_id' => $t2,'treatment_id' => $i ,'till'=>NULL,'from'=> $mid]);
                $del++;
            }
        }
    }

    private function TestUsers(){

        /*
        $id = DB::table('users')->where('email','=','DenisMail@whatever.com')->value('id');

        DB::table('treatments')->insert([
            'next_visit' => '2022-11-28',
            'age' => 22,
            'gender' => 'Male',
            'diagnosis' => '2018-05-15',
            'start' => '2018-06-01',
            'patient_id' => $id
        ]);

        $treatment_id = DB::table('treatments')->where('patient_id','=',$id)->value('id');

        DB::table('v_doctor_treatments')->insert([
            'from' => '2018-06-01',
            'till' => NULL,
            'doctor_id' => 12,
            'treatment_id' => $treatment_id
        ]);*/

        //Doktor
        DB::table('users')->insert([
            'name' => "Frankie",
            'last_name' => "Stein",
            'email' => "fstein@whatever.com",
            'type' => 1,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Stone"),
        ]);

        DB::table('users')->insert([
            'name' => "Tomy d'Angelo",
            'last_name' => "gg",
            'email' => "tangelo@salieri.com",
            'type' => 1,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Mariani"),
        ]);

        //Firma
        DB::table('users')->insert([
            'name' => "Saburo",
            'last_name' => "Arasaka",
            'email' => "sarasaka1@whatever.com",
            'type' => 2,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Heslo123"),
        ]);

        //Firma
        DB::table('users')->insert([
            'name' => "Saburo1",
            'last_name' => "Arasaka",
            'email' => "sarasaka2@whatever.com",
            'type' => 2,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Heslo123"),
        ]);

        //Firma
        DB::table('users')->insert([
            'name' => "Saburo2",
            'last_name' => "Arasaka",
            'email' => "sarasaka3@whatever.com",
            'type' => 2,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Heslo123"),
        ]);

        //Firma
        DB::table('users')->insert([
            'name' => "Saburo3",
            'last_name' => "Arasaka",
            'email' => "sarasaka4@whatever.com",
            'type' => 2,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Heslo123"),
        ]);

        //Firma
        DB::table('users')->insert([
            'name' => "Saburo4",
            'last_name' => "Arasaka",
            'email' => "sarasaka5@whatever.com",
            'type' => 2,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Heslo123"),
        ]);

        //Admin
        DB::table('users')->insert([
            'name' => "Tomas",
            'last_name' => "Lukac",
            'email' => "tomasmail@whatever.com",
            'type' => 3,
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'password' => Hash::make("Lukac"),
        ]);
    }

}
