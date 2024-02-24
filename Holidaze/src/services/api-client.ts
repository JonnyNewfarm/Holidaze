import axios from 'axios'
const accessToken = localStorage.getItem("accessToken")

export default axios.create({
    
        baseURL: 'https://api.noroff.dev/api/v1', 
        
        headers: {'Authorization': `Bearer ${accessToken}`}

    }
)