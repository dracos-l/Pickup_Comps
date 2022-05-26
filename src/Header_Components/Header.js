import React from "react";
import './Headers.css';

class Header extends React.Component {
    render() {
      return(
        <div>
            <h2 class="wrap"> Pickup Basketball Comps</h2>

            <br />

            
            <p> 
              Welcome to our <b>Pickup Basketball Comp Page</b>! This is a website that is meant to tell you exactly who you play like
              from the 2021-2022 NBA Season! Here's how it works. <br /><br />  Below is a form of roughly 30 questions. How most of the questions
              work is that you answer in terms of your <i>percentile</i>. Say I'm playing a 5 on 5 pickup game. And hypothetically all these players
              are ranged in their abilities, although when you fill out the form it may be helpful to think in terms of who you play with. Now suppose
              I think that I'm the third best passer/assister on the court. This would put me in the <b>70th percentile</b> of all players. So under
              the Assist Percentile Question, I would adjust the slider to be <b>70</b>. We've posed the questions in ways that will hopefully get
              you thinking about exactly which skill you are thinking of, and try to be modest! Placing yourself too high will only <b>skew your result,
              not give you a better player.</b> <br /><br /> Have fun! Hopefully you get LeBron like you've been saying for years. <br /><br />
              Note: At the bottom is Height, which you should do in inches(ex: 6 feet is 72 inches).
            </p>
        </div>
        );
    }
  }

export default Header