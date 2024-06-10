import AppointmentsTable from '@/components/AppointmentsTable';
import NavBar from '@/components/NavBar';

const Home = () => {
  return (
    <div className='flex flex-row'>
      <NavBar />
      <div className="w-5/6 h-screen ml-1/6 bg-gray-100">
        <AppointmentsTable />
      </div>
    </div>
  );
}

export default Home;