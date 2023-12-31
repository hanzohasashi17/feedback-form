<?php

namespace App\Http\Controllers;

use App\Models\Claim;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ClaimController extends Controller
{
    public function show()
    {
        return Inertia::render('Claim', [
            'claims' => Claim::all(),
        ]);
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        Claim::create([
            'category' => $request->category,
            'title' => $request->title,
            'message' => $request->message,
            'user_name' => $user->name,
            'user_email' => $user->email,
            'user_id' => $user->id,
        ]);

        return Redirect::route('claim.show');
    }

//    public function filterCategory(FormRequest $request)
//    {
//        return Inertia::render('Claim', [
//            'claims' => Claim::where('category', '=', $request->category)->get()
//        ]);
//    }

    public function responseToClaimView($id)
    {
        return Inertia::render('ResponsePage', [
            'id' => $id
        ]);
    }

    public function responseToClaim(Request $request)
    {
        Claim::where('id', $request->id)->update(['response' => $request->response]);

        return Redirect::route('claim.show');
    }
}
