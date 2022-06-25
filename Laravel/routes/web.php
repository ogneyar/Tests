<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('home');
})->name('home');

Route::post('/', function () {
    return view('home');
})->name('home_post');

Route::get('/details', function () {
    return view('details.details');
})->name('details');

Route::post('/details', function () {
    return view('details.details');
})->name('details_post');

Route::get('/category', function () {
    return view('category.category');
});

Route::post('/category', function () {
    return view('category.category');
});

Route::get('/support', function () {
    return view('support.support');
});

Route::get('/about', function () {
    return view('about.about');
});





Route::post('/upload', function () {
    return view('upload');
});
Route::get('/upload', function () {
    return view('upload');
});
Route::get('/welcome', function () {
    return view('welcome');
})->name('welcome');


Route::get('/test', function () {
    return view('test');
})->name('test');

Route::get('/test/1', 'App\Http\Controllers\testController@test')->name('test-form');
Route::post('/test/1', 'App\Http\Controllers\testController@post')->name('test-form-post');

Route::get('/test2', function () {
    return view('test_img');
})->name('test_img');