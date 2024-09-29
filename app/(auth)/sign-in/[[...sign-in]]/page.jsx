import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <Image src={'/login.jpg'} alt='login image' width={400} height={400} />
      </div>
      <div style={signInContainerStyle}>
        <SignIn />
      </div>
    </div>
  )
}

// Inline styles as JavaScript objects
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100vh', // Full height of the viewport
}

const imageContainerStyle = {
  flex: 1, // Takes up one part of the available space
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const signInContainerStyle = {
  flex: 1, // Takes up the remaining part of the available space
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
