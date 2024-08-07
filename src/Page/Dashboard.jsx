
import Customerfeedback from '../Components/Customerfeedback'
import Main from '../Components/Main'
import Nav from '../Components/Nav'
import RecentOrder from '../Components/RecentOrder'
import Sidebar from '../Components/Sidebar'

const Dashboard = () => {
  return (
    <>
    <Nav />
    <div className='flex'>
      < Sidebar />
      <Main />
    </div>
    
    </>
  )
}

export default Dashboard