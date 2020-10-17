import React from 'react';

import SubscribeForm from '../components/SubscribeForm';

const Footer: React.FC<{}> = () => {
    return (
        <div className='border-t pt-6 pb-16 border-gray-400'>
            <div className='ml-auto mr-auto max-w-3xl px-2 lg:px-0'>
                <SubscribeForm />
                <div>
                    <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Products</h3>
                    <ul className='flex flex-wrap -ml-1 -mr-1'>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://1loc.dev"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="1 LOC - favorite JavaScript utilities in single line of code"
                            >
                                <div className='font-semibold flex items-center'>
                                    1 LOC 
                                    <span className='bg-green-600 font-normal ml-1 p-1 rounded text-sm text-white'>new</span>
                                </div>
                                <span className='text-gray-600'>favorite JavaScript utilities in single line of code</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://blur.page"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="BlurPage - a browser extension to hide sensitive element on page"
                            >
                                <div className='font-semibold'>Blur Page</div>
                                <span className='text-gray-600'>a browser extension to hide sensitive element on page</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://checkbrowsers.support"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="Check Browsers Support - a browser extension to check browser compatibility without leaving your tab"
                            >
                                <div className='font-semibold'>Check Browsers Support</div>
                                <span className='text-gray-600'>a browser extension to check browser compatibility without leaving your tab</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://csslayout.io"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="CSS Layout - a collection of popular layouts and patterns made with CSS"
                            >
                                <div className='font-semibold'>CSS Layout</div>
                                <span className='text-gray-600'>a collection of popular layouts and patterns made with CSS</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://fakenumbers.io"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="Fake Numbers - a JavaScript library to fake a number"
                            >
                                <div className='font-semibold'>Fake Numbers</div>
                                <span className='text-gray-600'>a JavaScript library to fake a number</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://formvalidation.io"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="FormValidation - the best validation library for JavaScript"
                            >
                                <div className='font-semibold'>Form Validation</div>
                                <span className='text-gray-600'>the best validation library for JavaScript</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://htmldom.dev"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="HTML DOM - Common tasks of managing HTML DOM with native API"
                            >
                                <div className='font-semibold'>HTML DOM</div>
                                <span className='text-gray-600'>common tasks of managing HTML DOM with vanilla JavaScript</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://react-pdf-viewer.dev"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="React PDF Viewer - a PDF viewer made for React"
                            >
                                <div className='font-semibold'>React PDF Viewer</div>
                                <span className='text-gray-600'>a PDF viewer made for React</span>
                            </a>
                        </li>
                        <li className='w-1/2 sm:w-1/3 px-1 mb-6'>
                            <a
                                href="https://thisthat.dev"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="this VS that - the differences between ___ and ___ in the front-end development"
                            >
                                <div className='font-semibold'>this VS that</div>
                                <span className='text-gray-600'>the differences between ___ and ___ in the front-end development</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='mt-6'>
                    <h3 className='text-xl sm:text-2xl font-semibold mb-2'>Follow me <span className='font-light text-gray-600 ml-2'>I love building products!</span></h3>
                    <ul className='flex'>
                        <li className='flex-1'>
                            <a
                                href="https://twitter.com/nghuuphuoc"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <div className='font-semibold'>Twitter</div>
                                <span className='text-gray-600'>@nghuuphuoc</span>
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="https://dev.to/phuocng"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <div className='font-semibold'>dev.to</div>
                                <span className='text-gray-600'>@phuocng</span>
                            </a>
                        </li>
                        <li className='flex-1'>
                            <a
                                href="https://github.com/phuoc-ng"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <div className='font-semibold'>GitHub</div>
                                <span className='text-gray-600'>@phuoc-ng</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='pt-4'>
                    © 2020 Nguyen Huu Phuoc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
