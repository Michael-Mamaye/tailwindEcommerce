import React from 'react'
import '../../index.css'
function Home() {
    return (
        <div>
        <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
            </div>
            <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                <p class="text-gray-500">You have a new message!</p>
            </div>
           
        </div>

            
               <button class='grid-flow-row p-3 bg-red-200'>click me</button>
               <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                Click me
                </button>
        </div>
        
           
          
        
    )
}

export default Home
