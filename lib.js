

export default function myHTTP(){
    this.http = new XMLHttpRequest();
    }
    
    myHTTP.prototype.get = function(url, callback){
    
        this.http.open('GET', url, true);
    
        this.http.onload = function(){
            if(this.status === 200){
                callback(null, this.responseText);
            }else{
                callback("error", this.responseText);
            }
        };
    
        this.http.send();
    }; 