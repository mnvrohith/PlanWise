import React from 'react'
import {useForm} from 'react-hook-form' 

const Login = () => { 
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const navigate = useNavigate();

  useEffect(() => {
    // This effect runs once when the component mounts
    // You can add any initialization logic here

  }, [])
  return (
    <div>

    </div>
  )
}

export default Login
