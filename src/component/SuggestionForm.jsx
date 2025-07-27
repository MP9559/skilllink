import React from 'react'
const SuggestionForm = () => {
  const username = localStorage.getItem("username") || "Guest";
  return (

    <div>
       <div className="min-h-screen">
      <div className="px-18 mt-16">
        <p className="text-3xl font-medium text-gray-700">
          Hey {username},
        </p>
      </div>
    </div>
    </div>
  )
}

export default SuggestionForm