/*
 * @Author: Diana Tang
 * @Date: 2024-10-10 00:18:10
 * @LastEditors: Diana Tang
 * @Description: 实现一个和 tailwindcss 官网一致的 header
 * @FilePath: /blog-frontend/src/components/Header.js
 */
import React from 'react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md sm:px-6 lg:px-8">
            <div className="flex items-center flex-1">
                <a href="/" className="flex items-center">
                    {/* 这里替换成您的 logo */}
                    <img className="h-8 w-auto" src="/path-to-your-logo.svg" alt="Your Logo" />
                    <span className="ml-2 text-xl font-bold">您的网站名</span>
                </a>
            </div>

            {/* 桌面端导航 */}
            <nav className="hidden md:flex space-x-10">
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">文档</a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">组件</a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">博客</a>
                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">关于</a>
            </nav>

            {/* 移动端菜单按钮 */}
            <div className="flex items-center md:hidden">
                <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="sr-only">打开主菜单</span>
                    {/* 这里可以添加一个汉堡菜单图标 */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* 移动端菜单 */}
            {isMenuOpen && (
                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                {/* 这里替换成您的 logo */}
                                <img className="h-8 w-auto" src="/path-to-your-logo.svg" alt="Your Logo" />
                            </div>
                            <div className="-mr-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="sr-only">关闭主菜单</span>
                                    {/* 这里可以添加一个关闭图标 */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">文档</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">组件</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">博客</a>
                            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">关于</a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;