import './App.css';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap'
import { useState } from 'react';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {

  const [params, setpParams] = useState({})
  const [page, setPage] = useState(1)

  const {jobs, loading, error} = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setpParams(prevParams => {
      return {...prevParams, [param]: value}
    })
  }
  return (

    <Container className="my-4">
      
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error, Try Refreshing.</h1>}
      <h1>Jobs from Github</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />

      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} />
    </Container>
    
  );
}

export default App;
