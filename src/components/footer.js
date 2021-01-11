import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="bg-dark text-light mt-3">
                <div className="container py-2 text-center">
                    <p className="mb-0">Developed By :
                    <span style={{ color: "#ffc107" }}>Ashish</span>
                    . Using React JS integrated with external movies data API
                    <a href="https://www.omdbapi.com/" rel="noreferrer" target="_blank">OMDB</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
