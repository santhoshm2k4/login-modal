"use client"

import { useState } from 'react';

export default function LoginModal() {
    const [category, setCategory] = useState('Student');
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ id: false, password: false });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const handleLogin = () => {
        // Check if both ID and password fields are filled and valid (at least 6 characters)
        if (id.length < 6 || password.length < 6) {
            // Set error state for fields that don't meet the requirements
            setError({ id: id.length < 6, password: password.length < 6 });
        } else {
            // Clear error state if both fields are valid
            setError({ id: false, password: false });
            // Log the login attempt with category, ID, and password
            console.log(`Login as ${category}: ID=${id}, Password=${password}`);
        }
    };
    
    const handleForgotPassword = () => {
        // Log redirection to password recovery page
        console.log('Redirecting to password recovery page...');
    };
    
    const resetFields = () => {
        // Reset ID and password fields and clear error states
        setId('');
        setPassword('');
        setError({ id: false, password: false });
    };
    
    const getCategoryIcon = (type) => {
        // Render the appropriate icon based on the selected category
        if (type === 'School') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            );
        } else if (type === 'Instructor') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block mr-2">
                    <circle strokeLinecap="round" strokeLinejoin="round" cx="4.33" cy="6.75" r="2.4" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="6.25 23.52 6.25 17.77 7.21 16.81 7.21 11.06 1.46 11.06 1.46 16.81 2.42 17.77 2.42 23.52" />
                    <line strokeLinecap="round" strokeLinejoin="round" x1="0.5" y1="1.48" x2="23.5" y2="1.48" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="9.13 16.81 21.58 16.81 21.58 1.48 9.13 1.48" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="10.08 11.06 12.96 8.19 14.88 10.1 17.75 7.23" />
                </svg>
            );
        } else if (type === 'Student') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 inline-block mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12,12h0a9.55,9.55,0,0,1,9.55,9.55v1a0,0,0,0,1,0,0H2.45a0,0,0,0,1,0,0v-1A9.55,9.55,0,0,1,12,12Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.23,1.5h9.55a0,0,0,0,1,0,0V7.23A4.77,4.77,0,0,1,12,12h0A4.77,4.77,0,0,1,7.23,7.23V1.5A0,0,0,0,1,7.23,1.5Z" />
                    <polyline strokeLinecap="round" strokeLinejoin="round" points="7.23 4.36 12 5.32 16.77 4.07" />
                    <line strokeLinecap="round" strokeLinejoin="round" x1="3.41" y1="1.5" x2="20.59" y2="1.5" />
                    <line strokeLinecap="round" strokeLinejoin="round" x1="16.77" y1="12.95" x2="13.35" y2="16.38" />
                    <line strokeLinecap="round" strokeLinejoin="round" x1="10.65" y1="16.38" x2="7.23" y2="12.95" />
                    <circle strokeLinecap="round" strokeLinejoin="round" cx="12" cy="17.73" r="1.91" />
                </svg>
            );
        }
    };
    

    return (
        <>
            {/* Modal Background: Fullscreen with radial gradient */}
            <div className="fixed inset-0 flex items-center justify-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#44195e_100%)]">
                {/* Modal Container: Centered with a dark background and styled border */}
                <div className="bg-[#12061c] p-6 rounded-lg shadow-lg max-w-md w-full text-[#73feff] border-2 border-[#00bbf9] md:p-6 sm:p-4">
                    {/* Login Header */}
                    <h2 className="text-2xl font-bold mb-4 text-center text-[#00bbf9] sm:text-xl">
                        LOGIN
                    </h2>
    
                    {/* Category Switcher: Buttons for selecting login category */}
                    <div className="flex justify-center space-x-4 mb-6">
                        {['Student', 'Instructor', 'School'].map((type) => (
                            <button
                                key={type}
                                onClick={() => {
                                    setCategory(type); // Set selected category
                                    resetFields(); // Reset input fields
                                }}
                                className={`px-4 py-2 rounded-2xl transition-all duration-300 border-2 border-transparent 
                                    ${category === type ? 'bg-[#d30162] text-white hover:bg-[#d30162] hover:border-[#d30162] hover:shadow-neon1' 
                                    : 'bg-[#00bbf9] text-white hover:bg-[#00bbf9] hover:border-[#00bbf9] hover:shadow-neon2'} 
                                    sm:px-2 sm:py-1`}
                            >
                                {getCategoryIcon(type)} {/* Render category icon */}
                                <span className="sm:text-sm">{type}</span>
                            </button>
                        ))}
                    </div>
    
                    {/* Display Selected Category */}
                    <div className="text-center mb-6 pt-6 text-lg neon-svg text-[#73feff] sm:text-base">
                        Login as {getCategoryIcon(category)}
                    </div>
    
                    {/* Dynamic ID Field */}
                    <div className="mb-4">
                        <label className="block mb-2 transition-all duration-300 sm:text-sm">
                            {category} ID
                        </label>
                        <div
                            className={`flex justify-center items-center w-full p-2 rounded-3xl border-2 
                                ${error.id ? 'border-red-500' : 'border-[#00bbf9]'} 
                                bg-[#12061c] text-[#73feff] focus-within:border-[#90fefe] transition-all duration-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
    
                            <input
                                type="text"
                                className="w-full p-2 bg-transparent text-[#73feff] focus:outline-none placeholder-[#6E3E9B] sm:text-sm"
                                value={id}
                                onChange={(e) => setId(e.target.value)} // Handle ID input change
                                placeholder="Enter ID"
                            />
                        </div>
                    </div>
    
                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block mb-2 transition-all duration-300 sm:text-sm">
                            Password
                        </label>
                        <div
                            className={`flex justify-center items-center w-full p-2 rounded-3xl border-2 
                                ${error.password ? 'border-red-500' : 'border-[#00bbf9]'} 
                                bg-[#12061c] text-[#73feff] focus-within:border-[#90fefe] transition-all duration-300`}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                />
                            </svg>
    
                            <input
                                id="password"
                                type={isPasswordVisible ? 'text' : 'password'} // Toggle password visibility
                                className="w-full p-2 bg-transparent text-[#73feff] focus:outline-none placeholder-[#6E3E9B] sm:text-sm"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Handle password input change
                                placeholder="Enter Password"
                            />
    
                            {/* Password Visibility Toggle */}
                            <svg
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)} // Toggle visibility on click
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 cursor-pointer hover:text-[#00bbf9] transition-all duration-200"
                            >
                                {isPasswordVisible ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                )}
                            </svg>
                        </div>
                    </div>
    
                    {/* Forgot Password Link */}
                    <div className="mb-4 text-right">
                        <button onClick={handleForgotPassword} className="text-[#00bbf9]">
                            Forgot Password?
                        </button>
                    </div>
    
                    {/* Error Message Display */}
                    <div className="h-4 mb-4">
                        {error.id && error.password ? (
                            <p className="text-red-500 text-sm transition-opacity duration-300">
                                Both ID and Password must be at least 6 characters.
                            </p>
                        ) : error.id ? (
                            <p className="text-red-500 text-sm transition-opacity duration-300">
                                ID must be at least 6 characters.
                            </p>
                        ) : error.password ? (
                            <p className="text-red-500 text-sm transition-opacity duration-300">
                                Password must be at least 6 characters.
                            </p>
                        ) : null}
                    </div>
    
                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full p-2 text-lg font-bold text-white bg-[#d30162] rounded-3xl hover:bg-[#d30162] hover:shadow-neon1 transition-all duration-300 sm:text-sm"
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </>
    );
    
    
    
}
