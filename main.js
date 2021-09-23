var image=["family.jpg","Grandfather.png","Father.jpg","Mother.jpg","Brother.jpg","sister.jpg","Myself.jpg"];
var names=["My family Book","Baba Shree Ram Singh","Papa Pauhari Singh", "Maa Sunita Singh","Bhai Mayank Singh" ,"Sister Anupriya Singh","Shivam Singh"];
var count=0;
function change(){
    if(count==7){
        count=0;
    }
    document.getElementById("family").src=image[count];
    document.getElementById("family_name").innerHTML=names[count];
    count++;
}