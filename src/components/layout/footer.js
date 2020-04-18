import React, { useEffect } from "react"

import twitter from "../../images/icons/twitter_white.png"
import linkedin from "../../images/icons/linkedin_white.png"

export default function Footer() {
  useEffect(() => {
    ;(function (d, w, c) {
      w.ChatraID = "jhZnb9xzQPx4cpPAD"
      var s = d.createElement("script")
      w[c] =
        w[c] ||
        function () {
          ;(w[c].q = w[c].q || []).push(arguments)
        }
      s.async = true
      s.src = "https://call.chatra.io/chatra.js"
      if (d.head) d.head.appendChild(s)
    })(document, window, "Chatra")
  }, [])
  return (
    <div className="Footer">
      <div className="content">
        <div>
          <ul>
            <li>
              <a href="/metrical/termsofuses">Terms of use</a>
            </li>
            <li>
              <a href="/metrical/privacypolicy">Privacy Policy</a>
            </li>
            <li>
              <a href="/metrical/cookiepolicy">Cookies</a>
            </li>
          </ul>
          <span>
            © Copyright <a href="/">Metrical</a>, Inc., 2020. All rights
            reserved.
          </span>
        </div>
        <div className="social-images">
          <a href="https://twitter.com/getmetrical" target="_blank">
            {" "}
            <img src={twitter} />
          </a>
          <a href="https://www.linkedin.com/company/metrical" target="_blank">
            {" "}
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  )
}
