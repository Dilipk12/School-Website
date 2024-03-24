import {Link} from 'react-router-dom'

function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Link to="/" className='text-2xl font-bold text-[#da4a03]'>My School</Link>
    </div>
  )
}

export default Logo