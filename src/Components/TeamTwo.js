import React from 'react'
import b1 from "../teamImages/b 1.svg"
import b2 from "../teamImages/b2.svg"
import b3 from "../teamImages/b3.svg"
import b4 from "../teamImages/b4.svg"
import b5 from "../teamImages/b5.svg"
import b6 from "../teamImages/b6.svg"
import b7 from "../teamImages/b7.svg"
import b8 from "../teamImages/b8.svg"
import b9 from "../teamImages/b9.svg"
import b10 from "../teamImages/b10.svg"
import c1 from "../teamImages/c 1.svg"
import c2 from "../teamImages/c2.svg"
import c3 from "../teamImages/c3.svg"
import c4 from "../teamImages/c4.svg"
import c5 from "../teamImages/c5.svg"
import c6 from "../teamImages/c6.svg"
import c7 from "../teamImages/c7.svg"
import c8 from "../teamImages/c8.svg"
import c9 from "../teamImages/c9.svg"
import c10 from "../teamImages/c10.svg"
const TeamTwo = (props) => {
    return (
        <div className='team intro'>
            <div className="">
                <div>
                    <div className="col-md-7 intro-team main">
                        <h1>
                            {/* {props.data ? props.data.title : "Loading"} */}
                            Team
                            <span></span>
                        </h1>
                    </div>
                    <div className="col-md-5 intro-team" id="">
                        <div className='info-team'>
                            <p>name:</p>
                            <p>position:</p>
                            <p>statement: ......................................</p>
                            <p>email:</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='team-container'>

                <div className='team-member five'>
                    <img className='img member-black' alt='' src={b7} />
                    <img className='img member-color' alt='' src={c7} />
                </div>
                <div className='team-member six'>
                    <img className='s-img member-black' alt='' src={b10} />
                    <img className='s-img member-color' alt='' src={c10} />
                </div>
                <div className='team-member seven'>
                    <img className='img member-black' alt='' src={b8} />
                    <img className='img member-color' alt='' src={c8} />
                </div>
                <div className='team-member eight'>
                    <img className='s-img member-black' alt='' src={b9} />
                    <img className='s-img member-color' alt='' src={c9} />
                </div>
                <div className='team-member ten'>
                    <img className='img member-black' alt='' src={b4} />
                    <img className='img member-color' alt='' src={c4} />
                </div>
                <div className='team-member nine'>
                    <img className='img member-black' alt='' src={b2} />
                    <img className='img member-color' alt='' src={c2} />
                </div>

                <div className='team-member one'>
                    <img className='img member-black' alt='' src={b6} />
                    <img className='img member-color' alt='' src={c6} />
                </div>
                <div className='team-member two'>
                    <img className='img member-black' alt='' src={b5} />
                    <img className='img member-color' alt='' src={c5} />
                </div>
                <div className='team-member three'>
                    <img className='l-img member-black' alt='' src={b3} />
                    <img className='l-img member-color' alt='' src={c3} />
                </div>
                <div className='team-member four'>
                    <img className='img member-black' alt='' src={b1} />
                    <img className='img member-color' alt='' src={c1} />
                </div>
            </div>
        </div>
    )
}
export default TeamTwo;