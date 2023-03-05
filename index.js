class User {
    constructor(name,email,age,location){
        this.name =name;
        this.age=age;
        this.location =location;
        this.email =email;
    }
    displayInfor(){
        const userInfoDiv = document.getElementById("infor").appendChild(Node);
        userInfoDiv.innerHTML=`<p>Name:${this.name}</p>
        <p>Age:${this.age}</p>
        <p>Email:${this.email}</p>
        <p>Location:${this.location}</p>`
    }
}
const user = new User("John Doe","30","johndoe@gmail.com","Canada")
user.displayInfor();
class Image{
    constructor(src,alt,width,height){
        this.src=src;
        this.alt=alt;
        this.width=width;
        this.height=height;

    }
    createHTML(){
        const img = document.createElement( "img")
        img.src=this.src;
        img.alt=this.alt;
        img.width=this.width;
        img.height=this.height;
        document.body.appendChild(img);
    }
   

}
