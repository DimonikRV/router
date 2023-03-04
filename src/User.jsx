import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const [userData, setUserData] = useState(null)
  const { userId } = useParams()

  const fetchUserData = async (userId) => {
    const response = await fetch(`https://api.github.com/users/${userId}`)
    if (!response.ok) {
      throw new Error('Failed get data')
    }
    const data = await response.json()
    return data
  }

  const postUserData = async (userId) => {
    try {
      const userData = await fetchUserData(userId)
      return userData
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    ;(async () => {
      const userData = await postUserData(userId)
      setUserData(userData)
    })()
  }, [userId])

  if (!userData) {
    return null
  }
  const { avatar_url, name, location } = userData

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  )
}

export default User
