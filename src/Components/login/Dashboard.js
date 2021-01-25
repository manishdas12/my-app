import React, { useState } from 'react'; 
import ReactPaginate from 'react-paginate'; 
import { Modal, Button } from 'react-modal'

const NewsCard = (props) => {
	return (
		<div style={{ padding: '20' }}>
			<a href={props.url}>
				{props.title} by {props.body}
			</a>
		</div>
	);
};

function Dashboard() {

    const [hits, setHits] = useState([]);
    const [pageCount, setPageCount] = useState(1); 
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(0);
    // const [query, setQuery] = useState('startups'); 
    const [Data, setData] = useState('');

    const URL = `https://jsonplaceholder.typicode.com/posts`;

    const handleFetch = () => {
		fetch(URL)
			.then(response => response.json())
			.then(body => {
				setData([...body.hits]);
                                setPageCount(body.nbPages);
                                setisLoaded(true);
			})
			.catch(error => console.error('Error', error));
  };
     
	const handlePageChange = (selectedObject) => {
		setcurrentPage(selectedObject.selected);
		handleFetch();
	};

return (
    <div>
         <label>Search</label>
        <input type="text" onChange={(event) => setData(event.target.value)} />
        <button onClick={handleFetch} >Get Data</button>
        

			{isLoaded ? (
				hits.map((item) => {
					return (
						<NewsCard
							// url={item.url}
							title={item.title}
							body={item.body}
							// key={item.objectID}
						/>
					);
				})
			) : (
				<div></div>
			)}    
                     
			{isLoaded ? (
				<ReactPaginate
					pageCount={pageCount}
					pageRange={2}
					marginPagesDisplayed={2}
					onPageChange={handlePageChange}
					containerClassName={'container'}
					previousLinkClassName={'page'}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					pageClassName={'page'}
					disabledClassNae={'disabled'}
					activeClassName={'active'}
				/>
			) : (
				<div>Nothing to display</div>
			)} 

    </div>
);
  
}

export default Dashboard;