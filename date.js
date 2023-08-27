function Person(){
    this.name=name;
    this.age=age;
    this.place=place;

    this.all=()=>{
        console.log("Name: "+this.name+"Age: "+this.age +"place: "+this.place)
    }
}



var men=new Person("Usaid",17,"Malappuram")

men.all()