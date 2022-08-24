export default class Input{
	constructor(input,options){
		this.input=input;
		this.options=options;
		this.message=document.createElement("div");
		this.message.classList.add("message");
		this.message.style.fontSize="0.8em";
		this.message.style.margin="0.5em";
		this.input.insertAdjacentElement("afterEnd",this.message);
	}

	setMessage(message,type){
		if(type=="bad"){
			this.message.style.color="red";
		}else if(type=="good"){
			this.message.style.color="green";
		}

		this.message.innerText=message;
	}

	checkOption(option,condition,errMessage){
		if(!option){
			return false;
		}else if(option&&condition){
			this.setMessage(errMessage,"bad");
			return true;
		}
	}

	checkRequired(){
		const condition=this.input.value=="";
		return this.checkOption(this.options.required,condition,"input is required");
	}

	checkMaxLength(){
		const condition=this.input.value.length>this.options.maxLength;
		const option=this.options.maxLength;
		return this.checkOption(option,condition,`no more than ${this.options.maxLength} letters allowed`)
	}

	checkMinLength(){
		const condition=this.input.value.length<this.options.minLength;
		const option=this.options.minLength;
		return this.checkOption(option,condition,`no less than ${this.options.minLength} letters allowed`)
	}

	checkEmail(){
		const condition=!/\w*@\w*.com/.test(this.input.value);
		const option=this.options.email;
		return this.checkOption(option,condition,`${this.input.value} is invalid`);
	}

	checkSpecialCharacters(){
		const condition=!/[!@#\$%\^&\*\?]/.test(this.input.value);
		const option=this.options.specialChars;
		return this.checkOption(option,condition,`must contain atleast 1 special character`)
	}

	checkNumber(){
		const condition=!/\d+/.test(this.input.value);
		const option=this.options.numbers;
		return this.checkOption(option,condition,`must contain atleast 1 number`);
	}

	validate(){
		this.setMessage("");
		if(this.checkRequired()){
			return false;
		}

		if(this.checkMaxLength()){
			return false;
		}

		if(this.checkMinLength()){
			return false;
		}

		if (this.checkSpecialCharacters()){
			return false;
		}

		if(this.checkNumber()){
			return false;
		}

		if(this.input.type=="email"){
			if(this.checkEmail()){
				return false;
			}
		}

		return true;
	}
}