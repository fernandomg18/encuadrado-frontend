import NavBar from '@/components/NavBar';
import PaymentsTable from '@/components/PaymentsTable';

const Home = () => {
  return (
    <div className='flex flex-row'>
      <NavBar />
      <div className="w-5/6 h-screen ml-1/6 bg-gray-100">
        <PaymentsTable />
      </div>
    </div>
  );
}

export default Home;