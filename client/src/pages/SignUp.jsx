import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
 
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              مرتضی
            </span>
            وبلاگ
          </Link>
          <p className='text-sm mt-5'>
           این پروژه یک نمونه است, وشما میتوانید باحساب گوگل تان ثبت نام کنید
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='نام کابری' />
              <TextInput
                type='text'
                placeholder='نام کاربری'
                id='username'
              />
            </div>
            <div>
              <Label value='ایمیل شما' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
              />
            </div>
            <div>
              <Label value='رمزعبورشما' />
              <TextInput
                type='password'
                placeholder='رمزعبور'
                id='password'
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
            >
            ثبت نام
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>آیاحساب کاربری دارید؟</span>
            <Link to='/sign-in' className='text-blue-500'>
              ورود
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
