import React from 'react'
import { Link } from 'react-scroll'
import Button from './layout/Button'

function Home() {
  return (
    <div>
      <div>
        <h2>CISKA</h2>
        <span>founded by</span>
        <p>
            CISKA youth social trust was founded by Dr.M Veeraseenu
            in 2008 for the well being of students who are unable to 
            pay thier education fee and for the educational institute who
            who didn't have much facility for thier students.
            the members of this trusts includes the students of <a href='cit.edu.in'>COIMBATORE INSTITUTE OF TECHNOLOGY</a>,
            JANSON ENGINEEERING COLLEGE AND TAMILNADU ENGINEERING COLLEGE
        </p>
        <Link to='' spy={true} smooth={true} duration={500}>
           <Button/>
        </Link>
      </div>
    </div>
  )
}

export default Home