import Input from "./Input.js";

export default class FormValidator{
	constructor(selector){
		this.form=document.querySelector(selector);
		this.handleSubmit();
		this.inputs=[];
		this.payload={};
	}

	addInput(selector,options){
		this.inputs.push(new Input(this.form.querySelector(selector),options));
	}

	setPayload(){
		for(let input of this.form.querySelectorAll("input")){
			let name=input.name;
			let value=input.value;
			this.payload[name]=value;
		}
	}

	submitForm(){
		this.setPayload();
		this.form.submit();
	}

	handleSubmit(){
		this.form.addEventListener("submit",(event)=>{
			event.preventDefault();
			let submit=true;
			for(let input of this.inputs){
				if(!input.validate()){
					submit=false;
				}
			}

			if(submit){
				this.submitForm();
				return;
			}
		});
	}
}