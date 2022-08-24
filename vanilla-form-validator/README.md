# Vanilla Form Validator.

vanilla form validator is **js form library** (not yet available in **NPM**).<br/>
written using vanilla javascript.

## Usage.

#### set up html

 + create your form in **index.html** 
 + give every input a unique id attribute.

```html
<form action="example.com" id="main-form">
	<input type="text" name="username" id="username"/>
	<input type="email" name="email" id="email"/>
	<input type="password" name="password" id="password"/>
	<input type="submit"/>
</form>
```

#### set up javascript

 + import `FormValidator` and initialize it.
 + pass in the id selector for your form.

```js
import FormValidator from "vanilla-form-validator";

const fv=new FormValidator("#main-form");
```

#### add inputs for validation.

 + add inputs that you want to be validated using `addInput` method;
 + `addInput` takes two parameters.
 	- **first parameter** is the `id selector` of your input.
 	- **second parameter** is the `options object` specifying what properties in input to be validated.

```js

fv.addInput("#username",{required:true});

fv.addInput("#email",{required:true})

fv.addInput("#password",{required:true});

```

### options.

 + **required**
 + **minLength**
 + **maxLength**
 + **email**
 + **specialCharacters**
 + **numbers**

```js

fv.addInput("#username",{required:true,
	minLength:2
});

fv.addInput("#email",{required:true,
	email:true//email has to be valid
});

fv.addInput("#password",{
	required:true,
	maxLength:15,
	specialCharacters:true,//special characters are required
	numbers:true//numbers are required
});

```