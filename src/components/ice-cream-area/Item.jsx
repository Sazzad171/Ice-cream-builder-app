import React from 'react'

export default function Item({flavourItems}) {
  return (
    <>
      <div className={`scoop ${flavourItems}`}></div>
    </>
  )
}
