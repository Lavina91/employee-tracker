import React from 'react';
import HomePic from "../components/HomePic/HomePic"

function Home() {
    return (
        <div>
            
            <HomePic></HomePic>
            <p className="introP" style={{fontSize:"20px"}}>Having trouble keeping track of your employees, E.T is here to help. With E.T, 
            you can click on the search link above that will take you to a page displaying all your current employees non-sensitive information such as:
            full name, age, date of birth, cell phone and email address. You can also filter your table by the name of a certain employee.
            </p>
            
        </div>
    )
}

export default Home

