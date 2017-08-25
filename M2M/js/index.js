function newvalue( a, b, c){
    
    if( a === undefined && b === undefined && c === undefined){
        
        return 'Verifique todo os valroes';
    } 
    
    else if( a !== undefined && b === undefined && c === undefined){
        
        return a;
    }
    
    else if(a !== undefined && b !== undefined && c === undefined){
        
        return a + b;
    }
    
    else if( a !== undefined && b !== undefined && c !== undefined){
        
        return ( a + b) * c;
    }
    
    else{
        
        return null;
    }
}

