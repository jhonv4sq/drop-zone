import React, {useState} from 'react'
import GoogleLogin from 'react-google-login'
import SvgGoogle from './SvgGoogle'

const GoogleButton = () => {
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }
  return (
    <div className='w-full'>
        <GoogleLogin
            clientId="827149715061-if4f5h66aqaj681cjvsbb8ddda8o2uqu.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='relative text-white hover:text-slate-500 hover:border-slate-500 flex flex-row justify-center items-center w-full lg:w-[389px] h-[45px] border-2 rounded my-2'>
                <SvgGoogle className='absolute left-[15px] hover' />
                <p className='font-montserrat text-[16px] font-[500]'>
                    Login con Google
                </p>
            </button>
            )}
            cookiePolicy={'single_host_origin'}>
        </GoogleLogin>
        
    </div>
  )
}

export default GoogleButton
