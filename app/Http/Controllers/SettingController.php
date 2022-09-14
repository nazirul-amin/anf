<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index(){
        return Inertia::render('Settings/CentreManagement/Index');
    }

    /* Fee Type */
        public function feeTypeList(){
            $fee_type_list  =   DB::table('fee_types')->paginate(10);

            return Inertia::render('Settings/CentreManagement/Index',[
                'fee_type_list' => $fee_type_list,
            ]);
        }

        public function addFeeType(){
            return Inertia::render('Settings/CentreManagement/FeeType/Create');
        }

        public function storeFeeType(Request $request){
            $request->validate([
                'fee_type'  => 'required'
            ]);

            DB::table('fee_types')->insert([
                'label' =>  $request->fee_type
            ]);

            return redirect(route('settings.fee_type_list'))->with(['type'=>'success', 'message'=>'Fee type added successfully !']);
        }

        public function editFeeType(Request $request){
            $fee_type_info  =   DB::table('fee_types')->where('id', $request->fee_type_id)->first();
            
            return Inertia::render('Settings/CentreManagement/FeeType/Edit', [
                'fee_type_info' =>  $fee_type_info
            ]);
        }

        public function updateFeeType(Request $request){
            $request->validate([
                'fee_type'  => 'required'
            ]);

            DB::table('fee_types')->where('id', $request->fee_type_id)->update([
                'label' =>  $request->fee_type,
                'updated_at'        => Carbon::now(),
            ]);

            return redirect(route('settings.fee_type_list'))->with(['type'=>'success', 'message'=>'Fee type updated successfully !']);
        }

        public function destroyFeeType($id){   
            DB::table('fee_types')->where('id', $id)->delete();

            return back()->with(['type'=>'success', 'message'=>'Fee type deleted successfully ! ']);
        }

    /* Fee Period */
        public function feePeriodList(){
            $fee_period_list  =   DB::table('fee_periods')->paginate(10);

            return Inertia::render('Settings/CentreManagement/Index',[
                'fee_period_list' => $fee_period_list,
            ]);
        }

        public function addFeePeriod(){
            return Inertia::render('Settings/CentreManagement/FeePeriod/Create');
        }

        public function storeFeePeriod(Request $request){
            $request->validate([
                'fee_period'  => 'required'
            ]);

            DB::table('fee_periods')->insert([
                'label' =>  $request->fee_period
            ]);

            return redirect(route('settings.fee_period_list'))->with(['type'=>'success', 'message'=>'Fee Period added successfully !']);
        }

        public function editFeePeriod(Request $request){
            $fee_period_info  =   DB::table('fee_periods')->where('id', $request->fee_period_id)->first();
            
            return Inertia::render('Settings/CentreManagement/FeePeriod/Edit', [
                'fee_period_info' =>  $fee_period_info
            ]);
        }

        public function updateFeePeriod(Request $request){
            $request->validate([
                'fee_period'  => 'required'
            ]);

            DB::table('fee_periods')->where('id', $request->fee_period_id)->update([
                'label' =>  $request->fee_period,
                'updated_at'        => Carbon::now(),
            ]);

            return redirect(route('settings.fee_period_list'))->with(['type'=>'success', 'message'=>'Fee period updated successfully !']);
        }

        public function destroyFeePeriod($id){
            DB::table('fee_periods')->where('id', $id)->delete();

            return back()->with(['type'=>'success', 'message'=>'Fee period deleted successfully ! ']);
        }

    /* Programmes */
        public function programmeList(){
            $query      =   DB::table('programmes');

            if(request('search')){
                $query->where('name', 'LIKE', '%'.request('search').'%');
            }

            $programmes    =   $query->paginate(10);
            
            return Inertia::render('Settings/CentreManagement/Index', [
                'filter' => request()->all('search'),
                'programme_list' => $programmes,
            ]);
        }

        public function addProgramme(){
            $fee_types          =   DB::table('fee_types')->orderBy('id')->get();
            $fee_types_detail   =   DB::table('fee_types_detail')->get()->groupBy('fee_type_id');
            return Inertia::render('Settings/CentreManagement/Programmes/Create', [
                'fee_types'         => $fee_types,
                'fee_types_detail'  => $fee_types_detail,
            ]);
        }

        public function storeProgramme(Request $request){
            $request->validate([
                'programme_name'               => 'required|max:255',
            ]);

            $programme_id = DB::table('programmes')->insertGetId([
                'name'              =>  $request->programme_name,
                'level'             =>  $request->programme_level,
                'updated_at'        =>  Carbon::now(),
                'status'            =>  $request->programme_active,
            ]);

            foreach($request->programme_fees as $fee_detail_id=>$amount){
                if($amount != 0 && $amount != ''){
                    DB::table('programmes_fees')->insert([
                        'programme_id'          =>  $programme_id,
                        'fee_type_detail_id'    =>  $fee_detail_id,
                        'amount'                =>  $amount,
                    ]);
                }
            }

            return redirect(route('settings.programmes'))->with(['type'=>'success', 'message'=>'Programme added successfully !']);
        }

        public function editProgramme(Request $request){
            $programme_info     =   DB::table('programmes')->where('id', $request->programme_id)->first();
            $fee_types          =   DB::table('fee_types')->orderBy('id')->get();
            $fee_types_detail   =   DB::table('fee_types_detail')->get()->groupBy('fee_type_id');
            $programme_fees     =   DB::table('programmes_fees')->select('fee_type_detail_id','amount')->where('programme_id', $request->programme_id)->get();
            
            return Inertia::render('Settings/CentreManagement/Programmes/Edit', [
                'programme_info'    => $programme_info,
                'fee_types'         => $fee_types,
                'fee_types_detail'  => $fee_types_detail,
                'programme_fees'    => $programme_fees,
            ]);
        }

        public function updateProgramme(Request $request){
            $request->validate([
                'programme_name'               => 'required|max:255',
            ]);

            DB::table('programmes')->where('id', $request->programme_id)->update([
                'name'              =>  $request->programme_name,
                'level'             =>  $request->programme_level,
                'updated_at'        =>  Carbon::now(),
                'status'            =>  $request->programme_active,
            ]);

            DB::table('programmes_fees')->where('programme_id', $request->programme_id)->delete();

            foreach($request->programme_fees as $fee_detail_id=>$amount){
                if($amount != 0 && $amount != ''){
                    DB::table('programmes_fees')->insert([
                        'programme_id'          =>  $request->programme_id,
                        'fee_type_detail_id'    =>  $fee_detail_id,
                        'amount'                =>  $amount,
                    ]);
                }
            }

            return redirect(route('settings.programmes'))->with(['type'=>'success', 'message'=>'Programme updated successfully !']);
        }

        public function destroyProgramme($id){
            DB::table('programmes')->where('id', $id)->delete();
            DB::table('programmes_fees')->where('programme_id', $id)->delete();

            return redirect(route('settings.programmes'))->with(['type'=>'success', 'message'=>'Programme deleted successfully !']);
        }

    /* Countries */
        public function countryList(){
            $country_list  =   DB::table('countries')->paginate(10);

            return Inertia::render('Settings/General/Countries/Index',[
                'country_list' => $country_list,
            ]);
        }

        public function addCountry(){
            return Inertia::render('Settings/General/Countries/Create');
        }

        public function storeCountry(Request $request){
            $request->validate([
                'fee_period'  => 'required'
            ]);

            DB::table('fee_periods')->insert([
                'label' =>  $request->fee_period
            ]);

            return redirect(route('settings.fee_period_list'))->with(['type'=>'success', 'message'=>'Fee Period added successfully !']);
        }

        public function editCountry(Request $request){
            $fee_period_info  =   DB::table('fee_periods')->where('id', $request->fee_period_id)->first();
            
            return Inertia::render('Settings/General/Countries/Edit', [
                'fee_period_info' =>  $fee_period_info
            ]);
        }

        public function updateCountry(Request $request){
            $request->validate([
                'fee_period'  => 'required',
                'updated_at'  => Carbon::now(),
            ]);

            DB::table('fee_periods')->where('id', $request->fee_period_id)->update([
                'label' =>  $request->fee_period
            ]);

            return redirect(route('settings.fee_period_list'))->with(['type'=>'success', 'message'=>'Fee period updated successfully !']);
        }

        public function destroyCountry($id){
            DB::table('fee_periods')->where('id', $id)->delete();

            return back()->with(['type'=>'success', 'message'=>'Fee period deleted successfully ! ']);
        }
    
    /* Diagnostic Test */
        /* Diagnostic Test List */
            public function dtList(){
                $diagnostic_test_list           =   DB::table('diagnostic_test')->paginate(10);

                return Inertia::render('Settings/General/DiagnosticTest/Index', [
                    'diagnostic_test_list' => $diagnostic_test_list,
                ]);
            }

            public function dtCreate(){
                return Inertia::render('Settings/General/DiagnosticTest/Create');
            }

            public function dtStore(Request $request){
                $request->validate([
                    'title'          => 'required',
                ]);
                
                DB::table('diagnostic_test')->insert([
                    'name'  =>  $request->title,
                ]);

                return redirect(route('settings.diagnostic_test'))->with(['type' => 'success', 'message' => 'New diagnostic test added successfully !']);
            }

            public function dtEdit(Request $request){
                $diagnostic_test_info           =   DB::table('diagnostic_test')->where('id', $request->dt_id)->first();
                
                return Inertia::render('Settings/General/DiagnosticTest/Edit', [
                    'diagnostic_test_info' => $diagnostic_test_info,
                ]);
            }

            public function dtUpdate(Request $request){
                $request->validate([
                    'title'          => 'required',
                ]);

                DB::table('diagnostic_test')->where('id', $request->dt_id)->update([
                    'name'          =>  $request->title,
                    'updated_at'    => Carbon::now(),
                ]);
                
                return redirect(route('settings.diagnostic_test'))->with(['type' => 'success', 'message' => 'Diagnostic test updated successfully !']);
            }

            public function dtDestroy($id){
                DB::table('diagnostic_test')->where('id', $id)->delete();
                DB::table('diagnostic_test_categories')->where('dt_id', $id)->delete();
                DB::table('diagnostic_test_conditions')->where('dt_id', $id)->delete();

                $diagnostic_test_info    =   DB::table('diagnostic_test_details')->where('dt_id', $id)->get();
                if(!empty($diagnostic_test_info)){
                    foreach($diagnostic_test_info as $key=>$info){
                        if($info->image_location != ''){
                            if(Storage::exists($info->image_location)){
                                Storage::delete($info->image_location);
                            }
                        }
                    }
                }
                DB::table('diagnostic_test_details')->where('dt_id', $id)->delete();

                return redirect(route('settings.diagnostic_test'))->with(['type' => 'success', 'message' => 'Diagnostic deleted successfully !']);
            }

        /* Diagnostic Test Detail List */
            public function dtDetailsList(Request $request){
                $diagnostic_test_list           =   DB::table('diagnostic_test_details')->where('dt_id', $request->dt_id)->orderBy('ordering', 'asc')->get();
                $diagnostic_test_conditions     =   DB::table('diagnostic_test_conditions')->where('dt_id', $request->dt_id)->orderBy('score_capped', 'asc')->get();
                $diagnostic_test_categories     =   DB::table('diagnostic_test_categories')->where('dt_id', $request->dt_id)->get();

                return Inertia::render('Settings/General/DiagnosticTest/Details/Index', [
                    'diagnostic_test_id' => $request->dt_id,
                    'diagnostic_test_list' => $diagnostic_test_list,
                    'diagnostic_test_conditions' => $diagnostic_test_conditions,
                    'diagnostic_test_categories' => $diagnostic_test_categories
                ]);
            }

            public function dtDetailsCreate(Request $request){
                $redirect_url                   =   url()->previous();
                $diagnostic_test_list           =   DB::table('diagnostic_test_details')->where('dt_id', $request->dt_id)->orderBy('ordering', 'asc')->get();
                $diagnostic_test_categories     =   DB::table('diagnostic_test_categories')->where('dt_id', $request->dt_id)->get();

                return Inertia::render('Settings/General/DiagnosticTest/Details/Create', [
                    'diagnostic_test_id' => $request->dt_id,
                    'diagnostic_test_list' => $diagnostic_test_list,
                    'diagnostic_test_categories' => $diagnostic_test_categories,
                    'redirect_url' => $redirect_url,
                ]);
            }

            public function dtDetailsStore(Request $request){
                $request->validate([
                    'name'          => 'required',
                    'category_id'          => 'required',
                ]);

                if(empty($request->file())){
                    return back()->with(['type' => 'error', 'message' => 'Please upload an image !']);
                }

                $last_inserted_row  =   DB::table('diagnostic_test_details')->latest('ordering')->first();

                $latest_id  =   DB::table('diagnostic_test_details')->insertGetId([
                    'dt_id' => $request->dt_id,
                    'name' => $request->name,
                    'remarks' => $request->remarks,
                    'category_id' => $request->category_id,
                    'redirect_yes_id' => $request->redirect_yes,
                    'redirect_no_id' => $request->redirect_no,
                    'ordering' => $last_inserted_row ? $last_inserted_row->ordering + 1 : 1,
                ]);

                $file_path = Storage::putFile('diagnostic_test_photo', $request->file('image_file')[0]);

                DB::table('diagnostic_test_details')->where('id', $latest_id)->update([
                    'image_location'    => $file_path,
                    'updated_at'        => Carbon::now(),
                ]);

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$request->dt_id])->with(['type' => 'success', 'message' => 'New Item added successfully !']);
            }

            public function dtDetailsEdit(Request $request){
                $test_id                        =   $request->test_id;
                $dt_id                          =   $request->dt_id;
                $diagnostic_test_list           =   DB::table('diagnostic_test_details')->where('dt_id', $request->dt_id)->orderBy('ordering', 'asc')->get();
                $diagnostic_test_info           =   DB::table('diagnostic_test_details')->where('id', $request->test_id)->first();
                $diagnostic_test_conditions     =   DB::table('diagnostic_test_conditions')->where('dt_id', $request->dt_id)->orderBy('score_capped', 'asc')->get();
                $diagnostic_test_categories     =   DB::table('diagnostic_test_categories')->where('dt_id', $request->dt_id)->get();
                
                return Inertia::render('Settings/General/DiagnosticTest/Details/Edit', [
                    'test_id' => $test_id,
                    'dt_id' => $dt_id,
                    'diagnostic_test_list' => $diagnostic_test_list,
                    'diagnostic_test_info' => $diagnostic_test_info,
                    'diagnostic_test_conditions' => $diagnostic_test_conditions,
                    'diagnostic_test_categories' => $diagnostic_test_categories,
                ]);
            }

            public function dtDetailsUpdate(Request $request){

                $request->validate([
                    'name'          => 'required',
                ]);
                
                $diagnostic_test_info    =   DB::table('diagnostic_test_details')->where('id', $request->id)->first();

                if(!$diagnostic_test_info->image_location && empty($request->file())){
                    return back()->with(['type' => 'error', 'message' => 'Please upload an image !']);
                }
                
                DB::table('diagnostic_test_details')->where('id', $request->id)->update([
                    'name' => $request->name,
                    'remarks' => $request->remarks,
                    'category_id' => $request->category_id,
                    'redirect_yes_id' => $request->redirect_yes,
                    'redirect_no_id' => $request->redirect_no,
                    'updated_at'        => Carbon::now(),
                ]);

                if(!empty($request->file('image_file'))){

                    if(Storage::exists($diagnostic_test_info->image_location)){
                        Storage::delete($diagnostic_test_info->image_location);
                    }

                    $file_path = Storage::putFile('diagnostic_test_photo', $request->file('image_file')[0]);

                    DB::table('diagnostic_test_details')->where('id', $request->id)->update([
                        'image_location'    => $file_path,
                        'updated_at'        => Carbon::now(),
                    ]);
                }

                return redirect()->route('settings.diagnostic_test.details', ['dt_id' => $request->dt_id])->with(['type' => 'success', 'message' => 'Item updated successfully !']);
            }

            public function dtDetailsDestroy($id){   
                $diagnostic_test_info    =   DB::table('diagnostic_test_details')->where('id', $id)->first();
                
                if($diagnostic_test_info->image_location != ''){
                    if(Storage::exists($diagnostic_test_info->image_location)){
                        Storage::delete($diagnostic_test_info->image_location);
                    }
                }

                DB::table('diagnostic_test_details')->where('id', $id)->delete();

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$diagnostic_test_info->dt_id])->with(['type' => 'success', 'message' => 'Item deleted successfully !']);
            }

            public function dtDetailsSort(Request $request){
                foreach($request->sorted_list as $key=>$list){
                    DB::table('diagnostic_test_details')->where('id', $list['id'])->update([
                        'ordering' => $key+1
                    ]);
                }

                return redirect()->back()->with(['type' => 'success', 'message' => 'Item sorted successfully !']);
            }

        /* Diagnostic Test Conditions */
            public function dtConditionsCreate(Request $request){
                return Inertia::render('Settings/General/DiagnosticTest/Conditions/Create', [
                    'diagnostic_test_id' => $request->dt_id
                ]);
            }

            public function dtConditionsStore(Request $request){
                $request->validate([
                    'score'          => 'required',
                    'message'        => 'required',
                ]);

                DB::table('diagnostic_test_conditions')->insert([
                    'dt_id' =>  $request->dt_id,
                    'score_capped' =>  $request->score,
                    'message' =>  $request->message,
                ]);

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$request->dt_id])->with(['type' => 'success', 'message' => 'Condition added successfully !']);
            }

            public function dtConditionsEdit(Request $request){
                $condition_info = DB::table('diagnostic_test_conditions')->where('id', $request->condition_id)->first();

                return Inertia::render('Settings/General/DiagnosticTest/Conditions/Edit', [
                    'condition_info' => $condition_info
                ]);
            }

            public function dtConditionsUpdate(Request $request){
                $request->validate([
                    'score'          => 'required',
                    'message'        => 'required',
                ]);

                DB::table('diagnostic_test_conditions')->where('id', $request->condition_id)->update([
                    'score_capped'  =>  $request->score,
                    'message'       =>  $request->message,
                    'updated_at'    =>  Carbon::now(),
                ]); 

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$request->dt_id])->with(['type' => 'success', 'message' => 'Condition updated successfully !']);
            }

            public function dtConditionsDestroy($id){
                $dtInfo = DB::table('diagnostic_test_conditions')->where('id', $id)->first();
                DB::table('diagnostic_test_conditions')->where('id', $id)->delete();

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$dtInfo->dt_id])->with(['type' => 'success', 'message' => 'Condition added successfully !']);
            }

        /* Diagnostic Test Conditions */
            public function dtCategoriesCreate(Request $request){
                return Inertia::render('Settings/General/DiagnosticTest/Categories/Create', [
                    'diagnostic_test_id' => $request->dt_id
                ]);
            }

            public function dtCategoriesStore(Request $request){
                $request->validate([
                    'category_name'          => 'required',
                ]);

                DB::table('diagnostic_test_categories')->insert([
                    'dt_id' =>  $request->dt_id,
                    'name' =>  $request->category_name,
                ]);

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$request->dt_id])->with(['type' => 'success', 'message' => 'Categories added successfully !']);
            }

            public function dtCategoriesEdit(Request $request){
                $category_info = DB::table('diagnostic_test_categories')->where('id', $request->category_id)->first();
                
                return Inertia::render('Settings/General/DiagnosticTest/Categories/Edit', [
                    'category_info' => $category_info
                ]);
            }

            public function dtCategoriesUpdate(Request $request){
                $request->validate([
                    'category_name'          => 'required',
                ]);

                DB::table('diagnostic_test_categories')->where('id', $request->category_id)->update([
                    'name'          =>  $request->category_name,
                    'updated_at'    =>  Carbon::now(),
                ]); 

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$request->dt_id])->with(['type' => 'success', 'message' => 'Category updated successfully !']);
            }

            public function dtCategoriesDestroy($id){
                $dtInfo = DB::table('diagnostic_test_categories')->where('id', $id)->first();
                DB::table('diagnostic_test_categories')->where('id', $id)->delete();

                return redirect()->route('settings.diagnostic_test.details', ['dt_id'=>$dtInfo->dt_id])->with(['type' => 'success', 'message' => 'Category deleted successfully !']);
            }
}
