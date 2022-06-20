import React from 'react'
import styles from "./Body.module.css"
const Body = () => {
  const colors=["red","green","blue","purple","black"]
  return (
    <div className={styles.container}>
        <p className={styles.heading}>RESUME BUILDER</p>
        <div className={styles.toolbar}>
          <div className={styles.colors}>
            {colors.map((item)=>(
             <span 
             key={item}
             style={{backgroundColor:item}}
             className={styles.color}/>
              ))
            }
          
          </div>
          <button>Download</button>
        </div>
    </div>
  )
}

export default Body