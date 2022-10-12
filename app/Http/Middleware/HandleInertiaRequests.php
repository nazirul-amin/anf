<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Models\Menu;
use App\Models\RoleHasPermissions;
use App\Models\UserHasRoles;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        if($request->user()){
            /* get user permissions */
            $user_roles =   collect(UserHasRoles::where('user_id', $request->user()->ID)->get('role_id'));
            $roles      =   RoleHasPermissions::with('permission')->whereIn('role_id', $user_roles)->get();
    
            if(!empty($roles)){
                foreach($roles as $key=>$role){
                    if($role->permission != ''){
                        $can[$role->permission->name] = true;
                    }
                }
            }

            $can['is_impersonated'] = Auth::user()->isImpersonated();
        }
        
        return array_merge(parent::share($request), [
            'app_name' => config('app.name'),
            'auth' => [
                'user' => $request->user(),
                'profile_photo' => $request->user() ? DB::table('user_basic_information')->where('user_id', $request->user()->ID)->pluck('user_photo')->first() : '',
                'first_time_login' => $request->user()->first_time_login ?? '',
                'profile_updated' => $request->user()->profile_updated ?? ''
            ],
            'flash' => [
                'type' => fn () => $request->session()->get('type'),
                'message' => fn () => $request->session()->get('message')
            ],
            'menu' => Menu::getAllMenu(),
            'can' => $can ?? '',
            'notifications' => $request->user() ? DB::table('notifications')->where('user_to_notify', $request->user()->ID)->limit(5)->orderByDesc('id')->get() : '',
            'notification_counts' => $request->user() ? DB::table('notifications')
                                                            ->where('user_to_notify', $request->user()->ID)
                                                            ->where('seen', false)
                                                            ->count() : '',
            'allowed_centres' => $request->user() ? DB::table('user_has_centres')
                                                        ->join('wpvt_10_wlsm_schools', 'user_has_centres.centre_id', '=', 'wpvt_10_wlsm_schools.ID')
                                                        ->where('user_id', $request->user()->ID)
                                                        ->get(['wpvt_10_wlsm_schools.ID', 'wpvt_10_wlsm_schools.label']) : ''

        ]);
    }
}
