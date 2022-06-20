import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        A <span style={{color:"red"}}>Resume</span>
        <p className={styles.heading}>You can build your resume here <span style={{color:"red"}}>It's free</span></p>
      </div>
      <div  className={styles.right}>
        <img src="https://freepngimg.com/thumb/resume/4-2-resume-png-hd.png" alt='resume'/>
      </div>
    </div>
  )
}

export default Header