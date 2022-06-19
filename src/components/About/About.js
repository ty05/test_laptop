import React from 'react'
import styles from './About.module.css'
import Head from 'next/head'


export default function About() {
  return (
    <div className={styles.container}>
      <p className={styles.description}>This is the about page. This is where your things about stuff</p>       
    </div>
  )
}
