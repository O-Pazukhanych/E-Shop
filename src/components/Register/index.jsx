import React from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineUser } from 'react-icons/ai';

const Register = () => {
	const [fullName, setFullName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [avatarUrl, setAvatarUrl] = React.useState(null);
	const [visible, setVisible] = React.useState(false);

	const handleSubmit = () => {
		console.log("fffffffff");
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		setAvatarUrl(file);
	};

	return (
		<div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-md'>
				<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
					Register as a new user
				</h2>
			</div>
			<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form className="space-y-6">
						<div>
							<label htmlFor='fullName' className='block text-sm font-medium text-gray-700'>
								Full name
							</label>
							<div className="mt-1">
								<input
									type="text"
									name="fullName"
									autoComplete='name'
									required
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									className='appearance-none w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 sm:text-sm'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='email' className='block text-sm font-medium text-gray-700'>
								Email address
							</label>
							<div className="mt-1">
								<input
									type="email"
									name="email"
									autoComplete='email'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className='appearance-none w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 sm:text-sm'
								/>
							</div>
						</div>
						<div>
							<label htmlFor='password' className='block text-sm font-medium text-gray-700'>
								Password
							</label>
							<div className="mt-1 relative">
								<input
									type={visible ? 'text' : 'password'}
									name="password"
									autoComplete='current-password'
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className='appearance-none w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 sm:text-sm'
								/>
								{
									visible ?
										<AiOutlineEye
											className='absolute cursor-pointer top-2 right-2'
											onClick={() => setVisible(false)}
											size={25}
										/> :
										<AiOutlineEyeInvisible
											className='absolute cursor-pointer top-2 right-2'
											onClick={() => setVisible(true)}
											size={25}
										/>
								}
							</div>
						</div>
						<div>
							<label
								htmlFor='avatarUrl'
								className='text-sm block font-medium text-gray-700'
							>
							</label>
							<div className='mt-2 flex items-center'>
								<span className='rounded-full inline-block h-10 w-10 overflow-hidden'>
									{
										avatarUrl ?
											<img
												src={URL.createObjectURL(avatarUrl)}
												alt='avatar'
												className='h-full w-full rounded-full object-cover'
											/> :
											<AiOutlineUser className='h-10 w-10 border-[3px] rounded-full border-black' />
									}
								</span>
								<label
									htmlFor='file-input'
									className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-300 cursor-pointer'
								>
									<span>Upload a file</span>
									<input
										type="file"
										name="avatarUrl"
										id="file-input"
										accept='.jpg,.jpeg,.png,.webp'
										onChange={handleFileInputChange}
										className='sr-only'
									/>
								</label>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className='relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
							>
								Submit
							</button>
						</div>
						<div className="flex items-center w-full">
							<h4>Already have an account?</h4>
							<Link to="/login" className='pl-2 text-blue-600'>
								Sign in
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register;