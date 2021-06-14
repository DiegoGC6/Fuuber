import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import '../components/containers.css'

function ClaimReward() {
    const [restaurantLetter, setRestaurantLetter] = useState('')
    const [reward, setReward] = useState('')

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let alphabetButtons = []

    for (let letter in alphabet) {
        function handleLetterOnClick() {
            setRestaurantLetter(restaurantLetter + document.getElementById(alphabet[letter]).value)
        }

        alphabetButtons.push(<button id={alphabet[letter]} value={alphabet[letter]} onClick={handleLetterOnClick}>{alphabet[letter]}</button>)
    }

    function handleClearOnClick() {
        setRestaurantLetter('')
        setReward('')
    }

    function handleSubmitOnClick() {
        if (restaurantLetter==='TIMHORTONS') {
            setReward(<div>Congrats! You won a free DONUT</div>)
        } else if (restaurantLetter==='PETERS') {
            setReward(<div>Congrats! You won a free MEAL</div>)
        } else if (restaurantLetter==='HUTCHCAFE') {
            setReward(<div>Congrats! You won a free COFFEE</div>)
        } else if (restaurantLetter==='TOKYOSTATION') {
            setReward(<div>Congrats! You won a free MEAL</div>)
        } else if (restaurantLetter==='BENNYS') {
            setReward(<div>Congrats! You won a free PANCAKE</div>)
        }
    }

    return (
        <>
            <HeaderLoggedIn />
            <Container style={{ paddingTop: "20px" }}>
                <section class="jumbotron text-center">
                    <div class="container">
                        <h1 class="jumbotron-heading">Claim Reward</h1>
                        <p class="lead text-muted">
                            What restaurant can you name?
                        </p>
                    </div>
                    <div className='restaurant-name' style={{ borderBottom: '1px solid black' }}>
                        {restaurantLetter}
                    </div>
                    <div className='alphabet-buttons' style={{ padding: '1rem' }}>
                        {alphabetButtons}
                    </div>
                    <div>
                        <button onClick={handleSubmitOnClick}>Submit</button> <button onClick={handleClearOnClick}>Clear</button>
                    </div>
                    {reward}
                </section>
            </Container>
        </>
    );
}
export default ClaimReward;