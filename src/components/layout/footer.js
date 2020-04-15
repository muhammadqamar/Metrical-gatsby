import React from "react"

import twitter from "../../images/icons/twitter_white.png"
import linkedin from "../../images/icons/linkedin_white.png"


export default function Footer(){
return(
 
  <div className="Footer">
    <div className="content">
      <div>
  <ul>
    <li><a href="/metrical/termsofuses">Terms of use</a></li>
    <li><a href="/metrical/privacypolicy">Privacy Policy</a></li>
    <li><a href="/metrical/cookiepolicy">Cookies</a></li>
  </ul>
  <span>© Copyright <a href="/">Metrical</a>, Inc., 2020. All rights reserved.</span>
  </div>
  <div className="social-images">
    <img src={twitter} />
    <img src={linkedin} />
    </div>
    </div>
    </div>
  

)


} 
