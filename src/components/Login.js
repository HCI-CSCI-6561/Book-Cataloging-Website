import React from 'react'

export default function Login () {
  return (
    <div className='login_form'>
        <form>
            <h2 className='text-center text-lg font-bold'>Login</h2>
            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Username
                </label>
                <imput type='text' label='Name'></imput>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <input type='password' label='password'></input>
            </div>
        </form>
    </div>
  )
}
