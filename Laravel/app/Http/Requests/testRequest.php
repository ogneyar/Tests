<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class testRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return True;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => "require|min:3|max:10",
            'mail' => "require|min:3|max:10",
            'text' => "require|min:3|max:10"
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "Поле name должно быть заполнено",
            'mail.required' => "Поле mail должно быть заполнено",
            'text.required' => "Поле text должно быть заполнено"
        ];
    }

}
