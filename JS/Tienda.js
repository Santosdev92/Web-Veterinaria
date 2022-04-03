function vermas(id) {
    if (document.getElementById(id).style.display = "none") 
    {
        document.getElementById(id).style.display = "block";
        document.getElementById(id+1).style.display = "none";
        document.getElementById(id+2).style.display = "block";
        

    }
}

function vermenos(id) {
    if (document.getElementById(id).style.display = "block") 
    {
        document.getElementById(id).style.display = "none";
        document.getElementById(id+1).style.display = "block";
        document.getElementById(id+2).style.display = "none";

    }
}