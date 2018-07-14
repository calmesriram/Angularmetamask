pragma solidity^0.4.0;
contract interview {
    
    struct records{
        uint256 ivid;
        string name;
        uint256 time;
        
    }
     mapping(uint256=>records)public map;
    
    function register(uint256 ivid,string name)public returns(string)
    {
        if(map[ivid].time <= now)
        {
        map[ivid].ivid = ivid;
         map[ivid].name = name;
         map[ivid].time= now + 1 minutes;
         
         return "Successfully register";
         
        }
        else
        {
            return "You have already register";
        }
        
    }
  
}
