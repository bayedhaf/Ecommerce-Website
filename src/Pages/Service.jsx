const Service = () => {
    return (
       <div className="mt-10 mb-10 bg-gradient-to-br from-orange-50 to-amber-50 flex flex-wrap justify-around py-12 gap-6 sm:gap-8 px-4 sm:px-8 sm:flex-col md:flex-row lg:flex-row shadow-lg hover:shadow-xl transition-shadow duration-500 rounded-xl">
    
        <div className="flex flex-col gap-3 p-6 sm:p-8 text-nowrap w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg border border-orange-100">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-full animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h2 className="font-bold text-black text-lg sm:text-xl">Free Delivery</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed overflow-y-auto">For all orders over $3 with additional discount</p>
        </div>

      
        <div className="flex flex-col gap-3 p-6 sm:p-8 text-nowrap w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg border border-orange-100">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-full animate-pulse delay-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
                <h2 className="font-bold text-black text-lg sm:text-xl">90 Day Return</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed overflow-y-auto">If goods have any problems or defects</p>
        </div>

      
        <div className="flex flex-col gap-3 p-6 sm:p-8 text-nowrap w-full max-w-xs bg-white/80 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg border border-orange-100">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 rounded-full animate-pulse delay-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h2 className="font-bold text-black text-lg sm:text-xl">Secure Payment</h2>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed overflow-y-auto">Currently being implemented (coming soon)</p>
        </div>
       </div>
    );
};

export default Service;