import axios from 'axios'
const token = localStorage.getItem('accessToken')

export default axios.create({
    
        baseURL: 'https://api.noroff.dev/api/v1',
        headers:
        {Authorization: `Bearer ${token}`
  }
        
        

    }
)